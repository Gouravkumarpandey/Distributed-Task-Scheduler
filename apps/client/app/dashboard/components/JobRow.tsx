import { RetryButton } from "./RetryButton";
import { StatusBadge } from "./StatusBadge";

export function JobRow({ jobId, name, status }: { jobId: string; name: string; status: string }) {
  return (
    <tr>
      <td>{jobId}</td>
      <td>{name}</td>
      <td>
        <StatusBadge status={status} />
      </td>
      <td>
        <RetryButton />
      </td>
    </tr>
  );
}
