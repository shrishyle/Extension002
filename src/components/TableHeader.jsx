import React from "react"; // Add this line
export default function TableHeader() {
  return (
    <thead>
      <tr>
        <th
          key={"2000"}
          className="min-w-1/12 max-h-24 p-1 border-blue-300 border bg-blue-200 font-(family-name:<calibri>) font-medium
 "
        >
          Sr. No.
        </th>
        <th
          key={"2001"}
          className="min-w-3/12 max-h-24 p-1  border-blue-300 border bg-blue-200 font-(family-name:<calibri>) font-medium
 "
        >
          Task Description
        </th>
        <th
          key={"2002"}
          className="min-w-1/12 max-h-24 p-1  border-blue-300 border bg-blue-200 font-(family-name:<calibri>) font-medium
 "
        >
          Date
        </th>
        <th
          key={"2003"}
          className="min-w-4/12 max-h-24 p-1  border-blue-300 border bg-blue-200 font-(family-name:<calibri>) font-medium
 "
        >
          Task Update
        </th>
        <th
          key={"2004"}
          className="min-w-3/12 max-h-24 p-1  border-blue-300 border bg-blue-200 font-(family-name:<calibri>) font-medium
 "
        >
          Comments
        </th>
      </tr>
    </thead>
  );
}
