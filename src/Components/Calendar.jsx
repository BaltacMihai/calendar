import React, { useEffect } from "react";
function Calendar() {
  let events = [
    { name: "Create The Navbars", color: "#FFC400", date: "12" },
    { name: "Meeting With the board", color: "#72A1E5", date: "14" },
    { name: "PoC To Be Done", color: "#72A1E5", date: "11" },
    { name: "Create something", color: "#72A1E5", date: "21" },
    { name: "Create something", color: "#FFC400", date: "21" },
  ];

  useEffect(() => {
    console.log(events);

    let currentDate = new Date();
    let date = document.getElementById("day-" + currentDate.getDate());
    date.classList.add("calendar_body_item-today");

    events.forEach((e) => {
      let addEvent = document.getElementById("day-" + e.date);

      //#TODO: If I get more than one event on one day to modify it

      //#TODO: Also, what to do when i have more than one event
      addEvent.classList.add("calendar_body_item-event");
      addEvent.style.backgroundColor = e.color;
      addEvent.title = e.name;
    });
  });

  return returnCalendarLayout();
}

function returnCalendarLayout() {
  return (
    <div className="calendar">
      {returnCalendarHeader()}
      {returnCalendarBody()}
    </div>
  );
}

function returnCalendarHeader() {
  return (
    <div className="calendar_header">
      <div className="calendar_header_item">M</div>
      <div className="calendar_header_item">T</div>
      <div className="calendar_header_item">W</div>
      <div className="calendar_header_item">T</div>
      <div className="calendar_header_item">F</div>
      <div className="calendar_header_item">S</div>
      <div className="calendar_header_item">S</div>
    </div>
  );
}

function returnCalendarBody() {
  let firstDay = firstAndLastDayOfTheMonth(0).firstDay;
  let lastDay = firstAndLastDayOfTheMonth(0).lastDay;

  return (
    <div className="calendar_body">
      {generateSpaces(firstDay.getDay())}
      {generateCurrentCalendarDates(lastDay.getDate() + 1)}
      {generateSpaces(lastDay.getDay())}
    </div>
  );
}

function generateCurrentCalendarDates(noOfDays) {
  return [...Array(noOfDays)].map((e, i) => {
    if (i > 0) {
      return (
        <abbr className="calendar_body_item" id={"day-" + i} key={"day-" + i}>
          {i}
        </abbr>
      );
    }
  });
}

function generateSpaces(noOfSpaces) {
  return [...Array(noOfSpaces)].map((e, i) => {
    if (i > 0) {
      return <div className="calendar_body_item" key={e}></div>;
    }
  });
}

function firstAndLastDayOfTheMonth(monthForNow) {
  let currentDate = new Date();

  let firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + monthForNow,
    1
  );
  console.log(firstDay);
  let lastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1 + monthForNow,
    0
  );

  return {
    firstDay: firstDay,
    lastDay: lastDay,
  };
}

export default Calendar;
