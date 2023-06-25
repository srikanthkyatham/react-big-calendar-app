import format from "date-fns/format";
import getDay from "date-fns/getDay";
import fi from "date-fns/locale/fi";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { dateFnsLocalizer } from "react-big-calendar";

const locales = {
  //"en-US": enUS,
  fi: fi,
};

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
