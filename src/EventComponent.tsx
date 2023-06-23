import { Event } from "react-big-calendar";

const EventComponent = (props: Event) => {
  return (
    <div className="rectangle">
      <div className="rectangle_side_bar" style={{ background: "blue" }} />
      <div
        className="rectangle_content"
        style={{ background: "lightblue", width: "100%" }}
      >
        {props.title}
      </div>
    </div>
  );
};

export default EventComponent;
