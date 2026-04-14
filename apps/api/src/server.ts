import { env } from "./config/env";
import { app } from "./app";

void app;

console.log(`API server listening on port ${env.port}`);
