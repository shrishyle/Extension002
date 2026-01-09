import { useContext } from "react";
import CreateNewTaskBtn from "./CreateNewTaskBtn";
import { FormDisplayContext } from "../store/form-display-context";

const Sidebar = ({ taskData }) => {
  const { formDisplayState } = useContext(FormDisplayContext);

  return <div className="w-1/7 min-h-screen bg-teal-50 flex flex-col items-center justify-top shadow-md text-grey-500 p-1">{formDisplayState.CreateNewTaskBtn && <CreateNewTaskBtn />}</div>;
};

export default Sidebar;
