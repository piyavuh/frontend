import React, { Component } from 'react'
import TableEditMember  from '../../containers/Member/Edit/Table_EditMember';
import Backedit from '../../containers/Member/Edit/back-edit';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Header, Content } = Layout;
export default class EditMember extends Component {
    render() {
        return (
            <div>
                <Layout>
                <Header style={{backgroundColor:'#F0F2F5',marginTop:'50px'}}>
                    <Backedit/>
                </Header>
                <Editmember>
                <div className='E-header ' style={{marginTop:'40px'}}>
                    <c >ตรวจสอบ-แก้ไขข้อมูลสมาชิก</c>
                    </div>
                    <div className='E-content' >
                     <Content>
                    <TableEditMember/>
                </Content>
                </div>
                </Editmember>
                 </Layout>
              
            </div>
        )
    }
}

const Editmember = styled.div`

  .E-content {

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
.E-header {

    
margin-left:40px;
margin-right:40px;
width: auto;
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
