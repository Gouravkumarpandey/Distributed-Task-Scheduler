export function errorMiddleware(err: unknown, _req: unknown, res: { status: (code: number) => { json: (value: unknown) => void } }) {
  res.status(500).json({ message: "Internal Server Error", error: err });
}
