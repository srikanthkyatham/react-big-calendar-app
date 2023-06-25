import { Event } from "react-big-calendar";

const EventComponent = (props: Event) => {
  return (
    <div className="rectangle">
      <div className="rectangle-side-bar" />
      <div className="rectangle-content">{props.title}</div>
    </div>
  );
};

export default EventComponent;
