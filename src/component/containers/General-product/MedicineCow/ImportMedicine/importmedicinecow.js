import React, { Component } from 'react'
import styled from 'styled-components';
import { Form, Input, Row, Col, Button } from 'antd';
import './importmedicine.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-solid-svg-icons';


export default class Boxmenuber2 extends Component {
  render() {
    return (
      <Thing>
        <Form>
          <div className="modal-header" >
            <c > <FontAwesomeIcon style={{ color: 'white' }} icon={faListAlt} /> ข้อมูลยารักษาโรค</c>
          </div>
          <div className="modal-content " >


            <Row>
              <Col span={10} style={{ marginRight: '50px' }}>
                <Form layout="horizontal">
                  <Form.Item
                    label="วันที่นำเข้า"
                    name="name_commerce"
                    rules={[{ required: true, message: 'กรุณากรอกวันที่นำเข้า' }]}
                  >
                    <Input placeholder="วันที่นำเข้า" />
                  </Form.Item>
                  <Form.Item
                    label="ชื่อยา"
                    name="name_science"
                    rules={[{ required: true, message: 'กรุณากรอกชื่อยา' }]}
                  >
                    <Input placeholder="ชื่อยา" />
                  </Form.Item>
                  <Form.Item
                    label="จำนวนคงคลัง"
                    name="name_ordinary"
                    rules={[{ required: false }]}
                  >
                    <Input placeholder="จำนวนคงคลัง" />
                  </Form.Item>

                  <Form.Item
                    label="จำนวนที่นำเข้า"
                    name="medicine_group"
                    rules={[{ required: true, message: 'กรุณากรอกจำนวนที่นำเข้า' }]}
                  >
                    <Input placeholder="จำนวนที่นำเข้า" />
                  </Form.Item>

                  <Form.Item
                    label="หน่วย"
                    name="properties"
                    rules={[{ required: true, message: 'กรุณากรอกหน่วย' }]}
                  >
                    <Input placeholder="หน่วย" />
                  </Form.Item>

                </Form >
              </Col>

              {/* คอลัม 2*/}

              <Col span={10}>
                <Form layout="horizontal">
                  <Form.Item
                    label="วันที่ผลิต"
                    name="ingredient"
                    rules={[{ required: true, message: 'กรุณากรอกวันที่ผลิต' }]}
                  >
                    <Input.TextArea placeholder="วันที่ผลิต" />
                  </Form.Item>

                  <Form.Item
                    label="วันที่หมดอายุ"
                    name="medicine_pause"
                    rules={[{ required: true, message: 'กรุณากรอกวันหมดอายุ' }]}
                  >

                    <Input placeholder="วันที่หมดอายุ"  />

                  </Form.Item>

                  <Form.Item
                    label="ผลิต/นำเข้า"
                    name="medicine_manufacture"
                    rules={[{ required: false, message: 'กรุณากรอกผลิต/นำเข้า' }]}
                  >
                    <Input placeholder="ผลิต/นำเข้า" />
                  </Form.Item>

                  <Form.Item
                    label="ราคารวม"
                    name="medicine_unit"
                    rules={[{ required: true, message: 'กรุณากรอกราคารวม' }]}
                  >
                    <Input placeholder="ราคารวม" style={{width:'40%',marginRight:'10px'}} />
                    <label>บาท</label>
                  </Form.Item>

                  <Form.Item
                    label="ลอด"
                    name="medicine_storage_location"
                    rules={[{ required: true, message: 'กรุณากรอกลอด' }]}
                  >
                    <Input placeholder="ลอด" />
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