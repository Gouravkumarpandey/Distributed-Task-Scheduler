import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Distributed Task Scheduler</h1>
      <p>Dashboard scaffold for managing jobs, workers, and scheduling.</p>
      <Link href="/dashboard">Open dashboard</Link>
    </main>
  );
}
