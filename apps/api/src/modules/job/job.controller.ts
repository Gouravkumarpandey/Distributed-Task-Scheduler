import { jobService } from "./job.service";

export const jobController = {
  list: (_req: unknown, res: { json: (value: unknown) => void }) => {
    res.json(jobService.listJobs());
  }
};
