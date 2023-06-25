import moment from "moment";

export const printFormats = () => {
  var mydate = "2017-08-30T00:00:00";
  console.log(moment(mydate).format("dddd")); // Wednesday
  const weekDay = moment(mydate).format("dd");
  console.log({ weekDay }); // Wed
  console.log("Day in number[0,1,2,3,4,5,6]: " + moment(mydate).format("d")); // Day in number[0,1,2,3,4,5,6]: 3
  console.log(moment(mydate).format("MMM")); // Aug
  console.log(moment(mydate).format("MMMM")); // August
};
