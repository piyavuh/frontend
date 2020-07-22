import React, { Component } from 'react'
import styled from 'styled-components';
import { Form, Input, Row, Col, Button } from 'antd';
import './tank.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
//const style = { padding: '10x 0px ',fontSize:'2.75ch'};

export default class Boxmenuber2 extends Component {
  render() {
    return (
      <Thing>
        <Form>
          <div className="modal-header" >
            <c ><FontAwesomeIcon style={{color:'white'}} icon={faListAlt} /> ข้อมูลน้ำเชื้อ</c>
          </div>
          <div className="modal-content " >


            <Row>
              <Col span={10} style={{ marginRight: '50px',marginLeft:'100px' }}>
                <Form layout="horizontal">
                  <Form.Item
                    label="หมายเลขน้ำเชื้อ"
                    name="id_semencow"
                    rules={[{ required: true, message: 'กรุณากรอกหมายเลขน้ำเชื้อ' }]}
                  >
                    <Input placeholder="หมายเลขน้ำเชื้อ" />
                  </Form.Item>
                  <Form.Item
                    label="สายพันธุ์"
                    name="strain"
                    rules={[{ required: true, message: 'กรุณากรอกสายพันธุ์' }]}
                  >
                    <Input placeholder="สายพันธุ์" />
                  </Form.Item>
                  <Form.Item
                    label="เบอร์ประจำตัวพ่อพันธุ์"
                    name="number_breeder"
                    rules={[{ required: true, message: 'กรุณากรอกเบอร์ประจำตัวพ่อพันธุ์' }]}
                  >
                    <Input placeholder="เบอร์ประจำตัวพ่อพันธุ์" />
                  </Form.Item>
                  <Form.Item
                    label="สีพ่อพันธุ์"
                    name="color_breeder"
                    rules={[{ required: true, message: 'กรุณากรอกสีพ่อพันธุ์' }]}
                  >
                    <Input placeholder="สีพ่อพันธุ์" />
                  </Form.Item>
                  <Form.Item
                    label="สีหลอด"
                    name="color_tube"
                    rules={[{ required: true, message: 'กรุณากรอกสีหลอด' }]}
                  >
                    <Input placeholder="สีหลอด" />
                  </Form.Item>
                  <Form.Item label="สีจุกปิด">
                    <Input placeholder="สีจุกปิด" />
                  </Form.Item>
                  <Form.Item label="ขนาดหลอด">
                    <Input placeholder="ขนาดหลอด" />
                  </Form.Item>

                </Form >
              </Col>


              <Col span={10}>
                <Form layout="horizontal">
                  <Form.Item
                    label="เจ้าของ"
                    name="owner"
                    rules={[{ required: true, message: 'กรุณากรอกเจ้าของ' }]}
                  >
                    <Input placeholder="เจ้าของ" />
                  </Form.Item>

                  <Form.Item
                    label="ผลิต/นำเข้า"
                    name="manufacture"
                    rules={[{ required: false }]}
                  >
                    <Input placeholder="ผลิต/นำเข้า" />
                  </Form.Item>

                  <Form.Item
                    label="ถังเก็บ"
                    name="storage_tank"
                    rules={[{ required: true, message: 'กรุณากรอกถังเก็บ' }]}
                  >
                    <Input placeholder="ถังเก็บ" />
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
padding: 60px 60px 40px 40px;
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
border: solid thick #3BAFDA;
border-radius: 1em 1em 0em 0em;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}



`;