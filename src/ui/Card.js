import React from "react";
import { node } from "prop-types";

const Card = ({ children, img }) => (
  <div className="card" style={{ width: "25rem", marginTop: "20px" }}>
    <div
      style={{
        width: "50%",
        marginTop: "10px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {img}
    </div>
    <div className="card-body">{children}</div>
  </div>
);

Card.propTypes = {
  children: node.isRequired,
  img: node,
};

export default Card;
