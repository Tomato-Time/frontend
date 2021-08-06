import Settings from "../Settings/Settings";
import TodoForm from "../Todo/TodoForm";
import Calendar from "../Calendar/calendar";
import AboutUs from "../AboutUs/aboutUs";

export default function VariousModals({ selectedModal, openModal }) {
  console.log("selectedModal", selectedModal);
  if (selectedModal === "Settings") {
    return <Settings />;
  }
  if (selectedModal === "To-Do") {
    return <TodoForm openModal={openModal} />;
  }
  if (selectedModal === "Statistics") {
    return <Calendar />;
  }
  if (selectedModal === "About") {
    return <AboutUs />;
  } else {
    return null;
  }
}
