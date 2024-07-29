import React from "react";
import { Link, Outlet } from "react-router-dom";
function About() {
  return (
    <div>
      <h1>Example About</h1>
      <h1>About</h1> <hr />
      <Link style={{ marginRight: "12px" }} to="employee">
        Çalışanlarımız Hakkında
      </Link>
      <Link to="company">Şirketimiz Hakkında</Link>
      <Outlet />
    </div>
  );
}

export default About;
