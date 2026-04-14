export type JobStatus = "queued" | "running" | "succeeded" | "failed";
export type JobType = "email" | "file" | "api";

export type Job = {
  id: string;
  type: JobType;
  status: JobStatus;
  createdAt: string;
};
