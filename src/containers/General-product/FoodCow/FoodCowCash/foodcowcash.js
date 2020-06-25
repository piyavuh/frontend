import React, { Component } from 'react'
import { Form,Button } from 'antd';
import Tablefoodcowcash from './Table_foodcowcash';
import styled from 'styled-components';



class Buyfoodcowcash extends Component {
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
                  <c >ซื้ออาหารโคเงินสด</c>
             </div>
              <div className="modal-content " >
                             
              <Tablefoodcowcash/>

            
    
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
export default  Buyfoodcowcash;

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