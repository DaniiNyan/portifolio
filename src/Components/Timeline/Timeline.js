import React from "react";
import TimelineStyle from "./Timeline.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./style.css";

const timeline = props => {
  const { eventos } = props;

  console.log(props);
  return (
    <div className={TimelineStyle.Timeline} id="timeline">
      <div className="timeline-container">
        <VerticalTimeline>
          {eventos.map(({ id, ano, icone, titulo, texto, cor }) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element"
                date={ano}
                iconStyle={cor}
                icon={icone}
                key={id}
              >
                <h3 className="vertical-timeline-element-title">
                  {titulo}
                </h3>
                
                <p>{texto}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default timeline;
