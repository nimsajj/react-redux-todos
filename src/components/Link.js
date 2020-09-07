import React from "react";
import { bool, node, func } from "prop-types";

const getClassName = (type) =>
  ({
    SHOW_ALL: "secondary",
    SHOW_ACTIVE: "success",
    SHOW_COMPLETED: "danger",
  }[type]);

const Link = ({ active, type, children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={active}
    className={`btn btn-${getClassName(type)} ml-2`}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: bool.isRequired,
  children: node.isRequired,
  onClick: func.isRequired,
};

export default Link;
