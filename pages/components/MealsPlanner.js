import { useState, useEffect, useRef } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
//import DatePicker from "react-datepicker";
import moment from "moment";
//import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Container } from "react-bootstrap";

export default function MealsPlanner() {
  const myEventsList = useRef([]);

  const localizer = momentLocalizer(moment);

  function addTravelToCalendar(tripLength) {
    myEventsList.current.splice(0, 1, tripLength);
  }

  function addSuggestionToCalendar(sugg) {
    myEventsList.current.push(sugg);
  }

  function calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) {
      startDate = moment(startDate);
    }
    if (!moment.isMoment(endDate)) {
      endDate = moment(endDate);
    }

    return endDate.diff(startDate, "days") + 1;
  }

  function BigCalendar() {
    return (
      <div className="app">
        <Calendar
          localizer={localizer}
          events={myEventsList.current}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    );
  }

  return (
    <div className="calendar-background">
      <br />
      <BigCalendar />
      <br />
    </div>
  );
}
