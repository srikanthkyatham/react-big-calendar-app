import moment from "moment";
import { useMemo } from "react";
import {
  Calendar as BigCalendar,
  Views,
  momentLocalizer,
} from "react-big-calendar";
import EventComponent from "./EventComponent";
import "./bigcalendar.css";

const events = [
  {
    title: "event1",
    start: new Date(2023, 5, 22, 21, 0, 0, 0),
    end: new Date(2023, 5, 22, 22, 0, 0, 0),
    allDay: false,
  },
];

const mLocalizer = momentLocalizer(moment);

const today = new Date(2023, 5, 22, 0, 0, 0, 0);

interface MyEventProps {
  event: any;
  title: string;
}

const MyEvent = (props: MyEventProps) => {
  const { event, title } = props;
  console.log("MyEvent props ", { props });
  return <EventComponent {...props} />;
};

export const Calendar = (props: any) => {
  const { components, defaultDate, views } = useMemo(() => {
    return {
      components: {
        event: MyEvent,
        // event
        // eventWrapper
        // eventContainerWrapper
        eventWrapper: (eventWrapperProps: any) => {
          //return <EventComponent {...eventWrapperProps.event} />;
          console.log("eventPropGetter", { eventWrapperProps });
          return <div>{eventWrapperProps.children} </div>;
        },
      },
      defaultDate: today,
      views: [
        Views.AGENDA,
        Views.DAY,
        Views.MONTH,
        Views.WEEK,
        Views.WORK_WEEK,
      ],
    };
  }, []);

  return (
    <BigCalendar
      components={components}
      defaultView={Views.WORK_WEEK}
      defaultDate={defaultDate}
      events={events}
      localizer={mLocalizer}
      step={60}
      views={views}
      showAllEvents={true}
      eventPropGetter={(event, start, end, isSelected) => {
        console.log("eventPropGetter ", { event });
        return {
          style: {},
          className: "rectangle",
        };
      }}
    />
  );
};
