import React from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-dark bg-dark text-white">
      <a className="navbar-brand" href="#">
        Gender Neutral Dating App{" "}
      </a>
      <span className="badge badge-pill badge-light float-right m-2">
        {props.total}
      </span>
    </nav>
  );
};

export default Navbar;
