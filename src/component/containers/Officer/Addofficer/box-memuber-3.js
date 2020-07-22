import React, { Component } from 'react'
import styled from 'styled-components';
import { Form, Input,Row ,Col,InputNumber} from 'antd';
import Uploadimg from './Upload_img';


//const style = { padding: '10x 0px ',fontSize:'2.75ch'};
const style = { padding: '10x 0px '};

function onChange(value) {
    console.log('changed', value);
  }

export default class Boxmenuber3 extends Component {
    render() {
        return (
            <Thing>
            <Form>
            <div className="modal-header" >  
                <c >ข้อมูลที่ทำงาน </c>
           </div>
            <div className="modal-content " >
            
            <Row gutter={22} style={{marginTop:'20px'}}>
                    <Col  span={2}/>

                    <Col  span={4} >
                    <div style={style}>
                        <Form.Item>
                        <Col  span={4} >
                            <Uploadimg/>
                            </Col>
                        </Form.Item>
                    </div>
                    </Col>

                    <Col  span={4} style={{marginTop:'40px'}} >
                    <div style={style}>
                    <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> ตำแหน่ง :</label>
                    <Form.Item 
                        name={['position']} 
                        hasFeedback
                        rules={[{ required: true , message: 'กรุณากรอกตำแหน่ง'}]}
                       
                        >
                        <Col  span={4} >
                    <div  style={style}>
                    <Input  placeholder="กรุณากรอกตำแหน่ง"style={{width:'600%', borderRadius: '0.5em'}} /> 
                    </div>
                    </Col>
                        </Form.Item>   
                    </div>                        
                    </Col>

                    <Col  span={4}  style={{marginTop:'40px'}}>
                    <div style={style}>
                    <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> เงินเดือน (บาท) :</label>
                    <Form.Item 
                        name={['salary']} 
                        rules={[{ required: true, message: 'กรุณากรอกเงินเดือน' }]}
                        hasFeedback
                        >
                        <Col  span={4}>
                    <div  style={style}>
                    <InputNumber
                        defaultValue={1000}
                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        onChange={onChange}
                        style={{width:'600%',fontSize:'2.4ch'}}
                        />
                   
                    </div>
                    </Col>
                        </Form.Item>   
                    </div>                        
                    </Col>
                   
                    
                     

                    <Col span={4} style={{marginTop:'40px'}}>
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> บัญชีธนาคาร :</label>
                        <Form.Item 
                            name="bank_account"
                            rules={[{ required: true, message:'กรุณากรอกบัญชีธนาคาร' }]}
                            hasFeedback
                            >
                                <Col  span={4}>
                                    <div style={style}>
                                        <Input placeholder="กรุณากรอกบัญชีธนาคาร" style={{width:'600%', borderRadius: '0.5em'}} />
                                    </div>
                                </Col>
                        </Form.Item>
                        </div>
                    </Col>


                    <Col span={4} style={{marginTop:'40px'}}>
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> เลขที่บัญชีธนาคาร :</label>
                        <Form.Item 
                            name="bank_number"
                            rules={[{ required: true,message:'เลขที่บัญชีธนาคาร'}]}
                            hasFeedback
                            >
                                <Col  span={4}>
                                    <div style={style}>
                                        <Input placeholder="กรุณากรอกเลขที่บัญชีธนาคาร" style={{width:'600%', borderRadius: '0.5em'}} />
                                    </div>
                                </Col>
                        </Form.Item>
                        </div>
                    </Col>

                </Row>
                <Row gutter={22} style={{paddingBottom:'10px'}}>
                <Col  span={2}/>

                <Col span={4} >
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> ประเภทบัญชี :</label>
                        <Form.Item 
                            name="account_type"
                            rules={[{ required: true,message:'กรุณากรอกประเภทบัญชี' }]}
                            hasFeedback  
                            >
                                <Col  span={4}>
                                    <div style={style}>
                                        <Input placeholder="กรุณากรอกประเภทบัญชี" style={{width:'600%', borderRadius: '0.5em'}} />
                                    </div>
                                </Col>
                        </Form.Item>
                        </div>
                    </Col>
                    
                    <Col span={4}>
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}> </c> Fax :</label>
                        <Form.Item 
                            name="Fax"
                            rules={[{ required: false }]}
                            >
                                <Col  span={4}>
                                    <div style={style}>
                                        <Input placeholder="กรุณากรอกหมายเลขแฟกซ์" style={{width:'600%', borderRadius: '0.5em'}} />
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

font-family:"DB Adman X";
position: relative;
background-color: #fefefe;
margin: auto;
padding: 10px 0px 0px 10px;
width: auto;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
height:auto;


}
.modal-header {
margin: auto;
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



`;