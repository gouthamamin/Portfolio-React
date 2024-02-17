import timelineElements from "../Config/experienceConfig";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Experience() {
  const workIconStyles = { background: "#f9c74f" };
  const experienceStyle = {
    backgroundColor: "#adf",
  };
  const titleStyle = {
    marginTop: 0,
    fontWeight: "1rem",
    textAlign: "center",
    fontSize: "36px",
    fontFamily: `'Bungee Spice', 'cursive'`,
    padding: "1rem",
  };

  return (
    <div className="Experience" style={experienceStyle}>
      <h1 className="title" style={titleStyle}>
        Work Experience
      </h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={workIconStyles}
              icon={<ImportantDevicesIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title} | {element.company}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {/* {element.location ? element.location : element.locationType} */}
                {element.location
                  ? element.location
                  : `${element.locationType} | ${element.jobType}`}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
