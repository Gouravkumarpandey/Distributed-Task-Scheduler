export function loggerMiddleware(_req: unknown, _res: unknown, next: () => void) {
  next();
}
