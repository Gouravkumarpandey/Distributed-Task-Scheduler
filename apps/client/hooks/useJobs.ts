export function useJobs() {
  return { jobs: [] as Array<{ id: string; name: string }>, isLoading: false };
}
