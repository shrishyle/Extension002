export default function TableHeader() {
  return (
    <thead>
      <tr>
        <th key={2000} className="serial">
          Sr. No.
        </th>
        <th key={2001} className="task-description">
          Task Description
        </th>
        <th key={2002} className="date">
          Date
        </th>
        <th key={2003} className="tas-update">
          Task Update
        </th>
        <th key={2004} className="comments">
          Comments
        </th>
      </tr>
    </thead>
  );
}
