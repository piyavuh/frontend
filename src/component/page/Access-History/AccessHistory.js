import React, { Component } from 'react'
import Backaccess from '../../containers/Access-History/back-access';
import Tableaccess from '../../containers/Access-History/Table_EditMember';
import styled from 'styled-components';
import { Layout,DatePicker} from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Header, Content } = Layout;


function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }

export default class BuyShare extends Component {
    render() {
        return (
            <div>
                 <Layout>
            <Header style={{backgroundColor:'#F0F2F5',marginTop:'50px'}}>
                <Backaccess/>
            </Header>
            <Buysharesty>
            
            <div className='E-header ' style={{marginTop:'40px'}}>
                <c>รายละเอียด</c>
                        </div>


                        <div className='E-content' >
                        

                        <div style={{margin:'40px 60px',borderStyle:'groove',borderRadius:'0.5em',borderWidth:'5px'}}>
                        <div style={{textAlign:'center',marginTop:'40px',fontSize: '3ch',paddingBottom:'40px'}}>
                            <label> ช่วงเวลา : </label>
                            <RangePicker
                                ranges={{
                                    Today: [moment(), moment()],
                                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                                }}
                                showTime
                                format="YYYY/MM/DD HH:mm:ss"
                                onChange={onChange}
                                />
                        </div>
                        

                        
                        </div>

                        <Content style={{ padding: '0 50px' ,margin: '30px 0' }}>
                            <Tableaccess/>
                            
                        </Content>
                       
    
                
                        </div>
                        
            </Buysharesty>
            </Layout>
            </div>
        )
    }
}
const Buysharesty = styled.div`
    
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