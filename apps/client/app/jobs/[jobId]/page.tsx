export default function JobDetailsPage({ params }: { params: { jobId: string } }) {
  return (
    <main style={{ padding: 32 }}>
      <h1>Job {params.jobId}</h1>
    </main>
  );
}
