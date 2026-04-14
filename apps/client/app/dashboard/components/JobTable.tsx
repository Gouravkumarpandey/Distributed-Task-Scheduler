import { JobRow } from "./JobRow";

export function JobTable() {
  return (
    <section>
      <h2>Jobs</h2>
      <table>
        <tbody>
          <JobRow jobId="job-1" name="Email digest" status="queued" />
        </tbody>
      </table>
    </section>
  );
}
