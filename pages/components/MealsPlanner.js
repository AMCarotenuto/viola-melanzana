import { useState, useEffect, useRef } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
//import DatePicker from "react-datepicker";
import moment from "moment";
//import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function MealsPlanner() {
  const myEventsList = useRef([]);
  const localizer = momentLocalizer(moment);
  // const [suggestionToAdd, setsuggestionToAdd] = useState(suggestionToAdd);

  // const [favourites, setFavourites] = useState([]);

  // const fetchRecipes = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3001/recipes");
  //     setFavourites(await res.data.records.map((r) => r.fields));
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(async () => {
  //   fetchRecipes();
  // }, []);

  // useEffect(() => {
  //   setsuggestionToAdd(suggestionToAdd);
  //   addSuggestionToCalendar(suggestionToAdd);
  // }, [suggestionToAdd]);

  // function addSuggestionToCalendar(sugg) {
  //   myEventsList.current.push(sugg);
  //}

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