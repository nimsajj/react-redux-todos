import React from "react";
import { bool, node, func } from "prop-types";

const Link = ({ active, children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: "4px",
      }}
    >
      {children}
    </button>
  );
};

Link.propTypes = {
  active: bool.isRequired,
  children: node.isRequired,
  onClick: func.isRequired,
};

export default Link;
