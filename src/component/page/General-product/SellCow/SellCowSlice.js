import React, { Component } from 'react'
import Sellcowslice from '../../../containers/General-product/SellCow/SellCowSlice/sellcowslice';
import Backmenubar from '../../../containers/General-product/SellCow/SellCowSlice/back-menu';

import styled from 'styled-components';
import './sellcow.css'
import { Layout,Row, Col, Input,Form,Select,DatePicker} from 'antd';
const { Option } = Select;
const { Header, Content } = Layout;
const style = { padding:'0px 0px' };
function onChange(date, dateString) {
    console.log(date, dateString);
  }
export default class SellCowFatten extends Component {
    render() {
        return (
            <div>
                 <Layout>
            <Header style={{backgroundColor:'#F0F2F5',marginTop:'50px'}}>
                <Backmenubar/>
            </Header>
            <Buycowsty>
            
            <div className='E-header ' style={{marginTop:'40px'}}>
                <c>กรอกข้อมูลการขายโคเข้าเชือด</c>
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
                            label="วันที่ขาย" 
                            >
                            <DatePicker style={{width:'90%'}} onChange={onChange} />
                            
                            </Form.Item>
                            </div>
                        </Col>
 
                        </Row>

                        </Form>
                        </div>

                        <Content style={{ padding: '0 50px' ,margin: '30px 0' }}>
                            <Sellcowslice/>
                            
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