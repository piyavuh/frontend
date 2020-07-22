import React, { Component } from 'react'
import Equipmentregistered from '../../../containers/General-product/Farm-equipment/equipmentregistered/dataequipmentcow';
import Backmenubar from '../../../containers/General-product/Farm-equipment/equipmentregistered/back-menu';

import styled from 'styled-components';
import './equipment.css'
import { Layout } from 'antd';
//const { Option } = Select;
const { Header, Content } = Layout;
//const style = { padding: '0px 0px' };

export default class Dataequipmentregistered extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header style={{ backgroundColor: '#F0F2F5', marginTop: '50px' }}>
                        <Backmenubar />
                    </Header>
                    <Buycowsty>

                        <div className='E-header ' style={{ marginTop: '40px' }}>
                            <c> กรอกข้อมูลการลงทะเบียน</c>
                        </div>

                        <div className='E-content' >



                            <Content style={{ padding: '0px 50px', margin: '30px 0',paddingBottom:'50px' }}>
                                <Equipmentregistered />
                            </Content>
                        </div>
                    </Buycowsty>
                </Layout>
            </div>
        )
    }
}
const Buycowsty = styled.div`
    
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