import React from "react";
import "./style.scss";
import details from "../../data";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

const Activity = () => {
  return (
    <div className="activityWrapper">
      <div className="skyDiving">
        <h1>Sky Diving</h1>
      </div>
      <div className="events">
        {details.map((act, index) => (
          <div key={index} className="event">
            <div
              className="eventImage"
              style={{
                backgroundImage: `url(${act.imgSrc})`,
                backgroundPosition: `${act.imgPos}`,
              }}
            ></div>
            <div className="eventDetail">
              <h2>{act.name}</h2>
              <div className="timePlace">
                <div className="time">
                  <AiOutlineClockCircle className="timePlaceIcon" />
                  <span>{act.time}</span>
                </div>
                <div className="place">
                  <MdLocationPin className="timePlaceIcon" />
                  <span>{act.place}</span>
                </div>
              </div>
              <div className="facilities">
                {act.facility.map((fac, index) => (
                  <div className="facilityBox" key={index}>
                    <span>{fac.iconSrc}</span>
                    <span style={{ fontSize: "0.9rem" }}>{fac.iconName}</span>
                  </div>
                ))}
              </div>
              <div className="tags">
                {act.activityDes.map((tag, index) => (
                  <div className="tag" key={index}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="eventPricing">
              <div className="wrapper">
                <div className="starring">
                  <div className="stars">
                    <span>⭐⭐⭐⭐</span>
                    <div className="rate">4.7</div>
                  </div>
                  <div className="reviews">36 reviews</div>
                </div>
                <div className="pricing">
                  <h6>Starting from</h6>
                  <h2>{act.price}</h2>
                </div>
              </div>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
