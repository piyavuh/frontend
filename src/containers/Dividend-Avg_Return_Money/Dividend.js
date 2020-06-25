import React, { Component } from 'react'
import { Row, Col,Form, Input } from 'antd';

import styled from 'styled-components';




const style = {  padding: '10px 0' };



class Buyshare extends Component {
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
                  <c >เงินปันผล</c>
             </div>
              <div className="modal-content " >
                             
               
        <div style={{borderBottom:'solid 0.5px #D3D3D3',margin:'0px 100px',fontSize:'3ch',fontWeight:'bold',marginTop:'40px'}}>เงินปันผลหุ้น</div>
                <Row gutter={[16, 24]} style={{marginTop:'20px' }}>
 
                <Col  span={2}/>
  
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="per_share_buy" 
                        label="เงินค่าหุ้นทั้งหมด" 
                        >
                                <Input placeholder=" " style={{width:'60%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                        </div>
                    </Col>

                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                        <Form.Item 
                        name="number_share_buy" 
                        label="อัตราปันผล" 
                        >
                        <Input placeholder="" style={{width:'60%'}}/>
                        <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                        </div>
                    </Col>

                    
                    
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                            <Form.Item 
                        name="totalmoney_share_buy" 
                        label="ยอดจ่ายเงินปันผล" 
                        >
                                <Input placeholder=" " style={{width:'60%'}}/>
                                <label style={{marginLeft:'20px'}}>บาท</label>
                        </Form.Item>
                    
                        </div>
                    </Col>

                    <Col span={2} />
                    
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
export default  Buyshare;

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