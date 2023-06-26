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

function startOf(date: any, unit: any) {
  const datePart = fixUnit(unit);
  if (datePart) {
    const realDate = dayjs(date).startOf(datePart).toDate();
    /*if (datePart === "minutes") {
      console.log("datePart minutes");
      if (getHours(realDate) === 0) {
        debugger;
        return addHours(realDate, 8);
      }
    }*/
    return realDate;
  }
  return dayjs(date).toDate();
}

function endOf(date: any, unit: any) {
  const datePart = fixUnit(unit);
  if (datePart) {
    const realDate = dayjs(date).endOf(datePart).toDate();
    /*if (datePart === "minutes") {
      if (getHours(realDate) === 23) {
        return subHours(realDate, 2);
      }
    }*/
    return realDate;
  }
  return dayjs(date).toDate();
}

let localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
  startOf,
  endOf,
});

localizer.startOf = startOf;
localizer.endOf = endOf;

export { localizer };
