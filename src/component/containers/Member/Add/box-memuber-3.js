import React from 'react'
import styled from 'styled-components';
import { Form, Input,Row ,Col,Button} from 'antd';
import Map from './Map';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';


//const style = { padding: '10x 0px ',fontSize:'2.75ch'};
const style = { padding: '10x 0px '};

const Boxmenuber3 = () => {
 
    return (
      <Form name="dynamic_form_item" >
        <Form.List name="names">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field) => (
                  <Form.Item
                  >
                     <Thing>
              <Form>
              <div className="modal-header" >  
                  <c >ที่อยู่ฟาร์ม </c>
             </div>
              <div className="modal-content " >
              
              <Row gutter={22} style={{marginTop:'20px'}}>
                      <Col  span={2}/>
                      <Col  span={4} >
                      <div style={style}>
                      <label  style={{fontSize:'3ch',color:'black'}}><c style={{color:'red'}}>* </c> ฟาร์มเลขที่ :</label>
                      <Form.Item 
                          name={['farm_number']} 
                          hasFeedback
                          rules={[{ required: true , message: 'กรุณากรอกฟาร์มเลขที่'}]}
                         
                          >
                          <Col  span={4}>
                      <div  style={style}>
                      <Input  placeholder="กรุณากรอกฟาร์มเลขที่"style={{width:'600%', borderRadius: '0.5em'}} /> 
                      </div>
                      </Col>
                          </Form.Item>   
                      </div>                        
                      </Col>
  
                      <Col  span={4} >
                      <div style={style}>
                      <label  style={{fontSize:'3ch',color:'black'}}> ชื่อฟาร์ม :</label>
                      <Form.Item 
                          name={['farm_name']}                
                          rules={[{ required: false }]}
                         
                          >
                          <Col  span={4}>
                      <div  style={style}>
                      <Input  placeholder="ชื่อฟาร์ม"style={{width:'600%', borderRadius: '0.5em'}} /> 
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
                          name={['Postal_code']} 
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
                                      <div style={style}>
                                          <Input placeholder="กรุณากรอกจังหวัด" style={{width:'600%', borderRadius: '0.5em'}} />
                                      </div>
                                  </Col>
                          </Form.Item>
                          </div>
                      </Col>
  
                  </Row>
  
                  <pre
                  style={{marginTop:'-300px',marginRight:'40px',textAlign:'right'}}
                  > <Map/>
                  </pre>
  
                  
              </div>
             </Form>
          </Thing>
                    
                    {fields.length > 1 ? (
                      <Button
                      type="danger"
                      onClick={() => {
                          remove(field.name);
                        }}
                      style={{ width: 'auto',marginTop:'20px' }}
                    >
                      <MinusCircleOutlined/> ลบที่อยู่ฟาร์ม
                    </Button>
                      
                    ) : null}
                  </Form.Item>
                ))}
  
  
                <Form.Item>
                  <Button
                    type="primary"
                    onClick={() => {
                      add();
                    }}
                    style={{ width: 'auto' }}
                  >
                    <PlusOutlined /> เพิ่มที่อยู่ฟาร์ม
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
      </Form>
    );
  };
  
  export default Boxmenuber3;

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