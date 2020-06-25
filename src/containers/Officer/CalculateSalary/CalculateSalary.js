import React, { Component } from 'react'
import { Row, Col,Form, Input, Button,Descriptions } from 'antd';
import './Cal.css';
import styled from 'styled-components';
import Uploadimg from '../Addofficer/Upload_img';



const style = {  padding: '10px 0' };



class Calculatesalary extends Component {
    formRef = React.createRef();

    onFinish = values => {
        console.log(values);
      };
    
      onReset = () => {
        this.formRef.current.resetFields();
      };
    
      
    
    render() {

        return (
            <div>
                
                <Form 
                   
                    ref={this.formRef} 
                    name="control-ref" 
                    onFinish={this.onFinish}>
            <Thing>
             <div className="modal-header" >  
                  <c >เงินเดือนบุคลากรที่ได้รับ </c>
             </div>
              <div className="modal-content " >
            
                <Row style={{marginTop:'20px'}}>
                
                    
                    <Col  span={2}/>   
                    <Col  span={4} >
                    <div style={style}>  
                        <Form.Item>
                            <Uploadimg/>
                            <Button style={{backgroundColor:'#ffcc00',color:'white',border:'#ffcc00',fontSize:'2.8ch'}} type="primary" htmlType="submit">
                               ข้อมูลเพิ่มเติม
                            </Button> 
                        </Form.Item>
                    </div>
                    </Col>
                </Row>
        
              
        <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="รหัสบุคลากร">11224</Descriptions.Item>
        <Descriptions.Item label="ตำแหน่ง">ผู้จัดการสหกรณ์</Descriptions.Item>
        <Descriptions.Item label="ประเภทรายได้">รายเดือน</Descriptions.Item>
        <Descriptions.Item label="ชื่อ">ปิยะวัช</Descriptions.Item>
        <Descriptions.Item label="นามสกุล">กุณะมา</Descriptions.Item>
        <Descriptions.Item label="เบอรฺโทรศัพท์">06-58456788</Descriptions.Item>
       
      </Descriptions>
     
               
                   
                <div style={{borderBottom:'solid 0.5px #D3D3D3',margin:'40px 100px',fontSize:'3ch',fontWeight:'bold'}}>รายการเงินได้</div>

                <Row gutter={[16, 24]} >
                <Col  span={2}/>
                    
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="number_working_days" 
                        label="จำนวนวันทำงาน" 
                        >
                        <Input placeholder="" style={{width:'40%'}}/>
                        <label style={{marginLeft:'20px'}}>วัน</label>
                        </Form.Item>
                        </div>
                    </Col>

                    

                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="rate_per_day_working" 
                        label="อัตราต่อวัน" 
                        >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                        </div>
                    </Col>
                    
                    
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                            <Form.Item 
                        name="totalmoney_working_day" 
                        label="รวมเป็นเงิน " 
                        >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                    
                        </div>
                    </Col>

                    
                    <Col  span={2}/>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="number_working_hours" 
                        label="จำนวนชั่วโมงทำงาน" 
                        >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>ชั่วโมง</label>

                        </Form.Item>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="rate_per_hour_working" 
                        label="อัตราต่อชั่วโมง" 
                       >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                        </div>
                    </Col>

                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="totalmoney_working_hour" 
                        label="รวมเป็นเงิน" 
                        >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                        </div>
                    </Col>

                    <Col  span={2}/>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="ot" 
                        label="OverTime (OT)" 
                        >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>ชั่วโมง</label>
                        </Form.Item>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="rate_per_hour_ot" 
                        label="อัตราต่อชั่วโมง" 
                        >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="totalmoney_ot" 
                        label="รวมเป็นเงิน" 
                        >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                        </div>
                    </Col>
                    
                    
  
                </Row>
                <div style={{borderBottom:'solid 0.5px #D3D3D3',margin:'40px 100px',fontSize:'3ch',fontWeight:'bold'}}>รายการหักเงิน</div>
                <Row gutter={[16, 24]} >

                    <Col  span={2}/>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                            <Form.Item 
                        name="number_absence_day" 
                        label="จำนวนวันขาดงาน" 
                       >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>วัน</label>
                        </Form.Item>
                    
                        </div>
                    </Col>

                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="rate_per_day_absence" 
                        label="อัตราต่อวัน" 
                      >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                        </div>
                    </Col>

                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="totalmoney_absence" 
                        label="รวมเป็นเงิน" 
                        >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                        </div>
                    </Col>

                    <Col  span={2}/>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="number_late_hours" 
                        label="จำนวนชั่วโมงมาสาย" 
                        >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>ชั่วโมง</label>

                        </Form.Item>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="rate_per_hour_late" 
                        label="อัตราต่อชั่วโมง" 
                       >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                        </div>
                    </Col>

                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="totalmoney_late_hour" 
                        label="รวมเป็นเงิน" 
                        >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                        </div>
                    </Col>

                    <Col  span={2}/>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="social_security" 
                        label="ประกันสังคมเลขที่" 
                        >
                                <Input placeholder=" " style={{width:'75%'}}/>
                                
                        </Form.Item>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="social_security_percent" 
                        label="ร้อยละ" 
                        >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>ของเงินเดือน</label>
                        </Form.Item>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="totalmoney_social_security" 
                        label="รวมเป็นเงิน" 
                        >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                        </div>
                    </Col>

                    <Col  span={2}/>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="tax" 
                        label="ภาษีเลขที่" 
                        >
                                <Input placeholder=" " style={{width:'75%'}}/>
                                
                        </Form.Item>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="tex_percent" 
                        label="ร้อยละ" 
                        >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>ของเงินเดือน</label>
                        </Form.Item>
                        </div>
                    </Col>

                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="totalmoney_tax" 
                        label="รวมเป็นเงิน" 
                        >
                                <Input placeholder=" " style={{width:'40%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                        </div>
                    </Col>

                </Row>
                
                     <div style={{textAlign:'center',marginTop:'50px'}}>
                        <Form.Item 
                        style={{textAlign:'center'}}
                        name="totalmoney_salary" 
                        >
                            <label style={{marginRight:'20px',fontSize:'3ch',color:'black'}}>รวมเงินเดือนสุทธิ</label>
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
            </Thing>
                <Form.Item >
                   
                </Form.Item>
            </Form>
            
            </div>
        )
    }
}
export default  Calculatesalary;

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