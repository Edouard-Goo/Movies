import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2em",
      }}
    >
      <h1>Oooooopppsssss, NOT THE RIGHT PAGE </h1>
      <p>
        <img
          className="errorPic"
          style={{ width: "60%" }}
          src="error.png"
          alt="404error"
        />
      </p>
      <p>
        <NavLink
          className="navLink"
          style={{ fontSize: "40px", color: "black" }}
          to={"/"}
        >
          <img src="right.png" alt="logo" />
          HOMEPAGE HERE
        </NavLink>
      </p>
    </div>
  );
};

export default NotFound;
