import React, { Component } from 'react'
import { Layout,Button,Modal } from 'antd';
import { UserOutlined  } from '@ant-design/icons';
import Boxmemuber1 from '../../containers/Member/Add/box-memuber-1';
import Boxmenuber2 from '../../containers/Member/Add/box-memuber-2';
import Boxmenuber3 from '../../containers/Member/Add/box-memuber-3';
import Backmenuber from '../../containers/Member/Add/back-menu';
import styled from 'styled-components';

const { Header, Content } = Layout;
const { confirm } = Modal;
function showConfirm() {
    confirm({
      okText: 'ใช่',
      cancelText: 'ไม่ใช่',
      title: <c style={{fontFamily:'DB Adman X',fontSize:'3ch'}}>สมัครสมาชิกสหกรณ์</c>,
      icon: <UserOutlined /> ,
      content: <c  style={{fontFamily:'DB Adman X',fontSize:'2.8ch'}}>คุณต้องการบันทึกข้อมูลหรือไม่</c>,
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {
        
      },
    });
  }
class AddMember extends Component {
    
    render() {
        return (
            <div>
               
                <Layout>
                   <Header style={{backgroundColor:'#F0F2F5',marginTop:'50px'}}>
                    <Backmenuber/>
                </Header>
                
                <Addmember >
                    <div className='t-header ' style={{marginTop:'40px'}}>
                    <c >ข้อมูลที่ใช้ในการสมัคร </c>
                    </div>
                    <div className='t-content' >
                    <Content  style={{ padding: '0 50px' ,margin: '30px 0' }}>
                    <Boxmemuber1/>
                    <br/>
                    <Boxmenuber2/>
                    <br/>
                    <Boxmenuber3/>
                 </Content>
                 <div style={{textAlign:'center',paddingBottom:'50px'}}>
                    <Button style={{backgroundColor:'#4CAF50',color:'white',border:'#4CAF50',fontSize:'3.5ch'}} onClick={showConfirm}>บันทึก</Button>
                 </div>
                
                 </div>
                </Addmember>
                
                </Layout>
                
            </div>
            
        )
    }
}
export default AddMember;

const Addmember = styled.div`

  .t-content {
  
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
`;
