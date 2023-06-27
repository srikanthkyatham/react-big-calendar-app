let events: array<ReactBigCalendar.Event.t> = [
  {
    title: "event1",
    start: Js.Date.makeWithYMDHMS(
      ~year=2023.0,
      ~month=5.0,
      ~date=26.0,
      ~hours=20.0,
      ~minutes=0.0,
      ~seconds=0.0,
      (),
    ),
    end: Js.Date.makeWithYMDHMS(
      ~year=2023.0,
      ~month=5.0,
      ~date=26.0,
      ~hours=21.0,
      ~minutes=0.0,
      ~seconds=0.0,
      (),
    ),
    allDay: false,
    eventType: #AVAILABILITY,
  },
]

let backgroundEvents: array<ReactBigCalendar.Event.t> = [
  {
    title: "event2",
    start: Js.Date.makeWithYMDHMS(
      ~year=2023.0,
      ~month=5.0,
      ~date=26.0,
      ~hours=19.0,
      ~minutes=0.0,
      ~seconds=0.0,
      (),
    ),
    end: Js.Date.makeWithYMDHMS(
      ~year=2023.0,
      ~month=5.0,
      ~date=26.0,
      ~hours=21.0,
      ~minutes=0.0,
      ~seconds=0.0,
      (),
    ),
    allDay: false,
    eventType: #RESERVATION,
  },
]

@genType @react.component
let make = () => {
  <ReactBigCalendar events backgroundEvents />
}
