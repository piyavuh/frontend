import React, { Component } from 'react'
import Backmenuber from '../../containers/Officer/Addofficer/back-menu';
import Boxmenubar1 from '../../containers/Officer/Addofficer/box-memuber-1';
import Boxmenubar2 from '../../containers/Officer/Addofficer/box-memuber-2';
import Boxmenubar3 from '../../containers/Officer/Addofficer/box-memuber-3';
import styled from 'styled-components';
import { UserOutlined  } from '@ant-design/icons';
import { Layout,Button,Form, Input,Modal } from 'antd';

const { Header, Content } = Layout;
const { confirm } = Modal;
function showConfirm() {
    confirm({
      okText: 'ใช่',
      cancelText: 'ไม่ใช่',
      title: <c style={{fontFamily:'DB Adman X',fontSize:'2.6ch'}}>เพิ่มข้อมูลบุคลากร</c>,
      icon: <UserOutlined /> ,
      content: <c  style={{fontFamily:'DB Adman X',fontSize:'2.4ch'}}>คุณต้องการบันทึกข้อมูลหรือไม่</c>,
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {
        
      },
    });
  }
export default class AddOfficer extends Component {
    render() {
        return (
            <div>
               <Layout>
                   <Header style={{backgroundColor:'#F0F2F5',marginTop:'50px'}}>
                    <Backmenuber/>
                </Header>

                <Addofficer>
                    <div className='t-header ' style={{marginTop:'40px'}}>
                    <c >เพิ่มข้อมูลบุคลากร </c>
                    </div >
                  <div className='t-content'>
                    
                  <Form.Item 
                    style={{fontSize:'3ch',marginTop:'15px'}}
                    name="officer_code"
                  ><label className="t-inputcode">รหัสบุคลากร</label>
                    <Input placeholder="00000" style={{marginLeft:'10px',width:'100px',fontSize:'2.4ch', borderRadius: '0.5em'}}/>
                    </Form.Item>
                    <Content style={{ padding: '0 50px' ,margin: '30px 0' }}>
                    <Boxmenubar1/>
                    <br/>
                    <Boxmenubar2/>
                    <br/>
                    <Boxmenubar3/>
                    
                </Content>
                <div style={{textAlign:'center'}}>
                    <Button type="primary" danger style={{fontSize:'3.5ch'}}>ยกเลิก</Button>
                    <Button style={{backgroundColor:'#4CAF50',color:'white',border:'#4CAF50',marginLeft:'10px',fontSize:'3.5ch'}} onClick={showConfirm}>บันทึก</Button>
                 </div>
                </div>
                </Addofficer>
                </Layout>
            </div>
        )
    }
}
const Addofficer = styled.div`

  .t-content {
  
  font-family:"DB Adman X";
  position: relative;
  background-color: #fefefe;
  padding: 10px 0px 0px 10px;
  width: auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  height:210ch;
  margin-bottom:60px;
  margin-left:40px;
  margin-right:40px;
}
.t-header {

    
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
.t-inputcode{
    font-size: 2.4ch;
    font-weight:bolder;
    margin-left:25px;
    }
`;
