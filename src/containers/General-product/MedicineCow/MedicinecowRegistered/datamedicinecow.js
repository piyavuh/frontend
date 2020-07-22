import React, { Component } from 'react'
import styled from 'styled-components';
import { Form, Input, Row, Col, Button } from 'antd';
import './medicinecowregis.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
//const style = { padding: '10x 0px ',fontSize:'2.75ch'};

export default class Boxmenuber2 extends Component {
  render() {
    return (
      <Thing>
        <Form>
          <div className="modal-header" >
            <c > <FontAwesomeIcon style={{color:'white'}} icon={faListAlt} /> ข้อมูลยารักษาโรค</c>
          </div>
          <div className="modal-content " >


            <Row>
              <Col span={10} style={{ marginRight: '50px' }}>
                <Form layout="horizontal">
                  <Form.Item
                    label="ชื่อทางการค้า"
                    name="name_commerce"
                    rules={[{ required: true, message: 'กรุณากรอกชื่อทางการค้า' }]}
                  >
                    <Input placeholder="ชื่อทางการค้า" />
                  </Form.Item>
                  <Form.Item
                    label="ชื่อวิทยาศาสตร์"
                    name="name_science"
                    rules={[{ required: false }]}
                  >
                    <Input placeholder="ชื่อวิทยาศาสตร์" />
                  </Form.Item>
                  <Form.Item
                    label="ชื่อสามัญ"
                    name="name_ordinary"
                    rules={[{ required: false }]}
                  >
                    <Input placeholder="ชื่อสามัญ" />
                  </Form.Item>
                  <Form.Item
                    label="กลุ่มยา"
                    name="medicine_group"
                    rules={[{ required: true, message: 'กรุณากรอกกลุ่มยา' }]}
                  >
                    <Input placeholder="กลุ่มยา" />
                  </Form.Item>

                  <Form.Item
                    label="สรรพคุณ"
                    name="properties"
                    rules={[{ required: true, message: 'กรุณากรอกสรรพคุณ' }]}
                  >
                    <Input.TextArea placeholder="สรรพคุณ" />
                  </Form.Item>

                  <Form.Item 
                  name="medicine_use"
                  label="วิธีการใช้">
                    <Input.TextArea placeholder="วิธีการใช้" />
                  </Form.Item>

                  <Form.Item 
                  name="side_effects"
                  label="ผลข้างเคียง">
                    <Input.TextArea placeholder="ผลข้างเคียง" />
                  </Form.Item>

                </Form >
              </Col>

              {/* คอลัม 2*/}

              <Col span={10}>
                <Form layout="horizontal">
                  <Form.Item
                    label="ส่วนประกอบ"
                    name="ingredient"
                    rules={[{ required: false }]}
                  >
                    <Input.TextArea placeholder="ส่วนประกอบ" />
                  </Form.Item>

                  <Form.Item
                    label="ระยะหยุดยา"
                    name="medicine_pause"
                    rules={[{ required: false }]}
                  >

                    <Input placeholder="ระยะหยุดยา" style={{ width: '40%' }} />
                    <label style={{ marginLeft: '20px' }}>วัน</label>

                  </Form.Item>

                  <Form.Item
                    label="ผลิต/นำเข้า"
                    name="medicine_manufacture"
                    rules={[{ required: true, message: 'กรุณากรอกผลิต/นำเข้า' }]}
                  >
                    <Input placeholder="ผลิต/นำเข้า" />
                  </Form.Item>
                  <Form.Item
                    label="หน่วยที่ใช้ในคลัง"
                    name="medicine_unit"
                    rules={[{ required: false }]}
                  >
                    <Input placeholder="หน่วยที่ใช้ในคลัง" />
                  </Form.Item>

                  <Form.Item
                    label="สถานที่จัดเก็บ"
                    name="medicine_storage_location"
                    rules={[{ required: false }]}
                  >
                    <Input placeholder="สถานที่จัดเก็บ" />
                  </Form.Item>

                  <Form.Item
                    label="หมายเหตุ"
                    name="medicine_note"
                    rules={[{ required: false }]}
                  >
                    <Input.TextArea placeholder="หมายเหตุ" />
                  </Form.Item>

                </Form>
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
padding: 40px 0px 0px 120px;
width: auto;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
height:auto;


}
.modal-header {
margin: auto;
width: auto;
font-size: 3ch;
padding: 10px 0px 0px 10px;
background-color: #3BAFDA;
color: white;
height:2.75rem;
border: solid thick  #3BAFDA;
border-radius: 1em 1em 0em 0em;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}



`;