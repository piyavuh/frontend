import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Menu, Avatar } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { BellOutlined } from '@ant-design/icons';


export default class Navbar extends Component {
  render() {
    return (

      <div >
        <Menu

          style={{ backgroundColor: '#003271', color: 'white' }}
          mode="horizontal"
          theme="light"
          className='box-menu'

        >
          <Menu.Item key="1" >
            <Link to="/">
              <Avatar style={{ width: '50px', height: '50px' }} src='./logobar.png' />
            </Link>
          </Menu.Item>


          <SubMenu
            className='menubar'
            key="การจัดการสมาชิก"
            title={
              <span>
                <span>การจัดการสมาชิก</span>
              </span>
            }

          >
            <Barmenu>
              <Menu theme="light" className='box-menu' >
                <Menu.Item key="เพิ่มสมาชิก"  >
                  <Link to='/add-member'  >
                    <span className='box-menu2'>เพิ่มสมาชิก</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="ตรวจสอบ/แก้ไขข้อมูลสมาชิก" >
                  <Link to='/edit-member' >
                    <span className='box-menu2'>ตรวจสอบ-แก้ไข</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Barmenu>


          </SubMenu>




          <SubMenu
            className='menubar'
            key="การจัดการบุคลลากร"
            title={
              <span>
                <span>การจัดการบุคลลากร </span>
              </span>
            }
          >
            <Barmenu>
              <Menu className='box-menu'>
                <Menu.Item key="เพิ่มบุคลากร">
                  <Link to='/add-officer'>
                    <span className='box-menu2'>เพิ่มบุคลากร</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="ตรวจสอบ/แก้ไขบุคลากร">
                  <Link to='/edit-officer'>
                    <span className='box-menu2'>ตรวจสอบ-แก้ไข</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="คำนวณเงินเดือน">
                  <Link to='/calculate-salary'>
                    <span className='box-menu2'>คำนวณเงินเดือน</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Barmenu>

          </SubMenu>

          <SubMenu
            className='menubar'
            key="ซื้อ-ขายหุ้น"
            title={
              <span>
                <span>ซื้อ-ขายหุ้น </span>
              </span>
            }

          >
            <Barmenu>
              <Menu className='box-menu'>
                <Menu.Item key="ซื้อหุ้น">
                  <Link to='/buy-share'>
                    <span className='box-menu2'>ซื้อหุ้น </span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="ขายหุ้น">
                  <Link to='/sell-share'>
                    <span className='box-menu2'>ขายหุ้น</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="โอนหุ้น">
                  <Link to='/transfer-share'>
                    <span className='box-menu2'>โอนหุ้น</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Barmenu>


          </SubMenu>




          <SubMenu
            className='menubar'
            key="ซื้อ-ขายทั่วไป"
            title={
              <span>
                <span>ซื้อ-ขายทั่วไป </span>
              </span>
            }
          >
            <Barmenu>
              <Menu

                className='box-menu'>

                <SubMenu
                  key="ซื้อโค"
                  title={
                    <span >
                      <span className='box-menu2'>ซื้อโค</span>
                    </span>
                  }>
                  <Barmenu>
                    <Menu className='box-menu'>
                      <Menu.Item key="ซื้อโคเงินสด">
                        <Link to='buycow-cash'>
                          <span className='box-menu2'>ซื้อโคเงินสด</span>
                        </Link>
                      </Menu.Item>

                      <Menu.Item key="ซื้อโคสินเชื้อ">
                        <Link to='/buycow-credit'>
                          <span className='box-menu2'>ซื้อโคสินเชื้อ</span>
                        </Link>
                      </Menu.Item>

                    </Menu>
                  </Barmenu>

                </SubMenu>
                <SubMenu key="ขายโค"
                  title={
                    <span>
                      <span className='box-menu2'>ขายโค</span>
                    </span>
                  }>
                  <Barmenu>
                    <Menu className='box-menu'>
                      <Menu.Item key="ขายโคเงินสด">
                        <Link to='sellcow-fatten'>
                          <span className='box-menu2'>ขายเข้าขุน</span>
                        </Link>
                      </Menu.Item>

                      <Menu.Item key="ขายโคสินเชื้อ">
                        <Link to='sellcow-slice'>
                          <span className='box-menu2'>ขายเข้าเชือด</span>
                        </Link>
                      </Menu.Item>

                    </Menu>
                  </Barmenu>
                </SubMenu>
                <SubMenu
                  key="ซื้อน้ำเชื้อโค"
                  title={
                    <span>
                      <span className='box-menu2'>น้ำเชื้อโค</span>
                    </span>
                  }
                >

                  <Barmenu>
                    <Menu className='box-menu' >
                      <Menu.Item key="ลงทะเบียนน้ำเชื้อโค">
                        <Link to='/semencow-registered'>
                          <span className='box-menu2'>ลงทะเบียนน้ำเชื้อโค</span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="ซื้อน้ำเชื้อเงินสด">
                        <Link to='/semencow-cash'>
                          <span className='box-menu2'>ซื้อน้ำเชื้อเงินสด</span>
                        </Link>
                      </Menu.Item>

                      <Menu.Item key="ซื้อน้ำเชื้อสินเชื้อ">
                        <Link to='/semencow-credit'>
                          <span className='box-menu2'>ซื้อน้ำเชื้อสินเชื้อ</span>
                        </Link>
                      </Menu.Item>
                    </Menu>
                  </Barmenu>

                </SubMenu>


                <SubMenu

                  key="ซื้ออาหารโค"
                  title={
                    <span>
                      <span className='box-menu2'>อาหารสัตว์</span>
                    </span>
                  }
                >
                  <Barmenu>
                    <Menu className='box-menu'  >
                      <Menu.Item key="ลงทะเบียนอาหารสัตว์">
                        <Link to='/foodcow-registered'>
                          <span className='box-menu2'>ลงทะเบียนอาหารสัตว์</span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="ซื้ออาหารเงินสด">
                        <Link to='/foodcow-cash'>
                          <span className='box-menu2'>ซื้ออาหารสัตว์เงินสด</span>
                        </Link>
                      </Menu.Item>

                      <Menu.Item key="ซื้ออาหารสินเชื้อ">
                        <Link to='/foodcow-credit'>
                          <span className='box-menu2'>ซื้ออาหารสัตว์สินเชื้อ</span>
                        </Link>
                      </Menu.Item>

                    </Menu>
                  </Barmenu>

                </SubMenu>



                <SubMenu
                  key="ซื้อยารักษาโรคโค"
                  title={
                    <span>
                      <span className='box-menu2'>ยารักษาโรคโค</span>
                    </span>
                  }
                >
                  <Barmenu>
                    <Menu className='box-menu'>
                      <Menu.Item key="ลงทะเบียนยา">
                        <Link to='/medicinecow-registered'>
                          <span className='box-menu2'>ลงทะเบียนยา</span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="การนำเข้ายา">
                        <Link to='/medicinecow-import'>
                          <span className='box-menu2'>การนำเข้ายา</span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="ซื้อยารักษาโรคโคเงินสด">
                        <Link to='/medicinecow-cash'>
                          <span className='box-menu2'>ซื้อยารักษาโรคโคเงินสด</span>
                        </Link>
                      </Menu.Item>

                      <Menu.Item key="ซื้อยารักษาโรคสินเชื่อ">
                        <Link to='/medicinecow-credit'>
                          <span className='box-menu2'>ซื้อยารักษาโรคสินเชื่อ</span>
                        </Link>
                      </Menu.Item>

                    </Menu>
                  </Barmenu>
                </SubMenu>
                <SubMenu
                  key="ซื้ออุปกรณ์ในฟาร์ม"
                  title={
                    <span>
                      <span className='box-menu2'>วัสดุ/อุปกรณ์</span>
                    </span>
                  }
                >
                  <Barmenu>
                    <Menu className='box-menu'>
                      <Menu.Item key="ลงทะเบียนวัสด/อุปกรณ์">
                        <Link to='/equipmentfarm-registered'>
                          <span className='box-menu2'>ลงทะเบียนวัสด/อุปกรณ์</span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="ซื้ออุปกรณ์ในฟาร์มเงินสด">
                        <Link to='/equipmentfarm-cash'>
                          <span className='box-menu2'>ซื้ออุปกรณ์ในฟาร์มเงินสด</span>
                        </Link>
                      </Menu.Item>

                      <Menu.Item key="ซื้ออุปกรณ์ในฟาร์มสินเชื่อ">
                        <Link to='/equipmentfarm-credit'>
                          <span className='box-menu2'>ซื้ออุปกรณ์ในฟาร์มสินเชื่อ</span>
                        </Link>
                      </Menu.Item>

                    </Menu>
                  </Barmenu>
                </SubMenu>

              </Menu>
            </Barmenu>

          </SubMenu>

          <Menu.Item className='menubar' key="เงินปันผล/เงินเฉลี่ยคืน">
            <Link to='/DividendandAvgReturnmoney'>
              <span style={{ fontSize: '3.2ch' }}>
                เงินปันผล/เงินเฉลี่ยคืน
                  </span>
            </Link>
          </Menu.Item>


          <SubMenu
            className='menubar'
            key="หนี้สินและเงินคงค้าง"
            title={
              <span>
                <span>หนี้สิน-เงินคงค้าง </span>
              </span>
            }

          >
            <Barmenu>
              <Menu className='box-menu'>
                <Menu.Item key="เงินคงค้างสหกรณ์">
                  <Link to='/accrual'>
                    <span className='box-menu2'>เงินคงค้างสหกรณ์</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="หนี้สินสมาชิกสหกรณ์">
                  <Link to='/debt'>
                    <span className='box-menu2'>หนี้สินสมาชิกสหกรณ์</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="แบล็คลิส">
                  <Link to='/blacklist'>
                    <span className='box-menu2'>แบล็คลิส</span>
                  </Link>
                </Menu.Item>

              </Menu>
            </Barmenu>


          </SubMenu>

          <Menu.Item className='menubar' key="การเงิน">
            <Link to='/receipt'>
              <span style={{ fontSize: '3.2ch' }} >การเงิน</span>
            </Link>
          </Menu.Item>

          <Menu.Item
            className='menubar'
            key="การออกรายงาน">
            <Link to='/report'>
              <span style={{ fontSize: '3.2ch' }}> การออกรายงาน </span>
            </Link>
          </Menu.Item>

          <Menu.Item
            className='menubar'
            key="การอนุมัติ">
            <Link to='/approve'>
              <span style={{ fontSize: '3.2ch' }}>การอนุมัติ</span>
            </Link>
          </Menu.Item>


          <Menu.Item
            className='menubar'
            key="ประวัติการเข้าใช้งาน">
            <Link to='/access-history'>
              <span style={{ fontSize: '3.2ch' }}>ประวัติการข้าใช้งาน</span>
            </Link>
          </Menu.Item>

          <Menu.Item
            className='menubar'
            key="แจ้งเตือน">
            <Link to='/alert'>
              <BellOutlined />
            </Link>
          </Menu.Item>
        </Menu>
      </div>



    )
  }
}

const Barmenu = styled.div`
 .box-menu {
     background: #003271;
     color: white;
     font-family:"DB Adman X";
     color:white;
     font-size:2.2ch
 }
 .box-menu2{
     
     font-family:"DB Adman X";
     color:#0080FF;
     font-size:3ch
 }
  
 
  `;





