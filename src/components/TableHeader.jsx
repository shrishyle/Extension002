import React from "react";
export default function TableHeader() {
  return (
    <thead>
      <tr>
        <th
          key={"2000"}
          className="min-w-1/12 max-h-24 p-1 border-none bg-blue-200 font-(family-name:<calibri>) font-medium pr-2 pl-2 pt-1 pb-1 rounded-tl-xl 
 "
        >
          Sr. No.
        </th>
        <th
          key={"2001"}
          className="min-w-3/12 max-h-24 p-1  border-none bg-blue-200 font-(family-name:<calibri>) font-medium pr-2 pl-2 pt-1 pb-1
 "
        >
          Task Description
        </th>
        <th
          key={"2002"}
          className="min-w-1/12 max-h-24 p-1 border-none  bg-blue-200 font-(family-name:<calibri>) font-medium pr-2 pl-2 pt-1 pb-1
 "
        >
          Date
        </th>
        <th
          key={"2003"}
          className="min-w-4/12 max-h-24 p-1 border-none  bg-blue-200 font-(family-name:<calibri>) font-medium pr-2 pl-2 pt-1 pb-1
 "
        >
          Task Update
        </th>
        <th
          key={"2004"}
          className="min-w-3/12 max-h-24 p-1 border-none  bg-blue-200 font-(family-name:<calibri>) font-medium pr-2 pl-2 pt-1 pb-1 rounded-tr-xl
 "
        >
          Comments
        </th>
      </tr>
    </thead>
  );
}
