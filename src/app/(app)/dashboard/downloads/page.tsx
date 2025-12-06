"use client";
import { motion } from "framer-motion";
import { Download, FileText, Calendar, Database } from 'lucide-react';

interface Download {
  id: string;
  name: string;
  date: string;
  records: number;
  size: string;
  format: string;
}

const mockDownloads: Download[] = [
  { id: '1', name: 'HNW_NY_Q2_2025.csv', date: '2025-06-01', records: 125000, size: '18 MB', format: 'CSV' },
  { id: '2', name: 'Solar_Ready_CA_Q1_2025.csv', date: '2025-05-15', records: 89000, size: '13 MB', format: 'CSV' },
  { id: '3', name: 'Credit_Intent_TX_2025.parquet', date: '2025-05-10', records: 156000, size: '22 MB', format: 'Parquet' },
  { id: '4', name: 'HELOC_Appetite_FL_Q1_2025.csv', date: '2025-04-28', records: 67000, size: '9 MB', format: 'CSV' },
  { id: '5', name: 'Auto_Refi_National_2025.parquet', date: '2025-04-15', records: 234000, size: '35 MB', format: 'Parquet' },
];

export default function DownloadsPage() {
  const handleReDownload = (download: Download) => {
    // Simulate re-download
    console.log('📥 Re-downloading:', download.name);
    // In production, this would trigger a signed URL download
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Download Center</h1>
        <p className="text-white/70">Access your previously exported data segments</p>
      </div>

      <div className="grid gap-4">
        {mockDownloads.map((download, i) => (
          <motion.div
            key={download.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-accent/20 text-accent">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{download.name}</h3>
                  <div className="grid grid-cols-3 gap-4 mt-2 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{download.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4" />
                      <span>{download.records.toLocaleString()} records</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>{download.size} ({download.format})</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleReDownload(download)}
                className="ml-6 px-4 py-2 rounded-lg bg-accent/80 hover:bg-accent transition text-sm font-medium flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Re-download
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
