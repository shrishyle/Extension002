import React from "react";
import TH from "./TH";
export default function TableHeader() {
  return (
    <thead>
      <tr>
        <TH classes="pr-2 pl-2 pt-1 pb-1 rounded-tl-xl" label="Sr. No."></TH>
        <TH classes="pr-2 pl-2 pt-1 pb-1" label="Task Description"></TH>
        <TH classes="pr-2 pl-2 pt-1 pb-1" label="Date"></TH>
        <TH classes="pr-2 pl-2 pt-1 pb-1" label="Task Update"></TH>
        <TH classes="pr-2 pl-2 pt-1 pb-1 rounded-tr-xl" label="Comments"></TH>
      </tr>
    </thead>
  );
}

