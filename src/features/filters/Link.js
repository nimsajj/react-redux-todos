import React from "react";
import { bool, node, func, string } from "prop-types";

const getClassName = (filter) =>
  ({
    SHOW_ALL: "secondary",
    SHOW_ACTIVE: "success",
    SHOW_COMPLETED: "danger",
  }[filter]);

const Link = ({ active, children, setVisibilityFilter, filter }) => (
  <button
    type="button"
    onClick={() => setVisibilityFilter(filter)}
    disabled={active}
    className={`btn btn-${getClassName(filter)} ml-2`}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: bool.isRequired,
  children: node.isRequired,
  setVisibilityFilter: func.isRequired,
  filter: string.isRequired,
};

export default Link;
