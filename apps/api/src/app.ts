import { registerJobRoutes } from "./modules/job/job.routes";

export function createApp() {
  const handlers = new Map<string, unknown>();

  return {
    get(path: string, handler: unknown) {
      handlers.set(path, handler);
    },
    handlers
  };
}

export const app = createApp();
registerJobRoutes(app);
