/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

import style from "./Sidebar.module.css";

const Sidebar = ({ isSidebarOpen }) => {
  const location = useLocation();
  const links = [
    { name: "Dashboard", link: "/", icon: <FaHome /> },
    { name: "Report", link: "/report", icon: <FaEnvelope /> },
  ];

  return (
    <div
      className={`bg-dark border-right ${isSidebarOpen ? "" : style.isClose}`}
      id={style.sidebarWrapper}
    >
      <div>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.link}
            className={`${style.linkContainer} d-flex ${
              location.pathname === `${link.link}` ? style.active : ""
            }`}
            title={link.name}
          >
            <span className={`${style.icon}`}>{link.icon}</span>
            <span className={`${style.linkContent}`}>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
