import React, { Component } from 'react'
import styled from 'styled-components';
import { Form, Input, Row, Col, Button } from 'antd';
import './foodcowregis.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
//const style = { padding: '10x 0px ',fontSize:'2.75ch'};

export default class Foodcowregistered extends Component {
  render() {
    return (
      <Thing>
        <Form>
          <div className="modal-header" >
            <c ><FontAwesomeIcon style={{color:'white'}} icon={faListAlt} /> ข้อมูลอาหารสัตว์</c>
          </div>
          <div className="modal-content " >


            <Row>
              <Col span={18} >
                <Form layout="horizontal">
                  <Form.Item
                    label="ชื่อวัตถุดิบ"
                    name="name_staple"
                    rules={[{ required: true, message: 'กรุณากรอกชื่อวัตถุดิบ' }]}
                  >
                    <Input placeholder="ชื่อวัตถุดิบ" />
                  </Form.Item>

                  <Form.Item
                    label="ประเภท"
                    name="food_category"
                    rules={[{ required: true, message:'กรุณากรอกประเภท' }]}
                  >
                    <Input placeholder="ประเภท" />
                  </Form.Item>

                  <Form.Item
                    label="หน่วยที่ใช้ในคลัง"
                    name="food_unit"
                    rules={[{ required: true, message:'กรุณากรอกหน่วยที่ใช้ในคลัง' }]}
                  >
                    <Input placeholder="หน่วยที่ใช้ในคลัง" />
                  </Form.Item>

                  <Form.Item
                    label="สถานที่จัดเก็บ"
                    name="food_storage_location"
                    rules={[{ required: false}]}
                  >
                    <Input placeholder="สถานที่จัดเก็บ" />
                  </Form.Item>

                 

                </Form >
              </Col>

              

             
            </Row>

            <Col style={{ textAlign: 'right', paddingBottom: '20px' }}>
              <Form.Item >
                <Button style={{ fontSize: '3.5ch', marginLeft: '10px' }} type="primary" htmlType="submit">
                  บันทึกข้อมูล
                           </Button>
                <Button style={{ marginLeft: '10px', fontSize: '3.5ch', marginRight: '100px' }} type="danger" htmlType="button" onClick={this.onReset}>
                  ยกเลิก
                            </Button>

              </Form.Item>
            </Col>



          </div>

        </Form>
      </Thing>
    )
  }
}

const Thing = styled.div`

.modal-content {

position: relative;
background-color: #fefefe;
margin: auto;
padding: 40px 0px 0px 200px;
width: auto;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
height:auto;


}
.modal-header {
margin: auto;
width: auto;
font-size: 3ch;
padding: 10px 0px 0px 10px;
background-color:  #3BAFDA;
color: white;
height:2.75rem;
border: solid thick  #3BAFDA;
border-radius: 1em 1em 0em 0em;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}



`;