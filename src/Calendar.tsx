import { getHours } from "date-fns";
import parse from "date-fns/parse";
import { useMemo } from "react";
import {
  Calendar as BigCalendar,
  Formats,
  NavigateAction,
  View,
  Views,
} from "react-big-calendar";
import EventComponent from "./EventComponent";
import "./bigcalendar.css";
import { localizer } from "./localizer1";
require("globalize/lib/cultures/globalize.culture.fi");

const events = [
  {
    title: "event1",
    start: new Date(2023, 5, 22, 20, 0, 0, 0),
    end: new Date(2023, 5, 22, 23, 0, 0, 0),
    allDay: false,
  },

  {
    title: "event2",
    start: new Date(2023, 5, 22, 19, 0, 0, 0),
    end: new Date(2023, 5, 22, 21, 0, 0, 0),
    allDay: false,
  },
];

const mLocalizer = localizer;
console.log({ mLocalizer });

const formats: Formats = {
  dayFormat: (date: any, culture: any, localizer: any) => {
    return localizer.format(date, "eeeeee d:L", culture).toUpperCase();
  },
  timeGutterFormat: (date: any, culture: any, localizer: any) => {
    return localizer.format(date, "H.mm", culture);
  },
};

const dateString = "Fri Jun 23 2023 18:30:00 GMT+0300";
const date = parse(dateString, "MM/dd/yyyy", new Date());
console.log("parsed date", date);

const today = new Date(2023, 5, 22, 0, 0, 0, 0);

const parseDateString = (dateString: string) => {
  const parsed = Date.parse(dateString);
  return new Date(parsed);
};

interface MyEventProps {
  event: any;
  title: string;
}

const MyEvent = (props: MyEventProps) => {
  //const { event, title } = props;
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
          return <div>{eventWrapperProps.children} </div>;
        },
        timeSlotWrapper: (timeSlotWrapperProps: any) => {
          // only for the time showing column, the very first column
          //console.log("timeSlotWrapperProps ", { timeSlotWrapperProps });
          const date = parseDateString(timeSlotWrapperProps.value);
          const hours = getHours(date);
          if (hours < 8 || hours > 22) return null;

          return <div>{timeSlotWrapperProps.children}</div>;
        },
      },
      defaultDate: today,
      views: [Views.WEEK, Views.WORK_WEEK],
    };
  }, []);

  return (
    <BigCalendar
      culture={"fi"}
      components={components}
      defaultView={Views.WORK_WEEK}
      defaultDate={defaultDate}
      events={events}
      localizer={mLocalizer}
      //step={30}
      views={views}
      showAllEvents={true}
      eventPropGetter={(event, start, end, isSelected) => {
        return {
          style: {},
          className: "",
        };
      }}
      formats={formats}
      toolbar={false}
      onNavigate={(newDate: Date, view: View, action: NavigateAction) => {
        console.log("onNavigation action", { newDate, view, action });
      }}
    />
  );
};
