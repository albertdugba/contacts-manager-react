import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h4>
        <span className="text-danger">404</span> Page not found
      </h4>
      <p>
        Sorry that page does not exist!, click <Link to="/">here</Link> to go
        back home
      </p>
    </div>
  );
};

export default NotFound;
