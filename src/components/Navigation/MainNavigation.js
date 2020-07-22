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
              <li>
                <NavLink to="/stocks">dashboard</NavLink>
              </li>
              {!context.token && (
                <li>
                  <NavLink to="/login">เข้าสู่ระบบ</NavLink>
                </li>
              )}

              {!context.token && (
                <React.Fragment>
                  <li>
                    <NavLink to="/register">สมัครสมาชิก</NavLink>
                  </li>
                </React.Fragment>
              )}

              {context.token && context.positionId == "document" && (
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
              {context.token && context.positionId == "admin" && (
                <React.Fragment>
                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                      สมาชิก
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/editMember">ตรวจสอบแก้ใข</NavLink>
                      </a>
                    </div>
                  </li>
                </React.Fragment>
              )}

              {context.token && context.positionId == "admin" && (
                <React.Fragment>
                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                      หุ้น
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/info_share">ข้อมูลหุ้น</NavLink>
                      </a>
                    </div>
                  </li>
                </React.Fragment>
              )}
              {context.token && context.positionId == "admin" && (
                <React.Fragment>
                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                      การจัดการบุคลากร
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/edit_officer">ตรวจสอบบุคลากร</NavLink>
                      </a>
                    </div>
                  </li>
                </React.Fragment>
              )}
              {context.token && context.positionId == "document" && (
                <React.Fragment>
                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                      การจัดการบุคลากร
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/add_officer">เพิ่มบุคลากร</NavLink>
                      </a>
                      <a>
                        <NavLink to="/edit_officer">ตรวจสอบบุคลากร</NavLink>
                      </a>
                    </div>
                  </li>
                </React.Fragment>
              )}
              {context.token && context.positionId == "accounting" && (
                <React.Fragment>
                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                      การจัดการบุคลากร
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/cal_officer">คำนวณเงินเดือน</NavLink>
                      </a>
                      <a>
                        <NavLink to="/edit_officer">ตรวจสอบบุคลากร</NavLink>
                      </a>
                    </div>
                  </li>
                </React.Fragment>
              )}

              {context.token && context.positionId == "finance" && (
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
                      <a>
                        <NavLink to="/info_share">ข้อมูลหุ้น</NavLink>
                      </a>
                    </div>
                  </li>
                </React.Fragment>
              )}
              {context.token && context.positionId == "admin" && (
                <React.Fragment>
                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                      เงินปันผล/เงินเฉลี่ยคืน
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/dividendandAvgReturnmoney">
                          ข้อมูลเงินปันผล/เงินเฉลี่ยคืน
                        </NavLink>
                      </a>
                    </div>
                  </li>
                </React.Fragment>
              )}
              {context.token && context.positionId == "accounting" && (
                <React.Fragment>
                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                      เงินปันผล/เงินเฉลี่ยคืน
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/caldividendandAvgReturnmoney">
                          คำนวนเงินปันผล/เงินเฉลี่ยคืน
                        </NavLink>
                      </a>
                      <a>
                        <NavLink to="/dividendandAvgReturnmoney">
                          ข้อมูลเงินปันผล/เงินเฉลี่ยคืน
                        </NavLink>
                      </a>
                    </div>
                  </li>
                </React.Fragment>
              )}
              {context.token && (
                <React.Fragment>
                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                      หนี้สิน-เงินคงค้าง
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/accrual">เงินคงค้างสหกรณ์</NavLink>
                      </a>
                      <a>
                        <NavLink to="/debt">หนี้สินสมาชิกสหกรณ์</NavLink>
                      </a>
                      <a>
                        <NavLink to="/blacklist">แบล็คลิส</NavLink>
                      </a>
                    </div>
                  </li>
                </React.Fragment>
              )}
              {context.token && context.positionId == "accounting" && (
                <React.Fragment>
                  <li>
                    <NavLink to="/receipt">การเงิน</NavLink>
                  </li>
                </React.Fragment>
              )}
              {context.token && (
                <React.Fragment>
                  <li>
                    <NavLink to="/report">การออกรายงาน</NavLink>
                  </li>
                </React.Fragment>
              )}
              {context.token && context.positionId == "manager" && (
                <React.Fragment>
                  <li>
                    <NavLink to="/approvey">การอนุมัติ</NavLink>
                  </li>
                </React.Fragment>
              )}
              {context.token && context.positionId == "manager" &&  (
                <React.Fragment>
                  <li>
                    <NavLink to="/access-history">ประวัติการข้าใช้งาน</NavLink>
                  </li>
                </React.Fragment>
              )}
              {context.token && (
                <React.Fragment>
                  <li>
                    <NavLink to="/stocks">
                      <button onClick={context.logout}>ออกจากระบบ</button>
                    </NavLink>
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
