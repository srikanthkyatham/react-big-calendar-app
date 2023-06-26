import { EventType } from "./EventType";

const availabilityColors = {
  rectangle: {
    border: "1px solid rgb(52,157,83)",
    background: "rgb(52,157,83)",
  },
  sideBar: {
    backgroundColor: "rgb(0,127,37)",
  },
  content: {
    backgroundColor: "rgb(210,250,221)",
  },
};

const exceptionColors = {
  rectangle: {
    border: "1px solid rgb(220, 220, 220)",
    background: "rgb(255, 255, 255)",
  },
  sideBar: {
    backgroundColor: "rgb(220, 220, 220)",
  },
  content: {
    color: "rgb(143, 143, 143",
    backgroundColor: "rgb(255, 255, 255)",
  },
};

const reservationColors = {
  rectangle: {
    border: "1px solid rgb(238, 90, 0)",
    background: "rgb(255, 241, 233)",
  },
  sideBar: {
    backgroundColor: "rgb(238, 90, 0)",
  },
  content: {
    color: "rgb(50, 50, 50)",
    backgroundColor: "rgb(255, 241, 233)",
  },
};

const otherReservationColors = {
  rectangle: {
    border: "1px solid rgb(108, 108, 108)",
    background: "rgb(250, 250, 250)",
  },
  sideBar: {
    backgroundColor: "rgb(108, 108, 108)",
  },
  content: {
    color: "rgb(50, 50, 50)",
    background: "rgb(250, 250, 250)",
  },
};

const EventComponent = (props: any) => {
  let colors;

  switch (props.event.type) {
    case EventType.AVAILABILITY: {
      colors = availabilityColors;
      break;
    }
    case EventType.EXCEPTION: {
      colors = exceptionColors;
      break;
    }

    case EventType.RESERVATION: {
      colors = reservationColors;
      break;
    }

    case EventType.OTHER_RESERVATION: {
      colors = otherReservationColors;
      break;
    }
    default: {
      colors = availabilityColors;
    }
  }

  return (
    <div className="rectangle" style={colors.rectangle}>
      <div className="rectangle-side-bar" style={colors.sideBar} />
      <div className="rectangle-content" style={colors.content}>
        {props.title}
      </div>
    </div>
  );
};

export default EventComponent;
