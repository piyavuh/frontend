import React, { Component } from 'react'
import {  Row, Col,Form, Input,DatePicker, Radio,Select   } from 'antd';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLine, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const style = { padding: '10x 0px '};

const { Option } = Select;


function onChange(date, dateString) {
    console.log(date, dateString);
  }
export default class Boxmenuber1 extends Component {
    render() {
        return (
            <Thing>
                <Form>
                 <div className="modal-header" >  
                    <c >ข้อมูลเบื้องต้น </c>
               </div>
                <div className="modal-content " >
                
                <Row gutter={22} style={{marginTop:'20px'}}>
                <Col  span={2}/>
                <Col  span={4}>
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> คำนำหน้า :</label>
                        <Form.Item 
                            name="prefix"  
                            rules={[{ required: true, message: 'กรุณาเลือกคำนำหน้า' }]}
                            >
                            <Select
                            style={{fontSize:'3ch'}}
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
                
                        <Col  span={4}>
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> ชื่อ :</label>
                        <Form.Item 
                            name={['name']} 
                            rules={[{ required: true , message: 'กรุณากรอกชื่อ'}]}
                            hasFeedback
                            >
                            <Col  span={4}>
                            <div style={style}>
                            <Input  placeholder="กรุณากรอกชื่อ"style={{width:'600%', borderRadius: '0.5em'}} /> 
                            </div>
                            </Col>
                            </Form.Item>   
                        </div>                        
                        </Col>
                       
                        <Col span={4}>
                            <div style={style}>
                            <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> นามสกุล :</label>
                            <Form.Item 
                                name="surname"
                                rules={[{ required: true , message: 'กรุณากรอกนามสกุล' }]}
                                hasFeedback
                                >
                                <Col  span={4}>
                            <div style={style}>
                                <Input placeholder="กรุณากรอกนามสกุล" style={{width:'600%', borderRadius: '0.5em'}} />
                            </div>
                        </Col>    
                            </Form.Item>
                            </div>
                        </Col>
                        
                        <Col span={4}>
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> เพศ :</label>
                            <Form.Item
                                name="gender" 
                                rules={[{ required: true, message: 'กรูณาเลือกเพศของท่าน' }]}
                                >
                                    <Col >
                                    <div style={style}>
                                        <Radio.Group >
                                            <Radio style={{fontSize:'3ch'}} value="male">เพศชาย</Radio>
                                            <Radio style={{fontSize:'3ch'}} value="female">เพศหญิง</Radio>
                                        </Radio.Group>
                                    </div>
                        </Col>
                            </Form.Item>
                        </div>                        
                        </Col>
                        
                        <Col span={4}>
                            <div style={style}>
                            <label  style={{fontSize:'2.4ch',color:'black'}}><c style={{color:'red'}}>* </c> วัน/เดือน/ปีเกิด :</label>
                                <Form.Item 
                                name={['birthday']} 
                                label="" 
                                rules={[{ required: true ,message: 'กรูณาระบุวันเกิดของท่าน'}]}
                                >
                                    <Col >
                                        <div style={style}>
                                            <DatePicker style={{borderRadius: '0.5em'}} onChange={onChange} />
                                        </div>
                                    </Col>
                                </Form.Item> 
                            </div>
                        </Col>

                    </Row>

                    <Row gutter={22} style={{paddingBottom:'10px'}}>
                        
                        <Col  span={2}/>
                        <Col  span={4}>
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> เลขบัตรประชาชน :</label>
                        <Form.Item
                                name="identity_card"
                                rules={[{ required: true, message: 'กรุณากรอกหมายเลขบัตรประชาชน' }]}
                                hasFeedback
                            >
                                <Col  span={4}>
                                <div style={style}>
                                    <Input placeholder="เลขบัตรประชาชน 13 หลัก" style={{width:'600%', borderRadius: '0.5em'}}/>
                                </div>
                                </Col> 
                            </Form.Item>
                        </div>                        
                        </Col>
                        <Col span={4}>
                            <div style={style}>
                            <label  style={{fontSize:'3ch',color:'black'}}>  E-mail:</label>
                                <Form.Item 
                                    name="E-mail"
                                    rules={[{ required: false }]}
                                    >
                                    <Col  span={4}>
                                        <div style={style}>
                                            <Input placeholder="user@example.com" style={{width:'600%', borderRadius: '0.5em'}} />
                                        </div>
                                    </Col>  
                                </Form.Item>
                            </div>
                        </Col>
                      
                        <Col span={4}>
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c>  Username :</label>
                        <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'กรุณากรอกชื่อผู้ใช้งาน' }]}
                                hasFeedback
                            >
                               <Col  span={4}>
                                <div style={style}>
                                    <Input placeholder="๊ชื่อผู้ใช้งาน" style={{width:'600%', borderRadius: '0.5em'}} />
                                </div>
                                </Col> 
                            </Form.Item>
                        </div>                        
                        </Col>
                        
                        <Col span={4}>
                            <div style={style}>
                            <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c>  Password :</label>
                            <Form.Item
                                name="password"
                                rules={[
                                {
                                    required: true,
                                    message: 'กรุณากรอกรหัสผ่าน',
                                },
                                ]}
                                hasFeedback
                            >
                               <Col span={4}>
                                    <div style={style}>
                                        <Input.Password placeholder="๊อย่างน้อย 8 ตัวอักษร" style={{width:'600%',borderRadius: '0.5em'}} />
                                    </div>
                                </Col>
                            </Form.Item>
                            </div>
                        </Col>

                        <Col  span={4}>
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c>  Confirm Password :</label>
                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                            {
                                required: true,
                                message: 'กรุณายืนยันรหัสผ่าน',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('รหัสผ่านของคุณป้อนไม่ตรงก้น');
                                },
                            }),
                            ]}
                        >
                             <Col span={4}>
                                <div style={style}>
                                    <Input.Password placeholder="๊ยืนยันรหัสผ่าน" style={{width:'600%', borderRadius: '0.5em'}} />
                                </div>
                             </Col>
                        </Form.Item>  
                        </div>                        
                        </Col>
                        
                    </Row>
                    <Row gutter={22} style={{paddingBottom:'10px'}}>
                       
                        <Col  span={2}/>
                        <Col span={4}>
                            <div style={style}>
                            <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c>  เบอร์โทรศัพท์ :</label>
                            <Form.Item 
                                name="phone"
                                rules={[{ required: true,message: 'กรุณากรอกเบอร์โทรศพท์' }]}
                                hasFeedback
                                >
                                 <Col  span={4}>
                                    <div style={style}>
                                    <Input placeholder="00-0000-0000" style={{width:'600%', borderRadius: '0.5em'}}  />
                                    </div>
                                </Col>
                            </Form.Item>
                            </div>
                        </Col>

                        <Col span={4}>
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}> </c>  เบอร์โทรศัพท์สำรอง :</label>
                        <Form.Item 
                                name="alternate_phone"
                                rules={[{ required: false, 
                                }]}
                            >
                                <Col  span={4}>
                                <div style={style}>
                                    <Input placeholder="๊00-0000-0000" style={{width:'600%', borderRadius: '0.5em'}} />
                                </div>
                                </Col>
                            </Form.Item>
                        </div>                        
                        </Col>
                        
                        <Col span={4}>
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}><FontAwesomeIcon style={{color:'#0066ff',width:'20px',height:'20px'}} icon={faFacebookSquare} /> Facebook :</label>
                        <Form.Item 
                                name="facebook"
                                rules={[{ required: false}]}
                            >
                                <Col  span={4}>
                                <div style={style}>
                                    <Input placeholder="๊facebook" style={{width:'600%', borderRadius: '0.5em'}} />
                                </div>
                                </Col>
                            </Form.Item>
                        </div>                        
                        </Col>
                       

                        <Col span={4}>
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}><FontAwesomeIcon style={{color:'#4CAF50',width:'20px',height:'20px'}} icon={faLine} /> ID Line :</label>
                        <Form.Item 
                                name="id_line"
                                rules={[{ required: false, 
                                }]}
                            >
                                <Col  span={4}>
                                <div style={style}>
                                    <Input placeholder="๊id line" style={{width:'600%', borderRadius: '0.5em'}} />
                                </div>
                                </Col>
                            </Form.Item>
                        </div>                        
                        </Col>
                        
                    </Row>

                    </div>
                    </Form>
            </Thing>
        )
    }
}

const Thing = styled.div`

  .modal-content {
  
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 10px 0px 0px 10px;
  width: auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  
  
}
.modal-header {

    font-size: 3ch;
    padding: 10px 0px 0px 10px;
    background-color: #0080FF;
    color: white;
    height:2.75rem;
    border: solid thick #0080FF;
    border-radius: 1em 1em 0em 0em;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}



`;