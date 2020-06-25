import React, { Component } from 'react'
import Buycowcash from '../../../containers/General-product/BuyCow/BuyCowCash/Buycowcash';
import Backmenubar from '../../../containers/General-product/BuyCow/BuyCowCash/back-menu';

import styled from 'styled-components';
import './buycow.css'
import { Layout,Row, Col, Input,Form,Select,DatePicker} from 'antd';
const { Option } = Select;
const { Header, Content } = Layout;
const style = { padding:'0px 0px' };
function onChange(date, dateString) {
    console.log(date, dateString);
  }
export default class BuyCowCash extends Component {
    render() {
        return (
            <div>
                 <Layout>
            <Header style={{backgroundColor:'#F0F2F5',marginTop:'50px'}}>
                <Backmenubar/>
            </Header>
            <Buycowsty>
            
            <div className='E-header ' style={{marginTop:'40px'}}>
                <c>กรอกข้อมูลการซื้อโคเงินสด</c>
                        </div>

                        <div className='E-content' >

                        <div style={{margin:'40px 60px',borderStyle:'groove',borderRadius:'0.5em',borderWidth:'5px'}}>
                        <Form>
                        <Row gutter={[16, 24]} style={{padding:'5px 50px',marginTop:'20px'}}>
                        
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="member_code" 
                            label="รหัสสมาชิก" 
                            >
                            <Input placeholder="ระบุรหัสสมาชิก" style={{width:'90%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="prefix" 
                            label="คำนำหน้า" 
                            >
                             <Select
                            style={{fontSize:'3ch',width:'90%'}}
                            placeholder="เลือกคำนำหน้า"
                            allowClear
                            >
                            <Option style={{fontSize:'3ch'}} value="Mr.">นาย</Option>
                            <Option style={{fontSize:'3ch'}} value="Mrs.">นาง</Option>
                            <Option style={{fontSize:'3ch'}} value="Ms.">นางสาว</Option>
                            </Select>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="name" 
                            label="ชื่อ" 
                            >
                            <Input placeholder="ระบุชื่อ" style={{width:'90%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="surname" 
                            label="นามสกุล" 
                            >
                            <Input placeholder="ระบุนามสกุล" style={{width:'90%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="phone" 
                            label="โทรศัพท์" 
                            >
                            <Input placeholder="ระบุเบอร์โทรศัพท์" style={{width:'90%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="e-mail" 
                            label="E-mail" 
                            >
                            <Input placeholder="ระบุอีเมล" style={{width:'90%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="date_order" 
                            label="วันที่สั่งซื้อ" 
                            >
                            <DatePicker style={{width:'90%'}} onChange={onChange} />
                            
                            </Form.Item>
                            </div>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                           
                            name="date_send" 
                            label="วันที่ส่งสินค้า" 
                            >
                            <DatePicker style={{width:'90%'}} onChange={onChange} />
                            
                            </Form.Item>
                            </div>
                        </Col>
                        </Row>

                        <div style={{borderBottom:'solid 0.5px #D3D3D3',margin:'40px 25px',fontSize:'3ch',fontWeight:'bold'}}>จุดส่งสินค้า</div>

                        <Row gutter={[16, 24]} style={{padding:'5px 50px',marginTop:'20px'}}>
                        <Col  className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                           
                            name="delivery_address" 
                            label="จุดส่ง" 
                            >
                             <Select
                                style={{fontSize:'3ch',width:'auto'}}
                                placeholder="ระบุที่อยู่ในการส่ง"
                                allowClear
                                >
                                <Option  style={{fontSize:'3ch',width:'90%'}} value="address_member">ตามที่อยู่สมาชิก</Option>
                                <Option style={{fontSize:'3ch',width:'90%'}} value="address_farm">ตามที่อยู่ฟาร์ม</Option>
                                <Option style={{fontSize:'3ch',width:'90%'}} value="address_new">ระบุที่อยู่ใหม่</Option>
                                <Option style={{fontSize:'3ch',width:'90%'}} >มารับเอง</Option>

                                </Select>
                            </Form.Item>
                            </div>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="house_number" 
                            label="บ้านเลขที่" 
                            >
                            <Input placeholder="ระบุบ้านเลขที่" style={{width:'90%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="village" 
                            label="หมู่บ้าน/อาคาร/ชั้น" 
                            >
                            <Input placeholder="ระบุหมู่บ้าน/อาคาร/ชั้น" style={{marginLeft:'10px',width:'80%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="road" 
                            label="ถนน" 
                            >
                            <Input placeholder="ระบุถนน" style={{width:'90%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="swine" 
                            label="หมู่" 
                            >
                            <Input placeholder="ระบุหมู่" style={{width:'90%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="alley" 
                            label="ซอย" 
                            >
                            <Input placeholder="ระบุชื่อ" style={{width:'90%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="ostal_code" 
                            label="รหัสไปรษณีย์" 
                            >
                            <Input placeholder="ระบุรหัสไปรษณีย์" style={{width:'90%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="district" 
                            label="ตำบล" 
                            >
                            <Input placeholder="ระบุตำบล" style={{width:'90%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="prefecture" 
                            label="อำเภอ" 
                            >
                            <Input placeholder="ระบุอำเภอ" style={{width:'90%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="province" 
                            label="จังหวัด" 
                            >
                            <Input placeholder="ระบุจังหวัด" style={{width:'90%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                       
                       
                        </Row>
                        </Form>
                        </div>

                        <Content style={{ padding: '0 50px' ,margin: '30px 0' }}>
                            <Buycowcash/>
                            
                        </Content>
                        </div>
            </Buycowsty>
            </Layout>
            </div>
        )
    }
}
const Buycowsty = styled.div`
    
      .E-content {
      
      font-family:"DB Adman X";
      position: relative;
      background-color: #fefefe;
      padding: 10px 0px 0px 10px;
      width: auto;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
      height:auto;
      margin-bottom:60px;
      margin-left:40px;
      margin-right:40px;
    }
    .E-header {
    
        
    margin-left:40px;
    margin-right:40px;
    width: auto;
    font-size: 3ch;
    font-family:"DB Adman X";
    padding: 10px 0px 0px 10px;
    background-color: #0080FF;
    color: white;
    height:2.75rem;
    border: solid thick #0080FF;
    border-radius: 1em 1em 0em 0em;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }
    `
    ;