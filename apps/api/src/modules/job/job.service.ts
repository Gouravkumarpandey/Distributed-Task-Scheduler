import type { JobRecord } from "./job.types";

const jobs: JobRecord[] = [];

export const jobService = {
  listJobs: () => jobs,
  getJob: (id: string) => jobs.find((job) => job.id === id) ?? null,
  createJob: (job: JobRecord) => {
    jobs.push(job);
    return job;
  }
};
