import Timer from "../Timer/timer";
import MiniDrawer from "../SideBar/sidebar";
import HorizontalLabelPositionBelowStepper from "../TimerProgress/timerProgress";
import {
  RoundContext,
  SettingContext,
  TodoListContext,
} from "../../RoundContext";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import Quotes from "../Quote/quote";

export default function HomePage() {
  const [round, setRound] = useState(0);
  //just to render the components for the home page

  // settings
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(40);
  const [working, setWorking] = useState(25);
  const [volume, setVolume] = useState(true);

  // todo
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      // make api call
      const { data } = await apiClient.listTodos();
      console.log("the data from the api call", data);
      // setTodos
      if (data) setTodos(data.getTasks);
    };
    fetchTasks();
  }, [setTodos]);

  // checkboxes

  return (
    <div>
      <RoundContext.Provider value={{ round, setRound }}>
        <SettingContext.Provider
          value={{
            shortBreak,
            setShortBreak,
            longBreak,
            setLongBreak,
            working,
            setWorking,
            volume,
            setVolume
          }}
        >
          <Timer />
          <TodoListContext.Provider value={{ todos, setTodos }}>
            <MiniDrawer />
          </TodoListContext.Provider>
          <HorizontalLabelPositionBelowStepper />
        </SettingContext.Provider>
      </RoundContext.Provider>
    </div>
  );
}
