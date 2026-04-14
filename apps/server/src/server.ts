import { env } from "./config/env";
import { app } from "./app";

void app;

console.log(`Server listening on port ${env.port}`);
