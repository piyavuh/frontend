import React, { Component } from 'react'
import Calculatesalary from '../../containers/Officer/CalculateSalary/CalculateSalary';
import Backcal from '../../containers/Officer/CalculateSalary/back-cal';
import styled from 'styled-components';
import { Layout,Select,DatePicker} from 'antd';


const { Option } = Select;
const { RangePicker } = DatePicker;

const { Header, Content } = Layout;

function handleChange(value) {
    console.log(`selected ${value}`);
  }
export default class CalculateSalary extends Component {
        render() {
            return (
                <div>
                    <Layout>
                    <Header style={{backgroundColor:'#F0F2F5',marginTop:'50px'}}>
                        <Backcal/>
                    </Header>
                    <Editmember>
                    <div className='E-header ' style={{marginTop:'40px'}}>
                        <c >คำนวณงินเดือนบุคลากร</c>
                        </div>
                        <div className='E-content' >
        
                        <div  style={{textAlign:'center',marginTop:'20px',fontSize: '3ch'}}>
                        <label >วันที่ </label>
                        <RangePicker style={{ width: 'auto',marginLeft:'10px'}} />
                        </div>
                            <div style={{textAlign:'center',marginTop:'20px',fontSize:'3ch'}}>
                                <label styled={{fontSize:'3ch'}}>ประจำเดือน </label>
                                <Select defaultValue="Month" style={{ width: 120,marginLeft:'10px' }} onChange={handleChange}>
                                <Option styled={{fontSize:'10ch'}} value="January" >มกราคม</Option>
                                <Option value="February">กุมภาพันธ์</Option>
                                <Option value="March" >มีนาคม</Option>
                                <Option value="April">เมษายน</Option>
                                <Option value="May">พฤษภาคม</Option>
                                <Option value="June ">มิถุนายน</Option>
                                <Option value="July" >กรกฎาคม</Option>
                                <Option value="August">สิงหาคม</Option>
                                <Option value="September">กันยายน</Option>
                                <Option value="October">ตุลาคม</Option>
                                <Option value="November">พฤศจิกายน</Option>
                                <Option value="December">ธันวาคม</Option>
                                </Select>
                            </div>
                            <div>
                                
                            </div>
                         <Content style={{ padding: '0 50px' ,margin: '30px 0' }}>
                        <Calculatesalary/>
                        
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
    .E-header {
    
        
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
    `
    ;