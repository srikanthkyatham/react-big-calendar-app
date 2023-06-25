import { Event } from "react-big-calendar";

const EventComponent = (props: Event) => {
  return (
    <div className="rectangle">
      <div className="rectangle_side_bar" />
      <div className="rectangle_content">{props.title}</div>
    </div>
  );
};

export default EventComponent;
