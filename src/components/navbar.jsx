import React, { useState } from "react";
import Keuangan from "../page/keuangan";

const NavBottom = ({ showDashboard, showProfilePage, ShowKeuangan }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const buttons = [
    { label: <i className="fa-solid fa-house"></i>, onClick: showDashboard },
    { label: <i className="fa-solid fa-user"></i>, onClick: showProfilePage },
    {
      label: <i className="fa-solid fa-money-bill"></i>,
      onClick: ShowKeuangan,
    },
  ];

  return (
    <div className="navbtm  w-full  py-3 rounded-xl px-3 shadow-lg">
      <ul className="flex justify-around items-center text-base">
        {buttons.map((button, index) => (
          <li key={index}>
            <button
              className={`btn-secondary ${
                activeButton === index ? "active" : ""
              }`}
              onClick={() => {
                handleButtonClick(index);
                button.onClick();
              }}
            >
              {button.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBottom;
