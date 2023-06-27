module Event = {
  module Type = {
    type t = AVAILABILITY | EXCEPTION | RESERVATION | OTHER_RESERVATION
  }

  type t = {
    start: Js.Date.t,
    end: Js.Date.t,
    title: string,
    allDay: bool,
    _type: Type.t,
  }
}

@genType.import("./Calendar") @react.component
external make: (~events: array<Event.t>) => React.element = "Calendar"
