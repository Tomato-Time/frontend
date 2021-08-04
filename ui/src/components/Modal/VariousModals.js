import Settings from "../Settings/Settings";
import TodoForm from "../Todo/TodoForm";
import Calendar from "../Calendar/calendar";
import AboutUs from "../AboutUs/aboutUs";

export default function VariousModals({ openModal }) {
  if (openModal === "Settings") {
    return <Settings />;
  }
  if (openModal === "To-Do") {
    return <TodoForm />;
  }
  if (openModal === "Statistics") {
    return <Calendar />;
  }
  if (openModal === "About") {
    return <AboutUs />;
  } else {
    return null;
  }
}
