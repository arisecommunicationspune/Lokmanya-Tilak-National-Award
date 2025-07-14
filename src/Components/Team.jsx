/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { juryData } from "../constant/dummyData";
import "./Team.css";

const Team = () => {
  const extendedTeamData = [...juryData, ...juryData];

  return (
    <div className="section-padding">
      <div className="container-fluid bg-color">
        <div className="text-center">
          {/* <div className="mini-title">Team Member</div> */}
          <div className="column-title uppercase">
            Our Trusty Members
          </div>
        </div>

        <div className="team-slider-container">
          <div className="team-slider-track">
            {extendedTeamData.map((item, index) => (
              <div className="team-card" key={index}>
                <div className="team-img-wrapper">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="team-img"
                  />
                </div>
                <div className="course-content text-center">
                  <h4 className="team-name">{item.name}</h4>
                  {/* <div>{item.title}</div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
