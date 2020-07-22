import React, { Component } from 'react'
import Backmenubar from '../../containers/Debt-Accrual/Debt/backmenu';
import Debt from '../../containers/Debt-Accrual/Debt/Table_Debt';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import './share.css';
import { Layout,Row, Col, Input,Form,Select,Button,DatePicker} from 'antd';
const { RangePicker } = DatePicker;
const { Option } = Select;
const { Header, Content } = Layout;
const style = { padding:'0px 0px' };

export default class Debt_page extends Component {
    render() {
        return (
            <div>
                 <Layout>
            <Header style={{backgroundColor:'#F0F2F5',marginTop:'50px'}}>
                <Backmenubar/>
            </Header>
            <Buysharesty>
            
            <div className='E-header ' style={{marginTop:'40px'}}>
                <c>หนี้สินสมาชิก</c>
                        </div>

                        <div className='E-content' >

                        <div style={{margin:'40px 60px',borderStyle:'groove',borderRadius:'0.5em',borderWidth:'5px'}}>
                        <Row justify="center" style={{marginTop:'40px'}}>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="prefix" 
                            label="ค้นหา" 
                            >
                             <Select
                            style={{fontSize:'3ch',width:'90%'}}
                            placeholder="กรุณาเลือกคำค้นหา"
                            allowClear
                            >
                            <Option style={{fontSize:'3ch'}} value="Mr.">รหัสสมาชิก</Option>
                            <Option style={{fontSize:'3ch'}} value="Mrs.">ชื่อ</Option>
                            <Option style={{fontSize:'3ch'}} value="Ms.">นามสกุล</Option>
                            </Select>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col>
                        <Input placeholder="กรุณากรอกคำค้นหา" style={{width:'90%'}}/>
                        </Col>
                        </Row>

                        <div  style={{textAlign:'center',marginTop:'20px',fontSize: '3ch',paddingBottom:'40px'}}>
                        <label >ความเคลื่อนไหว วันที่ :</label>
                        <RangePicker style={{ width: 'auto',marginLeft:'10px'}} />

                        <Button style={{marginLeft:'20px'}} type="primary" icon={<SearchOutlined />}>Search</Button>

                        </div>
                        </div>

                        <Content style={{ padding: '0 50px' ,margin: '30px 0' }}>
                            <Debt/>
                            
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