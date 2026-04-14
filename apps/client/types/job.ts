export type JobStatus = "queued" | "running" | "succeeded" | "failed";

export type Job = {
  id: string;
  name: string;
  status: JobStatus;
};
