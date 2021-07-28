import Settings from "../Settings/Settings";
import TodoForm from "../Todo/TodoForm";
import Calendar from "../Calendar/calendar";

export default function VariousModals({ openModal }) {
  console.log(openModal);
  if (openModal === "Settings") {
    return <Settings />;
  }
  if (openModal === "To-Do") {
    return <TodoForm />;
  }
  if (openModal === "Statistics") {
    return <Calendar />;
  } else {
    return null;
  }
}
