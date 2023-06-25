import { useMemo } from "react";
import { Calendar as BigCalendar, Formats, Views } from "react-big-calendar";
import EventComponent from "./EventComponent";
import "./bigcalendar.css";
import { localizer } from "./localizer1";
require("globalize/lib/cultures/globalize.culture.fi");

//printFormats();

const cultures = ["fi"];
const lang = {
  en: null,
  "en-GB": null,
  es: {
    week: "Semana",
    work_week: "Semana de trabajo",
    day: "Día",
    month: "Mes",
    previous: "Atrás",
    next: "Después",
    today: "Hoy",
    agenda: "El Diario",

    showMore: (total: any) => `+${total} más`,
  },
};

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

//const mLocalizer = momentLocalizer(moment);
const mLocalizer = localizer;
console.log({ mLocalizer });

const formats: Formats = {
  dayFormat: (date: any, culture: any, localizer: any) => {
    return localizer.format(date, "eeeeee d:L", culture).toUpperCase();
  },
};

const today = new Date(2023, 5, 22, 0, 0, 0, 0);

interface MyEventProps {
  event: any;
  title: string;
}

const MyEvent = (props: MyEventProps) => {
  const { event, title } = props;
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
      culture={"fi"}
      components={components}
      defaultView={Views.WORK_WEEK}
      defaultDate={defaultDate}
      events={events}
      localizer={mLocalizer}
      step={30}
      views={views}
      showAllEvents={true}
      eventPropGetter={(event, start, end, isSelected) => {
        return {
          style: {},
          className: "",
        };
      }}
      formats={formats}
    />
  );
};
