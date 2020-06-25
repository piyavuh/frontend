import React from 'react'
import { Menu, Switch,Avatar } from 'antd';
import './Newbar.css';
const { SubMenu } = Menu;

class Newbar extends React.Component {
  state = {
    mode: 'horizontal',
   
  };
  changeMode = value => {
    this.setState({
      mode: value ?   'inline':'horizontal',
    });
  };


  render() {
    return (
      <div >
        <Menu
          style={{ width: 'auto' }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
         
        >
          <Menu.Item>
             <Avatar style={{width:'50px',height:'50px'}} src='./logobar.png'/>
          </Menu.Item>
         
          <SubMenu  key="การจัดการสมาชิก"  title="การจัดการสมาชิก">
          
              <Menu.Item  key="เพิ่มสามชิก">เพิ่มสมาชิก</Menu.Item>
              <Menu.Item key="ตรวจสอบ/แก้ไขสมาชิก">ตรวจสอบ/แก้ไข</Menu.Item>

          </SubMenu>
          <SubMenu key="การจัดการบุคลากร"  title="การจัดการบุคลากร">
            <Menu.Item key="เพิ่มบุคลากร">เพิ่มบุคลากร</Menu.Item>
            <Menu.Item key="คำนวณเงินเดือน">คำนวณเงินเดือน</Menu.Item>
            <Menu.Item key="ตรวจสอบ/แก้ไขบุคลากร">ตรวจสอบ/แก้ไข</Menu.Item>
            
          </SubMenu>

          <SubMenu key="ซื้อ-ขายหุ้น" title="ซื้อ-ขายหุ้น">
            <Menu.Item key="ซื้อหุ้น">ซื้อหุ้น</Menu.Item>
            <Menu.Item key="ขายหุ้น">ขายหุ้น</Menu.Item>
            <Menu.Item key="โอนหุ้น">โอนหุ้น</Menu.Item>
            
          </SubMenu>

          <SubMenu key="ซื้อ-ขายทั่วไป"  title="ซื้อ-ขายทั่วไป">
          <SubMenu key="ซื้อโค" title="ซื้อโค">
              <Menu.Item key="5">ซื้อโคเงินสด</Menu.Item>
              <Menu.Item key="6">ซื้อโคสินเชื่อ</Menu.Item>
            </SubMenu>
            <SubMenu key="ขายโค" title="ขายโค">
              <Menu.Item key="7">ขายโคเงินสด</Menu.Item>
              <Menu.Item key="8">ขายโคสินเชื่อ</Menu.Item>
            </SubMenu>
            <SubMenu key="น้ำเชื้อโค" title="ซื้อน้ำเชื้อโค">
              <Menu.Item key="9">ซื้อน้ำเชื้อโคเงินสด</Menu.Item>
              <Menu.Item key="1">ซื้อน้ำเชื้อโคสินเชื่อ</Menu.Item>
            </SubMenu>
            <SubMenu key="ซื้ออาหารโค" title="ซื้ออาหารโค">
              <Menu.Item key="2">ซื้ออาหารเงินสด</Menu.Item>
              <Menu.Item key="3">ซื้ออาหารโคสินเชื่อ</Menu.Item>
            </SubMenu>
            <SubMenu key="ซื้อยารักษาโรคโค" title="ซื้อยารักษาโรคโค">
              <Menu.Item key="4">ซื้อยารักษาโรคโคเงินสด</Menu.Item>
              <Menu.Item key="0">ซื้อยารักษาโรคโคสินเชื่อ</Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="เงินปันผลและเงินเฉลี่ยคืน" >เงินปันผลและเงินเฉลี่ยคืน</Menu.Item>

          <SubMenu key="หนี้สิน/เงินคงค้าง"  title="หนี้สิน/เงินคงค้าง">
            <Menu.Item key="เงินคงค้างสหกรณ์">เงินคงค้างสหกรณ์</Menu.Item>
            <Menu.Item key="หนี้สินสมาชิกสหกรณ์">หนี้สินสมาชิกสหกรณ์</Menu.Item>
            <Menu.Item key="แบล็คลิส">แบล็คลิส</Menu.Item>
          </SubMenu>
          <Menu.Item key="การออกรายงาน" >การออกรายงาน</Menu.Item>
          <Menu.Item key="การอนุมัติ" >การอนุมัติ</Menu.Item>
          <Menu.Item key="การเงิน" >การเงิน</Menu.Item>
          <Menu.Item key="ประวัติการเข้าใช้งาน" >ประวัติการเข้าใช้งาน</Menu.Item>
          <Menu.Item key="แจ้งเตือน" >แจ้งเตือน</Menu.Item>
        </Menu>
        <Switch  onChange={this.changeMode} />
        
        
      </div>
      
    );
  }
}
export default Newbar;