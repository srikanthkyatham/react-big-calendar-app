import format from "date-fns/format";
import getDay from "date-fns/getDay";
import fi from "date-fns/locale/fi";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import dayjs from "dayjs";
import { dateFnsLocalizer } from "react-big-calendar";

const locales = {
  //"en-US": enUS,
  fi: fi,
};

//     startOf,
// endOf,

function fixUnit(unit: any) {
  let datePart = unit ? unit.toLowerCase() : unit;
  if (datePart === "FullYear") {
    datePart = "year";
  } else if (!datePart) {
    datePart = undefined;
  }
  return datePart;
}

function startOf(date = null, unit: any) {
  console.log("startOf", { date, unit });
  const datePart = fixUnit(unit);
  if (datePart) {
    if (datePart === "day") {
      console.log("datePart day");
    }
    return dayjs(date).startOf(datePart).toDate();
  }
  return dayjs(date).toDate();
}

function endOf(date = null, unit: any) {
  console.log("endOf", { date, unit });
  const datePart = fixUnit(unit);
  if (datePart) {
    return dayjs(date).endOf(datePart).toDate();
  }
  return dayjs(date).toDate();
}

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
  startOf,
  endOf,
});
