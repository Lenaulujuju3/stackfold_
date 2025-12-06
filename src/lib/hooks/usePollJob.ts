import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function usePollJob(jobId: string | null) {
  const { data, error } = useSWR(
    jobId ? `/api/dashboard/score?jobId=${jobId}` : null,
    fetcher,
    { refreshInterval: 2000 }
  );
  
  return { 
    data, 
    isLoading: !error && !data, 
    error 
  };
}
