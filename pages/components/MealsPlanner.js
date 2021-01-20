import { useState, useEffect, useRef } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
//import DatePicker from "react-datepicker";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
//import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function MealsPlanner({ r }) {
  const myEventsList = useRef([]);
  const [suggestionToAdd, setSuggestionToAdd] = useState();
  const [event, setEvent] = useState();
  const { label, image, url, source, ingredientName, date } = r;
  const localizer = momentLocalizer(moment);

  // function BigCalendar() {
  //   return (
  //     <div className="app">
  //       <Calendar
  //         localizer={localizer}
  //         events={myEventsList.current}
  //         startAccessor="start"
  //         endAccessor="end"
  //         style={{ height: 500 }}
  //       />
  //     </div>
  //   );
  // }

  function addSuggestionToCalendar(sugg) {
    myEventsList.current.push(sugg);
  }

  useEffect(async () => {
    setEvent({
      start: date,
      end: date,
      title: label,
    });
  }, []);

  return (
    <div className="calendar-background">
      {addSuggestionToCalendar(event)}
      {/* <BigCalendar /> */}
    </div>
  );
}
