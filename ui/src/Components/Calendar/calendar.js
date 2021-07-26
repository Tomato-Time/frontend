import React from 'react';
import ReactDOM from 'react-dom';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import "./calendar.css"
import { Button } from '@material-ui/core';

export default function Calendar(){

    const today = new Date();

      const randomValues = getRange(200).map(index => {
        return {
          date: shiftDate(today, -index),
          count: getRandomInt(1, 4),
        };
      });
      return (
        <div className="calendar-box">
          {/* <h1>react-calendar-heatmap demos</h1>
          <p>Random values with onClick and react-tooltip</p> */}
          <CalendarHeatmap
            // startDate={shiftDate(today, -30)}
            startDate={new Date('2021-07-2')}
            endDate={today}
            horizontal={false}
            values={randomValues}
            showOutOfRangeDays={false}
            // showMonthLabels={false}
            showWeekdayLabels
            weekdayLabels={['Sun',"Mon","Tue","Wed","Thur","Fri","Sat"]}
            // monthLabels={["s","d","h"]}
            classForValue={value => {
              if (!value) {
                return 'color-empty';
              }
              return `color-github-${value.count}`;
            }}
            tooltipDataAttrs={value => {
              return {
                'data-tip': `${value.date.toISOString().slice(0, 10)} the amount of pomodoro sessions done: ${
                  value.count
                }`,
              };
            }}

            // onClick={value => alert(`Clicked on value with count: ${value.count}`)}
          />
          <ReactTooltip />
        </div>
      );
    
    function shiftDate(date, numDays) {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + numDays);
      return newDate;
    }
    
    function getRange(count) {
      return Array.from({ length: count }, (_, i) => i);
    }
    
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
      
}