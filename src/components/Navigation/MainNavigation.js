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

                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                    ซื้อโค
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/buycow-cash">ซื้อโคเงินสด</NavLink>
                      </a>
                      <a>
                        <NavLink to="/buycow-credit">ซื้อโคสินเชื้อ</NavLink>
                      </a>
                    </div>
                  </li>

                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                    ขายโค
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/sellcow-fatten">ขายเข้าขุน</NavLink>
                      </a>
                      <a>
                        <NavLink to="/sellcow-slice">ขายเข้าเชือด</NavLink>
                      </a>
                    </div>
                  </li>
                  
                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                    น้ำเชื้อโค
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/semencow-registered">ลงทะเบียนน้ำเชื้อโค</NavLink>
                      </a>
                      <a>
                        <NavLink to="/semencow-cash">ซื้อน้ำเชื้อเงินสด</NavLink>
                      </a>
                      <a>
                        <NavLink to="/semencow-credit">ซื้อน้ำเชื้อสินเชื้อ</NavLink>
                      </a>
                    </div>
                  </li>

                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                    อาหารสัตว์
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/foodcow-registered">ลงทะเบียนอาหารสัตว์</NavLink>
                      </a>
                      <a>
                        <NavLink to="/foodcow-cash">ซื้ออาหารสัตว์เงินสด</NavLink>
                      </a>
                      <a>
                        <NavLink to="/foodcow-credit">ซื้ออาหารสัตว์สินเชื้อ</NavLink>
                      </a>
                    </div>
                  </li>

                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                    ยารักษาโรคโค
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/medicinecow-registered">ลงทะเบียนยา</NavLink>
                      </a>
                      <a>
                        <NavLink to="/medicinecow-import">การนำเข้ายา</NavLink>
                      </a>
                      <a>
                        <NavLink to="/medicinecow-cash">ซื้อยารักษาโรคโคเงินสด</NavLink>
                      </a>
                      <a>
                        <NavLink to="/medicinecow-credit">ซื้อยารักษาโรคสินเชื่อ</NavLink>
                      </a>
                    </div>
                  </li>
                  <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                    วัสดุ/อุปกรณ์
                    </a>
                    <div class="dropdown-content">
                      <a>
                        <NavLink to="/equipmentfarm-registered">ลงทะเบียนวัสด/อุปกรณ์</NavLink>
                      </a>
                      <a>
                        <NavLink to="/equipmentfarm-cash">ซื้ออุปกรณ์ในฟาร์มเงินสด</NavLink>
                      </a>
                      <a>
                        <NavLink to="/equipmentfarm-credit">ซื้ออุปกรณ์ในฟาร์มสินเชื่อ</NavLink>
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
              {context.token && context.positionId == "manager" && (
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
