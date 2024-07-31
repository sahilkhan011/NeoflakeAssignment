/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Header.module.css";
const Header = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          onClick={toggleSidebar}
          className={`btn ${style.largeToggleBtn}`}
          type="button"
          title="Open Sidebar"
        >
          <FaBars size={24} />
        </button>

        <span className="navbar-brand mx-auto">AppName</span>
        <div className="d-flex align-items-center ms-auto">
          <button
            onClick={toggleSidebar}
            className={`btn ${style.smallToggleBtn}`}
            type="button"
            title="Open Sidebar"
          >
            <FaBars size={24} />
          </button>{" "}
        </div>
      </div>
    </nav>
  );
};

export default Header;
