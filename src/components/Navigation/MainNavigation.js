import React from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../context/auth-context";
import "./MainNavigation.css";
import Logobar from "./logobar.png";

const mainNavigation = (props) => (
  <AuthContext.Consumer>
    {(context) => {
      return (
        <header className="main-navigation">
          <div className="main-navigation__logo">
            <img src={Logobar} />
          </div>
          <nav className="main-navigation__items">
            <ul>
              {!context.token && (
                <li>
                  <NavLink to="/login">เข้าสู่ระบบ</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/add_officer">เพิ่มบุคลากร </NavLink>
              </li>

              {!context.token && (
                <React.Fragment>
                  <li>
                    <NavLink to="/register">สมัครสมาชิก</NavLink>
                  </li>
                </React.Fragment>
              )}

              {context.token && (
                <React.Fragment>
                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                      การจัดการสมาชิก
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/register">เพิ่มสมาชิก</NavLink>
                      </a>
                      <a>
                        <NavLink to="/editMember">ตรวจสอบแก้ใข</NavLink>
                      </a>
                    </div>
                  </li>
                </React.Fragment>
              )}

              {context.token && (
                <React.Fragment>
                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                    ซื้อ-ขายหุ้น
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/buy_share">ซื้อหุ้น</NavLink>
                      </a>
                      <a>
                        <NavLink to="/sell_share">ขายหุ้น</NavLink>
                      </a>
                    </div>
                  </li>
                </React.Fragment>
              )}

              <li>
                <NavLink to="/stocks">ชื้อหุ้น</NavLink>
              </li>
              {context.token && (
                <React.Fragment>
                  <li>
                    <NavLink to="/">ขายหุ้น</NavLink>
                  </li>
                  <li>
                    <button onClick={context.logout}>ออกจากระบบ</button>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </nav>
        </header>
      );
    }}
  </AuthContext.Consumer>
);

export default mainNavigation;
