import { jobController } from "./job.controller";

export function registerJobRoutes(app: { get: (path: string, handler: unknown) => void }) {
  app.get("/jobs", jobController.list);
}
