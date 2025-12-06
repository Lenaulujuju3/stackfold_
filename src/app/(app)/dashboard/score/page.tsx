"use client";

import { useDropzone } from 'react-dropzone';
import { usePollJob } from '../../../../lib/hooks/usePollJob';

export default function ScorePage() {
  const [file, setFile] = useState<File | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const { data, isLoading } = usePollJob(jobId);

  const onDrop = useCallback((files: File[]) => {
    setFile(files[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'text/csv': ['.csv'] },
  });

  const startScoring = async () => {
    if (!file) return;
    const res = await fetch('/api/dashboard/score', { 
      method: 'POST', 
      body: JSON.stringify({ filename: file.name }) 
    });
    const { jobId: id } = await res.json();
    setJobId(id);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Score Customer File</h1>
      
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition ${
          isDragActive ? 'border-accent' : 'border-white/20'
        } ${file ? 'border-green-400 bg-green-400/5' : 'bg-white/5 hover:bg-white/10'}`}
      >
        <input {...getInputProps()} />
        {file ? (
          <p className="text-green-400">✓ {file.name} uploaded successfully</p>
        ) : (
          <p className="text-white/70">Drop a CSV file here, or click to select</p>
        )}
      </div>

      {file && (
        <div className="mt-6 flex gap-4">
          <button
            onClick={startScoring}
            disabled={isLoading}
            className="px-4 py-2 rounded-lg bg-accent hover:bg-accent/80 transition disabled:opacity-50 text-white"
          >
            {isLoading ? 'Scoring...' : 'Start Scoring'}
          </button>
          <button
            onClick={() => setFile(null)}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white"
          >
            Clear
          </button>
        </div>
      )}

      {data?.downloadUrl && (
        <a
          href={data.downloadUrl}
          download
          className="mt-4 inline-block px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition text-white"
        >
          Download Scored File
        </a>
      )}
    </div>
  );
}
