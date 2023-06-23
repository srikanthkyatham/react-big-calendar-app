import moment from "moment";
import { useMemo } from "react";
import {
  Calendar as BigCalendar,
  Views,
  momentLocalizer,
} from "react-big-calendar";
import "./bigcalendar.css";

const events = [
  {
    title: "event1",
    start: new Date(2023, 5, 23, 21, 0, 0, 0),
    end: new Date(2023, 5, 23, 22, 0, 0, 0),
    allDay: false,
  },
];

const mLocalizer = momentLocalizer(moment);

export const Calendar = (props: any) => {
  const { components, defaultDate, views } = useMemo(() => {
    return {
      components: {
        /*eventWrapper: (eventWrapperProps: any) => {
          //return <EventComponent {...eventWrapperProps.event} />;
          return <div />;
        },*/
      },
      defaultDate: new Date(),
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
    />
  );
};
