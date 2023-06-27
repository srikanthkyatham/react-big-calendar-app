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
    start: new Date(2023, 5, 26, 20, 0, 0, 0),
    end: new Date(2023, 5, 26, 21, 0, 0, 0),
    allDay: false,
    type: "AVAILABILITY",
  },

  {
    title: "event3",
    start: new Date(2023, 5, 26, 10, 0, 0, 0),
    end: new Date(2023, 5, 26, 12, 0, 0, 0),
    allDay: false,
    type: "EXCEPTION",
  },
];

const backgroundEvents = [
  {
    title: "event2",
    start: new Date(2023, 5, 26, 19, 0, 0, 0),
    end: new Date(2023, 5, 26, 21, 0, 0, 0),
    allDay: false,
    type: "RESERVATION",
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

const today = new Date(2023, 5, 26, 0, 0, 0, 0);

interface MyEventProps {
  event: any;
  title: string;
}

const MyEvent = (props: MyEventProps) => {
  //const { event, title } = props;

  return <EventComponent {...props} />;
};

const MyCustomHeader = (props: any) => {
  const { label } = props;
  return <div>{label}</div>;
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
        eventInnerWrapper: (eventWrapperProps: any) => {
          return <>{eventWrapperProps.children} </>;
        },

        week: {
          header: MyCustomHeader,
        },
        work_week: {
          header: MyCustomHeader,
        },

        /*timeSlotWrapper: (timeSlotWrapperProps: any) => {
          const date = timeSlotWrapperProps.value;
          const hours = getHours(date);
          if (hours < 8 || hours > 22) return null;

          return <div>{timeSlotWrapperProps.children}</div>;
        },
        timeSlotContainerWrapper: (timeSlotContainerWrapperProps: any) => {
          const { group } = timeSlotContainerWrapperProps;
          const dontRender = group.some((date: Date) => {
            const currentHour = date.getHours();
            return currentHour < 8 || currentHour > 22;
          });

          if (dontRender) return null;
          return <div>{timeSlotContainerWrapperProps.children}</div>;
        },*/
      },
      defaultDate: today,
      views: [Views.WEEK, Views.WORK_WEEK],
    };
  }, []);

  return (
    <div
      style={{
        marginLeft: "100px",
        marginTop: "50px",
        height: "100vh",
        width: "50%",
      }}
    >
      <BigCalendar
        culture={"fi"}
        components={components}
        defaultView={Views.WORK_WEEK}
        defaultDate={defaultDate}
        events={props.events}
        backgroundEvents={props.backgroundEvents}
        localizer={mLocalizer}
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
    </div>
  );
};
