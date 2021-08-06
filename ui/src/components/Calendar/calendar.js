import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import "./calendar.css";
import apiClient from "../../services/apiClient";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { IconButton, Tooltip } from "@material-ui/core";

export default function Calendar() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [userData, setUserData] = useState([]);
  const [userMinData, setUserMinData] = useState([]);
  // const [minutes, setMinutes] = useState(0);
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const firstOfMonth = new Date(today.getFullYear(), month, 1)
    .toISOString()
    .slice(0, 10);
  const lastDayOfMonth = new Date(today.getFullYear(), month + 1, 0)
    .toISOString()
    .slice(0, 10);
  const displayMonth = monthNames[month % 12];

  // getting user data with total rounds summed per date
  useEffect(() => {
    const fetchUserRounds = async () => {
      // make api call
      const { data } = await apiClient.getUserRoundCount();
      // console.log(data);
      if (data) setUserData(data.userRounds);
      // console.log("the data from the api call", data);
    };
    fetchUserRounds();
  }, []);

  // getting user data with minutes summed per date
  useEffect(() => {
    const fetchUserMinutes = async () => {
      // make api call
      const { data } = await apiClient.getUserMinutes();
      // console.log(data);
      if (data) {
        setUserMinData(data.userTimeLogged);
      }
    };
    fetchUserMinutes();
  }, []);

  // for what month do we have data?
  //do not allow the user to look before that month
  // const beginMonthForUser = parseInt(minutes[0].date_logged.slice(5, 7));

  // data used in calendar
  const dataFromUser = userData.map((entry) => {
    return {
      date: entry.date_logged.slice(0, 10),
      count: Math.ceil(entry.sum / 4),
    };
  });
  return (
    <div className="calendar-box">
      <div className="month">
        <Tooltip title="no data before this month">
          <span>
            <IconButton disabled={true}>
              <ArrowBackIosIcon onClick={() => setMonth((prev) => prev - 1)} />
            </IconButton>
          </span>
        </Tooltip>
        <h1>{displayMonth}</h1>
        <Tooltip title="no data past current month">
          <span>
            <IconButton disabled={true}>
              <ArrowForwardIosIcon
                onClick={() => setMonth((prev) => prev + 1)}
              />
            </IconButton>
          </span>
        </Tooltip>
      </div>
      <div className="daysOfWeek">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
      <div className="calendar">
        <CalendarHeatmap
          startDate={shiftDate(firstOfMonth, -1)}
          endDate={lastDayOfMonth}
          horizontal={false}
          values={dataFromUser}
          showOutOfRangeDays={false}
          gutterSize={2}
          showWeekdayLabels={false}
          showMonthLabels={false}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-github-${value.count}`;
          }}
          tooltipDataAttrs={(value) => {
            return {
              "data-tip": `${
                value.date ? value.date : ""
              } the amount of pomodoro sessions done: ${
                value.count ? value.count : 0
              }`,
            };
          }}
        />
        <ReactTooltip border={false} type={"dark"} />
      </div>
      {/* <div className="displayUserMinutes">
        <div>
          <h2>Total focus minutes for today</h2>
        </div>
        <div className="numberMinutesBox">
          <h2 className="numberMinutes">{minutes}</h2>
        </div>
      </div> */}
    </div>
  );

  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }
}
