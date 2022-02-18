import React from "react";
import { GiForkKnifeSpoon, GiMountainRoad } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { BsFillCameraFill } from "react-icons/bs";
const Details = [
  {
    id: "a1",
    name: "Scuba diving in Grande Island, Goa",
    imgSrc: "assets/ScubaDiving.jpg",
    imgPos: "left center",
    time: "8 hour",
    place: "Goa, India",
    facility: [
      {
        iconSrc: <GiForkKnifeSpoon />,
        iconName: "Snacks",
      },
      {
        iconSrc: <AiFillCar />,
        iconName: "Transport",
      },
      {
        iconSrc: <BsFillCameraFill />,
        iconName: "Photo/Video",
      },
      {
        iconSrc: <GiMountainRoad />,
        iconName: "Activities",
      },
    ],
    activityDes: ["Long tail boat ride", "Underwater Photo & Video"],
    price: "Rs. 1799",
  },
  {
    id: "a2",
    name: "Bungee Jumping in Goa",
    imgSrc: "assets/BungeeJumping.jpg",
    imgPos: "center center",
    time: "30 min",
    place: "Goa, India",
    facility: [
      {
        iconId: "i1",
        iconSrc: <BsFillCameraFill />,
        iconName: "Photo/Video",
      },
      {
        iconId: "i2",
        iconSrc: <GiMountainRoad />,
        iconName: "Activities",
      },
    ],
    activityDes: ["61 meter height", "Jump Photo & Video", "Certificate"],
    price: "Rs. 2800",
  },
];
export default Details;
