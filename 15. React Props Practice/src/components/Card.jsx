import React from "react";
import Detail from "./Detail.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img src={props.img} alt="avatar_img" className="circle-img" />
      </div>
      <div className="bottom">
        <Detail data={props.tel} />
        <Detail data={props.email} />
      </div>
    </div>
  );
}

export default Card;
