import { JobFilters } from "./components/JobFilters";
import { JobStats } from "./components/JobStats";
import { JobTable } from "./components/JobTable";

export default function DashboardPage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Dashboard</h1>
      <JobStats />
      <JobFilters />
      <JobTable />
    </main>
  );
}
