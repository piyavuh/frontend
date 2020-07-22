import React, { Component } from 'react'
import styled from 'styled-components';
import { Form, Input, Row, Col, Button, DatePicker } from 'antd';
import './tank.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import Tankgeneral from './tank-general';


export default class Tank extends Component {
    render() {
        return (
            <Thing>
                <Form>
                    <div className="modal-header" >
                        <c ><FontAwesomeIcon style={{ color: 'white' }} icon={faListAlt} /> ข้อมูลจำเป็นของถัง</c>
                    </div>
                    <div className="modal-content " >


                        <Row>
                            <Col span={10} style={{ marginRight: '50px', marginLeft: '100px' }}>
                                <Form layout="horizontal">
                                    <Form.Item
                                        label="ประเภทถัง"
                                        name="id_semencow"
                                        rules={[{ required: true, message: 'กรุณากรอกประเภทถัง' }]}
                                    >
                                        <Input placeholder="ประเภทถัง" />
                                    </Form.Item>
                                    <Form.Item
                                        label="รหัสถัง"
                                        name="strain"
                                        rules={[{ required: true, message: 'กรุณากรอกรหัสถัง' }]}
                                    >
                                        <Input placeholder="รหัสถัง" />
                                    </Form.Item>
                                    <Form.Item
                                        label="ชื่อถัง"
                                        name="number_breeder"
                                        rules={[{ required: true, message: 'กรุณากรอกชื่อถัง' }]}
                                    >
                                        <Input placeholder="ชื่อถัง" />
                                    </Form.Item>
                                    <Form.Item
                                        label="ยี่ห้อถัง"
                                        name="color_breeder"
                                        rules={[{ required: true, message: 'กรุณากรอกยี่ห้อถัง' }]}
                                    >
                                        <Input placeholder="ยี่ห้อถัง" />
                                    </Form.Item>
                                    <Form.Item
                                        label="ขนาดถัง"
                                        name="color_tube"
                                        rules={[{ required: true, message: 'กรุณากรอกขนาดถัง' }]}
                                    >
                                        <Input placeholder="ขนาดถัง" />
                                    </Form.Item>

                                    <Form.Item label="วันที่นำเข้าคลัง">
                                        <Input placeholder="วันที่นำเข้าคลัง" />
                                    </Form.Item>
                                </Form >
                            </Col>


                            <Col span={10}>
                                <Form layout="horizontal">
                                    <Form.Item
                                        label="นำเข้าจาก"
                                        name="owner"
                                        rules={[{ required: true, message: 'กรุณากรอกนำเข้าจาก' }]}
                                    >
                                        <Input placeholder="นำเข้าจาก" />
                                    </Form.Item>

                                    <Form.Item
                                        label="สถานที่จัดเก็บ"
                                        name="manufacture"
                                        rules={[{ required: false }]}
                                    >
                                        <Input placeholder="สถานที่จัดเก็บ" />
                                    </Form.Item>

                                  <Form.Item
                                  label="วันที่เติมไนโตรเจน"
                                  >

                                  </Form.Item>

                                    <Form.Item

                                        label="ครั้งสุดท้าย"
                                        name="storage_tak"
                                        rules={[{ required: true, message: 'กรุณากรอกวันที่เติมไนโตรเจนเหลวครั้งสุดท้าย' }]}
                                    >
                                        <DatePicker style={{ borderRadius: '0.5em' }} />
                                    </Form.Item>

                                    <Form.Item
                                        label="ครั้งใหม่"

                                        name="storage_tank"
                                        rules={[{ required: true, message: 'กรุณากรอกวันที่เติมไนโตรเจนเหลวครั้งใหม่' }]}
                                    >

                                        <DatePicker style={{ borderRadius: '0.5em' }} />


                                    </Form.Item>
                                </Form>
                            </Col>

                        </Row>
                        <div>
                            <Tankgeneral />
                        </div>

                        <Col style={{ textAlign: 'right', paddingBottom: '20px', paddingTop: '40px' }}>
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