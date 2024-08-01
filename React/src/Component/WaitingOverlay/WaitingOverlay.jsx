/* eslint-disable react/prop-types */
import { FaSpinner } from "react-icons/fa";
import style from "./WaitingOverlay.module.css";

const WaitingOverlay = ({ message = "Please wait..." }) => {
  return (
    <div className={`${style.waitingOverlay}`}>
      <div className={`${style.spinnerContainer}`}>
        <FaSpinner className={`${style.spinner}`} />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default WaitingOverlay;
