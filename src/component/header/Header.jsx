import React from "react";
import { CiLogin } from "react-icons/ci";
import './header.css'
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <h1 className="fs-4">طابو</h1>
          </div>

          <div className="logout">
            <span>تسجيل الخروج</span>
            <i>
              <CiLogin />
            </i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
