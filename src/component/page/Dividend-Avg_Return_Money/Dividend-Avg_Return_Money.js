import React, { Component } from 'react'
import Dividend from '../../containers/Dividend-Avg_Return_Money/Dividend';
import Backmenubar from '../../containers/Dividend-Avg_Return_Money/back-menu';
import AvgReturnMoney from '../../containers/Dividend-Avg_Return_Money/Avg_Return_Money';
import styled from 'styled-components';
import './share.css';
import { Layout,Row, Col, Input,Form,Select,Button} from 'antd';
const { Option } = Select;
const { Header, Content } = Layout;
const style = { padding:'0px 0px' };

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
                <c>คำนวณเงินปันผลและเงินเฉลี่ยคืน</c>
                        </div>

                        <div className='E-content' >

                        <div style={{margin:'40px 60px',borderStyle:'groove',borderRadius:'0.5em',borderWidth:'5px'}}>
                        <Row justify="center" style={{marginTop:'40px'}}>
                            <Col className="gutter-row" span={6} >
                            <div style={style}>
                            <Form.Item 
                            name="annual" 
                            label="ประจำปี" 
                            >
                            <Input placeholder="กรุณากรอกปี" style={{width:'auto'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        </Row>

                        <Row gutter={[16, 24]} style={{padding:'5px 20px'}}>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="member_code" 
                            label="รหัสสมาชิก" 
                            >
                            <Input placeholder="กรุณากรอกรหัสสมาชิก" style={{width:'90%'}}/>
                            
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
                            placeholder="กรุณาเลือกคำนำหน้า"
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
                            <Input placeholder="กรุณากรอกชื่อ" style={{width:'90%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Form.Item 
                            name="surname" 
                            label="นามสกุล" 
                            >
                            <Input placeholder="กรุณากรอกนามสกุล" style={{width:'90%'}}/>
                            
                            </Form.Item>
                            </div>
                        </Col>
                        
                        </Row>
                        </div>

                        <Content style={{ padding: '0 50px' ,margin: '30px 0' }}>
                            <Dividend/>
                            <AvgReturnMoney/>
                        </Content>
                        <div style={{textAlign:'center',marginTop:'40px'}}>
                        <Form.Item 
                        style={{textAlign:'center'}}
                        name="totalmoney_dividendandavg" 
                        >
                            <label style={{marginRight:'20px',fontSize:'3ch',color:'black'}}>รวมเงินปันผลและเฉลี่ยคืน</label>
                                <Input placeholder="" style={{width:'auto'}}/>
                                <label style={{marginLeft:'20px',fontSize:'3ch',color:'black'}}>บาท</label>
                        </Form.Item>
                    </div>
    
                <Row gutter={[16, 24]} >
            <Col  span={2}/>
            <Col className="gutter-row" span={7}>
                <div style={style}>
                    <Form.Item >

                    <Button style={{backgroundColor:'#4CAF50',color:'white',border:'#4CAF50',marginLeft:'10px',fontSize:'3.5ch',marginBottom:'20px'}} type="primary" htmlType="submit">
                               คำนวณ
                        </Button> 
                     
                </Form.Item>

                </div>
            </Col>

            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Form.Item 
                
            >
                </Form.Item>
                </div>
            </Col>

            <Col className="gutter-row" span={7}>
                <div style={style}>
                <Form.Item >
                          <Button style={{fontSize:'3.5ch',marginLeft:'10px'}} type="primary" htmlType="submit">
                               บันทึก
                           </Button>
                            <Button style={{marginLeft:'10px',fontSize:'3.5ch'}}  type="danger" htmlType="button" onClick={this.onReset}>
                                ยกเลิก
                            </Button>
                        
                </Form.Item>
                </div>
            </Col>


        </Row> 
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