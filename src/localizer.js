import { getMonth, getDay, startOfWeek, format as _format } from "date-fns";
//import enUS from "date-fns/locale/en-US";
import fi from "date-fns/locale/fi";
import { DateLocalizer } from "react-big-calendar";

const locales = {
  //"en-US": enUS,
  fi: fi,
};

let monthEq = (start, end) => {
  return getMonth(start) === getMonth(end);
};

let dateRangeFormat = ({ start, end }, culture, local) =>
  `${local.format(start, "P", culture)} – ${local.format(end, "P", culture)}`;

let timeRangeFormat = ({ start, end }, culture, local) =>
  `${local.format(start, "p", culture)} – ${local.format(end, "p", culture)}`;

let timeRangeStartFormat = ({ start }, culture, local) =>
  `${local.format(start, "h:mma", culture)} – `;

let timeRangeEndFormat = ({ end }, culture, local) =>
  ` – ${local.format(end, "h:mma", culture)}`;

let weekRangeFormat = ({ start, end }, culture, local) =>
  `${local.format(start, "MMMM dd", culture)} – ${local.format(
    end,
    monthEq(start, end) ? "dd" : "MMMM dd",
    culture
  )}`;

export let formats = {
  dateFormat: "dd",
  dayFormat: "dd eee",
  weekdayFormat: "eeeeee",

  selectRangeFormat: timeRangeFormat,
  eventTimeRangeFormat: timeRangeFormat,
  eventTimeRangeStartFormat: timeRangeStartFormat,
  eventTimeRangeEndFormat: timeRangeEndFormat,

  timeGutterFormat: "p",

  monthHeaderFormat: "MMMM yyyy",
  dayHeaderFormat: "cccc MMM dd",
  dayRangeHeaderFormat: weekRangeFormat,
  agendaHeaderFormat: dateRangeFormat,

  agendaDateFormat: "ccc MMM dd",
  agendaTimeFormat: "p",
  agendaTimeRangeFormat: timeRangeFormat,
};

const dateFnsLocalizer = () => {
  return new DateLocalizer({
    formats,
    firstOfWeek(culture) {
      console.log();
      return getDay(startOfWeek(new Date(), { locale: locales[culture] }));
    },
    format(value, formatString, culture) {
      return _format(new Date(value), formatString, {
        locale: locales[culture],
      });
    },
  });
};

export const localizer = dateFnsLocalizer();

// customize
