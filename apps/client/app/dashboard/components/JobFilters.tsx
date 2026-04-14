export function JobFilters() {
  return (
    <section>
      <h2>Filters</h2>
      <label>
        Status
        <select defaultValue="all">
          <option value="all">All</option>
          <option value="queued">Queued</option>
          <option value="running">Running</option>
          <option value="failed">Failed</option>
        </select>
      </label>
    </section>
  );
}
