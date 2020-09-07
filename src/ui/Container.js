import React from "react";
import { node } from "prop-types";

const Container = ({ children }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">{children}</div>
    </div>
  </div>
);

Container.propTypes = {
  children: node.isRequired,
};

export default Container;
