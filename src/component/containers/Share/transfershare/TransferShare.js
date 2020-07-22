import React, { Component } from 'react'
import { Row, Col,Form, Input, Button,Select } from 'antd';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './transfer.css';

const { Option } = Select;

const style = {  padding: '10px 0' };



class Transfershare extends Component {
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
                  <c >โอนหุ้นสหกรณ์ </c>
             </div>
              <div className="modal-content " >
                             
               

                <Row gutter={[16, 24]} style={{marginTop:'20px'}}>
                <Col  span={2}/>
                    
                   

                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="per_share_transfer" 
                        label="หุ้นละ" 
                        >
                                <Input placeholder=" " style={{width:'60%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                        </div>
                    </Col>

                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="number_share_transfer" 
                        label="จำนวนหุ้น" 
                        >
                        <Input placeholder="" style={{width:'60%'}}/>
                        <label style={{marginLeft:'20px'}}>หุ้น</label>
                        </Form.Item>
                        </div>
                    </Col>

                    
                    
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                            <Form.Item 
                        name="totalmoney_share_transfer" 
                        label="รวมเป็นเงิน " 
                        >
                                <Input placeholder=" " style={{width:'60%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                    
                        </div>
                    </Col>
                    <Col span={2} />
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                            <Form.Item 
                        name="no_share_transfer" 
                        label="หุ้นลขที่ " 
                        >
                                <Input placeholder=" " style={{width:'60%'}}/>
                               
                        </Form.Item>
                    
                        </div>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                            <Form.Item 
                        name="to_no_share_transfer" 
                        label="ถึงหุ้นลขที่ " 
                        >
                                <Input placeholder=" " style={{width:'60%'}}/>
                               
                        </Form.Item>
                    
                        </div>
                    </Col>
                  
                </Row>

                 <div style={{borderBottom:'solid 0.5px #D3D3D3',margin:'40px 100px',fontSize:'3ch',fontWeight:'bold'}}>โอนหุ้นให้กับ</div>
                 <div  style={{margin:'40px 100px',fontSize:'2.6ch'}}> <Link to='/add-member' >หากผู้รับโอนไม่ได้เป็นสมาชิกรุณาคลิกที่นี้</Link></div>
                <Row gutter={[16, 24]} style={{paddingBottom:'40px',marginBottom:'40px'}}>
                <Col  span={2}/>
                    
                   

                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="member_code" 
                        label="รหัสสมาชิก" 
                        >
                                <Input placeholder="รหัสสมาชิก" style={{width:'60%'}}/>
                        </Form.Item>
                        </div>
                    </Col>

                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="prefix" 
                        label="คำนำหน้า" 
                        >
                       <Select
                            style={{fontSize:'3ch',width:'auto'}}
                            placeholder="เลือกคำนำหน้า"
                            allowClear
                            >
                            <Option value="Mr.">นาย</Option>
                            <Option value="Mrs.">นาง</Option>
                            <Option value="Ms.">นางสาว</Option>
                        </Select>
                        </Form.Item>
                        </div>
                    </Col>

                    
                    
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                            <Form.Item 
                        name="name" 
                        label="ชื่อ" 
                        >
                                <Input placeholder="ชื่อสมาชิก" style={{width:'60%'}}/>
                        </Form.Item>
                    
                        </div>
                    </Col>
                    <Col span={2} />
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                            <Form.Item 
                        name="surname" 
                        label="นามสกุล" 
                        >
                                <Input placeholder="นามสกุลสมาชิก" style={{width:'60%'}}/>
                               
                        </Form.Item>
                    
                        </div>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                            <Form.Item 
                        name="group" 
                        label="กลุ่มที่" 
                        >
                                <Input placeholder="กลุ่มสมาชิก" style={{width:'60%'}}/>
                               
                        </Form.Item>
                    
                        </div>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="village" 
                        label="บ้าน" 
                        >
                                <Input placeholder="บ้านสมาชิก" style={{width:'60%'}}/>
                               
                        </Form.Item>
                    
                        </div>
                    </Col>
                </Row>
        </div>
            </Thing>

               
            <div style={{paddingBottom:'20px',textAlign:'center'}}>
                <Button style={{backgroundColor:'#4CAF50',color:'white',border:'#4CAF50',marginLeft:'10px',fontSize:'3.5ch',marginBottom:'20px'}} type="primary" htmlType="submit">
                               บันทึก
                </Button> 
                <Button style={{fontSize:'3.5ch',marginLeft:'10px'}}  type="danger" htmlType="button" onClick={this.onReset}>
                                ยกเลิก
                </Button>  
            </div>
                
                     
                

               
           

                                
          


            </Form>
            
            </div>
        )
    }
}
export default  Transfershare;

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