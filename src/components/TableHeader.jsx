import TH from "./TH";
export default function TableHeader() {
  return (
    <thead>
      <tr>
        <TH key={"2000"} classes="pr-2 pl-2 pt-1 pb-1 rounded-tl-xl">
          Sr. No.
        </TH>
        <TH key={"2001"} classes="pr-2 pl-2 pt-1 pb-1">
          Task Description
        </TH>
        <TH key={"2002"} classes="pr-2 pl-2 pt-1 pb-1">
          Date
        </TH>
        <TH key={"2003"} classes="pr-2 pl-2 pt-1 pb-1">
          Task Update
        </TH>
        <TH key={"2004"} classes="pr-2 pl-2 pt-1 pb-1 rounded-tr-xl">
          Comments
        </TH>
      </tr>
    </thead>
  );
}
