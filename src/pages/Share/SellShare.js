import React, { Component } from 'react'
import Sellshare from '../../containers/Share/sellshare/SellShare';
import Backmenubar from '../../containers/Share/sellshare/back-menu';
import styled from 'styled-components';
import './share.css';
import { Layout,Row, Col, Input,Form,Select,DatePicker} from 'antd';
const { Option } = Select;
const { Header, Content } = Layout;
const style = { padding:'0px 0px' };
function onChange(date, dateString) {
    console.log(date, dateString);
  }
export default class BuyShare extends Component {
    render() {
        return (
            <div>
                 <Layout>
            <Header style={{backgroundColor:'#F0F2F5',marginTop:'50px'}}>
                <Backmenubar/>
            </Header>
            <Buysharesty>
            
            <div className='E-header ' style={{marginTop:'40px'}}>
                <c>กรอกข้อมูลการขายหุ้น</c>
                        </div>

                        <div className='E-content' >

                        <div style={{margin:'40px 60px',borderStyle:'groove',borderRadius:'0.5em',borderWidth:'5px'}}>
                        <Row gutter={[16, 24]} style={{padding:'5px 20px',marginTop:'20px'}}>
                        
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="member_code" 
                            label="รหัสสมาชิก" 
                            >
                            <Input placeholder="กรุณากรอกรหัสสมาชิก" style={{width:'auto'}}/>
                            
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
                            style={{fontSize:'3ch',width:'auto'}}
                            placeholder="กรุณาเลือกคำนำหน้า"
                            allowClear
                            >
                            <Option value="Mr.">นาย</Option>
                            <Option value="Mrs.">นาง</Option>
                            <Option value="Ms.">นางสาว</Option>
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
                            <Input placeholder="กรุณากรอกชื่อ" style={{width:'auto'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="surname" 
                            label="นามสกุล" 
                            >
                            <Input placeholder="กรุณากรอกนามสกุล" style={{width:'auto'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="group" 
                            label="กลุ่มที่" 
                            >
                            <Input placeholder="กรุณากรอกลุ่มของสมาชิก" style={{width:'auto'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="village" 
                            label="บ้าน" 
                            >
                            <Input placeholder="กรุณากรอกบ้าน" style={{width:'auto'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="date" 
                            label="วันที่" 
                            >
                            <DatePicker  onChange={onChange} />
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}></div>
                        </Col>
                        </Row>
                        </div>

                        <Content style={{ padding: '0 50px' ,margin: '30px 0' }}>
                            <Sellshare/>
                        </Content>
                        </div>
            </Buysharesty>
            </Layout>
            </div>
        )
    }
}
const Buysharesty = styled.div`
    
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