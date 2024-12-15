import React, { useState } from "react";
import "./Card.css";

export default function Card({ title, gradient, image, description }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="CardFrame"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="Card"
        style={{
          backgroundImage: `${hovered ? "linear-gradient(to bottom, #0393F6, #0393F6)" : gradient}, url(${image})`,
        }}
      >
        {!hovered ? (
          <h2>{title}</h2>
        ) : (
          <div className="CardHoverContent">
            <p>{description}</p>
            <button>Learn More</button>
          </div>
        )}
      </div>
    </div>
  );
}
