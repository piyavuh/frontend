import React, { Component } from 'react'
import styled from 'styled-components';
import { Form, Input,Row ,Col} from 'antd';
import Map from './Map';

//const style = { padding: '10x 0px ',fontSize:'2.75ch'};
const style = { padding: '10x 0px '};

export default class Boxmenuber2 extends Component {
    render() {
        return (
            <Thing>
            <Form>
            <div className="modal-header" >  
                <c >ที่อยู่สมาชิกสหกรณ์ </c>
           </div>
            <div className="modal-content " >
            <Row gutter={22} style={{marginTop:'20px'}}>
                    <Col  span={2}/>
                    <Col  span={4} >
                    <div style={style}>
                    <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> บ้านเลขที่ :</label>
                    <Form.Item 
                        name={['house_number']} 
                        hasFeedback
                        rules={[{ required: true , message: 'กรุณากรอกบ้านเลขที่'}]}
                       
                        >
                        <Col  span={4}>
                    <div  style={style}>
                    <Input  placeholder="กรุณากรอกบ้านเลขที่"style={{width:'600%', borderRadius: '0.5em'}} /> 
                    </div>
                    </Col>
                        </Form.Item>   
                    </div>                        
                    </Col>

                    <Col  span={4} >
                    <div style={style}>
                    <label  style={{fontSize:'3ch',color:'black'}}> หมู่บ้าน/อาคาร/ชั้น :</label>
                    <Form.Item 
                        name={['village']} 
                        rules={[{ required: false }]}
                       
                        >
                        <Col  span={4}>
                    <div  style={style}>
                    <Input  placeholder="หมู่บ้าน/อาคาร/ชั้น"style={{width:'600%', borderRadius: '0.5em'}} /> 
                    </div>
                    </Col>
                        </Form.Item>   
                    </div>                        
                    </Col>
                   
                    
                     

                    <Col span={4}>
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}> </c> ถนน :</label>
                        <Form.Item 
                            name="road"
                            rules={[{ required: false }]}
                           
                            >
                                <Col  span={4}>
                                    <div style={style}>
                                        <Input placeholder="กรุณากรอกถนน" style={{width:'600%', borderRadius: '0.5em'}} />
                                    </div>
                                </Col>
                        </Form.Item>
                        </div>
                    </Col>

                   
                  

                    <Col span={4}>
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}> หมู่ที่ :</label>
                        <Form.Item 
                            name="swine"
                            rules={[{ required: false}]}
                            
                            >
                                <Col  span={4}>
                                    <div style={style}>
                                        <Input placeholder="กรุณากรอกหมู่" style={{width:'600%', borderRadius: '0.5em'}} />
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
                        <label  style={{fontSize:'3ch',color:'black'}}> ตรอก/ซอย :</label>
                        <Form.Item 
                            name="alley"
                            rules={[{ required: false }]}
                           
                            >
                                <Col  span={4}>
                                    <div style={style}>
                                        <Input placeholder="กรุณากรอกซอย" style={{width:'600%', borderRadius: '0.5em'}} />
                                    </div>
                                </Col>
                        </Form.Item>
                        </div>
                    </Col>
               
                    <Col  span={4} >
                    <div style={style}>
                    <label style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> รหัสไปรษณีย์ :</label>
                    <Form.Item 
                        name={['ostal_code']} 
                        hasFeedback
                        rules={[{ required: true , message: 'กรุณากรอกรหัสไปรษณีย์'}]}
                        
                        >
                        <Col   span={4}>
                    <div style={style}>
                    <Input placeholder="กรุณากรอกรหัสไปรษณีย์"style={{width:'600%', borderRadius: '0.5em'}} /> 
                    </div>
                    </Col>
                        </Form.Item>   
                    </div>                        
                    </Col>

                    <Col span={4} >
                        <div style={style}>
                        <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> ตำบล/แขวง :</label>
                        <Form.Item 
                            name="district"
                            rules={[{ required: true , message: 'กรุณากรอกตำบล' }]}
                            hasFeedback
                            >
                                <Col  span={4}>
                                    <div style={style}>
                                        <Input placeholder="กรุณากรอกตำบล" style={{width:'600%', borderRadius: '0.5em'}} />
                                    </div>
                                </Col>
                        </Form.Item>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div style={style}>
                        <label style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> อำเภอ/เขต :</label>
                        <Form.Item 
                            name="prefecture"
                            rules={[{ required: true , message: 'กรุณากรอกอำเภอ' }]}
                            hasFeedback
                            >
                                <Col  span={4}>
                                    <div style={style}>
                                        <Input placeholder="กรุณากรอกอำเภอ" style={{width:'600%', borderRadius: '0.5em'}} />
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
                        <label style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> จังหวัด :</label>
                        <Form.Item 
                            name="province"
                            rules={[{ required: true , message: 'กรุณากรอกจังหวัด' }]}
                            hasFeedback
                            >
                                <Col  span={4}>
                                    
                                        <Input placeholder="กรุณากรอกจังหวัด" style={{width:'600%', borderRadius: '0.5em' }} />
                                   
                                </Col>
                        </Form.Item>
                        </div>
                    </Col>

                </Row>
                <pre
                style={{textAlign:'right',marginTop:'-300px',marginRight:'40px'}}
                > <Map/>
                </pre>
                
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
height:360px;

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