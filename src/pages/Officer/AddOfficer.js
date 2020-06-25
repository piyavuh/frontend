import React, { Component } from "react";
import Backmenuber from "../../containers/Officer/Addofficer/back-menu";
import Boxmenubar2 from "../../containers/Officer/Addofficer/box-memuber-2";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";

import {
  Row,
  Layout,
  Modal,
  Button,
  Col,
  Form,
  Input,
  DatePicker,
  Radio,
  Select,
  InputNumber,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faLine,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import "../../containers/Officer/Addofficer/Add.css";

import Uploadimg from "../../containers/Officer/Addofficer/Upload_img";

//const style = { padding: '10x 0px ',fontSize:'2.75ch'};
const style = { padding: "10x 0px " };

function onChange(value) {
  console.log("changed", value);
}

library.add(fab);

const { Option } = Select;

const { Header, Content } = Layout;
const { confirm } = Modal;
function showConfirm() {
  confirm({
    okText: "ใช่",
    cancelText: "ไม่ใช่",
    title: (
      <c style={{ fontFamily: "DB Adman X", fontSize: "2.6ch" }}>
        เพิ่มข้อมูลบุคลากร
      </c>
    ),
    icon: <UserOutlined />,
    content: (
      <c style={{ fontFamily: "DB Adman X", fontSize: "2.4ch" }}>
        คุณต้องการบันทึกข้อมูลหรือไม่
      </c>
    ),
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log("Oops errors!"));
    },
    onCancel() {},
  });
}
export default class AddOfficer extends Component {
  constructor(props) {
    super(props);
    this.idEl = React.createRef();
    this.passwordEl = React.createRef();
    this.privilegeEl = React.createRef();
  }

  submitHandler = (event) => {
    event.preventDefault();
    const id = this.idEl.current.value;
    const password = this.passwordEl.current.value;
    const privilege = this.privilegeEl.current.value;

    if (id.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
      mutation {
        createOfficer(officerInput: {id: "${id}", password: "${password}", privilege: "${privilege}"}) {
          _id
          id
        }
      }
      `,
    };

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
      <div>
        <Layout>
          <Header style={{ backgroundColor: "#F0F2F5", marginTop: "50px" }}>
            <Backmenuber />
          </Header>

          <Addofficer>
            <div className="t-header " style={{ marginTop: "40px" }}>
              <c>เพิ่มข้อมูลบุคลากร </c>
            </div>
            <div className="t-content">
              <Form.Item
                style={{ fontSize: "3ch", marginTop: "15px" }}
                name="officer_code"
              >
                <label className="t-inputcode">รหัสบุคลากร</label>
                <Input
                  placeholder="00000"
                  style={{
                    marginLeft: "10px",
                    width: "100px",
                    fontSize: "2.4ch",
                    borderRadius: "0.5em",
                  }}
                />
              </Form.Item>
              <Content style={{ padding: "0 50px", margin: "30px 0" }}>
                <Form>
                  <div className="modal-header">
                    <c>ข้อมูลเบื้องต้น </c>
                  </div>
                  <div className="modal-content ">
                    <Row gutter={22} style={{ marginTop: "20px" }}>
                      <Col span={2} />

                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}>* </c> คำนำหน้า :
                          </label>
                          <Form.Item
                            name="prefix"
                            rules={[
                              { required: true, message: "กรุณาเลือกคำนำหน้า" },
                            ]}
                          >
                            <Select
                              style={{ fontSize: "3ch" }}
                              placeholder="กรุณาเลือกคำนำหน้า"
                              allowClear
                            >
                              <Option value="Mr.">นาย</Option>
                              <Option value="Mrs.">นาง</Option>
                              <Option value="Ms.">นางสาว</Option>
                            </Select>
                          </Form.Item>
                        </div>
                      </Col>

                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}>* </c> ชื่อ :
                          </label>
                          <Form.Item
                            name={["name"]}
                            rules={[
                              { required: true, message: "กรุณากรอกชื่อ" },
                            ]}
                            hasFeedback
                          >
                            <Col span={4}>
                              <div style={style}>
                                <Input
                                  placeholder="กรุณากรอกชื่อ"
                                  style={{
                                    width: "600%",
                                    borderRadius: "0.5em",
                                  }}
                                />
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>

                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}>* </c> นามสกุล :
                          </label>
                          <Form.Item
                            name="surname"
                            rules={[
                              { required: true, message: "กรุณากรอกนามสกุล" },
                            ]}
                            hasFeedback
                          >
                            <Col span={4}>
                              <div style={style}>
                                <Input
                                  placeholder="กรุณากรอกนามสกุล"
                                  style={{
                                    width: "600%",
                                    borderRadius: "0.5em",
                                  }}
                                />
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>

                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}>* </c> เพศ :
                          </label>
                          <Form.Item
                            name="gender"
                            rules={[
                              {
                                required: true,
                                message: "กรูณาเลือกเพศของท่าน",
                              },
                            ]}
                          >
                            <Col>
                              <div style={style}>
                                <Radio.Group>
                                  <Radio
                                    style={{ fontSize: "3ch" }}
                                    value="male"
                                  >
                                    เพศชาย
                                  </Radio>
                                  <Radio
                                    style={{ fontSize: "3ch" }}
                                    value="female"
                                  >
                                    เพศหญิง
                                  </Radio>
                                </Radio.Group>
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>

                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}>* </c> วัน/เดือน/ปีเกิด
                            :
                          </label>
                          <Form.Item
                            name={["birthday"]}
                            label=""
                            rules={[
                              {
                                required: true,
                                message: "กรูณาระบุวันเกิดของท่าน",
                              },
                            ]}
                          >
                            <Col>
                              <div style={style}>
                                <DatePicker
                                  style={{ borderRadius: "0.5em" }}
                                  onChange={onChange}
                                />
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>
                    </Row>

                    <Row gutter={22} style={{ paddingBottom: "10px" }}>
                      <Col span={2} />

                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}>* </c> เลขบัตรประชาชน :
                          </label>
                          <Form.Item
                            name="identity_card"
                            rules={[
                              {
                                required: true,
                                message: "กรุณากรอกหมายเลขบัตรประชาชน",
                              },
                            ]}
                            hasFeedback
                          >
                            <Col span={4}>
                              <div style={style}>
                                <Input
                                  placeholder="เลขบัตรประชาชน 13 หลัก"
                                  style={{
                                    width: "600%",
                                    borderRadius: "0.5em",
                                  }}
                                />
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>
                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            {" "}
                            E-mail :
                          </label>
                          <Form.Item
                            name="E-mail"
                            rules={[{ required: false }]}
                          >
                            <Col span={4}>
                              <div style={style}>
                                <Input
                                  placeholder="user@example.com"
                                  style={{
                                    width: "600%",
                                    borderRadius: "0.5em",
                                  }}
                                />
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>

                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}>* </c> Username :
                          </label>
                          <Form.Item
                            name="username"
                            rules={[
                              {
                                required: true,
                                message: "กรุณากรอกชื่อผู้ใช้งาน",
                              },
                            ]}
                            hasFeedback
                          >
                            <Col span={4}>
                              <div style={style}>
                                <input
                                  className="from-input"
                                  id="id"
                                  ref={this.idEl}
                                  placeholder="๊ชื่อผู้ใช้งาน"
                                ></input>
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>

                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}>* </c> Password :
                          </label>
                          <Form.Item
                            name="password"
                            rules={[
                              {
                                required: true,
                                message: "กรุณากรอกรหัสผ่าน",
                              },
                            ]}
                            hasFeedback
                          >
                            <Col span={4}>
                              <div style={style}>
                                <input
                                  className="from-input"
                                  id="password"
                                  ref={this.passwordEl}
                                  placeholder="๊อย่างน้อย 8 ตัวอักษร"
                                ></input>
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>

                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}>* </c> Confirm Password
                            :
                          </label>
                          <Form.Item
                            name="confirm"
                            dependencies={["password"]}
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "กรุณายืนยันรหัสผ่าน",
                              },
                              ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (
                                    !value ||
                                    getFieldValue("password") === value
                                  ) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(
                                    "รหัสผ่านของคุณป้อนไม่ตรงก้น"
                                  );
                                },
                              }),
                            ]}
                          >
                            <Col span={4}>
                              <div style={style}>
                                <Input.Password
                                  placeholder="๊ยืนยันรหัสผ่าน"
                                  style={{
                                    width: "600%",
                                    fontSize: "2.4ch",
                                    borderRadius: "0.5em",
                                  }}
                                />
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>
                    </Row>
                    <Row gutter={22} style={{ paddingBottom: "10px" }}>
                      <Col span={2} />

                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}>* </c> เบอร์โทรศัพท์ :
                          </label>
                          <Form.Item
                            name="phone"
                            rules={[
                              {
                                required: true,
                                message: "กรุณากรอกเบอร์โทรศพท์",
                              },
                            ]}
                            hasFeedback
                          >
                            <Col span={4}>
                              <div style={style}>
                                <Input
                                  placeholder="00-0000-0000"
                                  style={{
                                    width: "600%",
                                    borderRadius: "0.5em",
                                  }}
                                />
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>
                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}> </c> เบอร์โทรศัพท์สำรอง
                            :
                          </label>
                          <Form.Item
                            name="alternate_phone"
                            rules={[{ required: false }]}
                          >
                            <Col span={4}>
                              <div style={style}>
                                <Input
                                  placeholder="๊00-0000-0000"
                                  style={{
                                    width: "600%",
                                    borderRadius: "0.5em",
                                  }}
                                />
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>

                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <FontAwesomeIcon
                              style={{
                                color: "#0066ff",
                                width: "20px",
                                height: "20px",
                              }}
                              icon={faFacebookSquare}
                            />{" "}
                            Facebook :
                          </label>
                          <Form.Item
                            name="facebook"
                            rules={[{ required: false }]}
                          >
                            <Col span={4}>
                              <div style={style}>
                                <Input
                                  placeholder="๊facebook"
                                  style={{
                                    width: "600%",
                                    borderRadius: "0.5em",
                                  }}
                                />
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>

                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <FontAwesomeIcon
                              style={{
                                color: "#4CAF50",
                                width: "20px",
                                height: "20px",
                              }}
                              icon={faLine}
                            />{" "}
                            ID Line :
                          </label>
                          <Form.Item
                            name="id_line"
                            rules={[{ required: false }]}
                          >
                            <Col span={4}>
                              <div style={style}>
                                <Input
                                  placeholder="๊id line"
                                  style={{
                                    width: "600%",
                                    borderRadius: "0.5em",
                                  }}
                                />
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Form>
                <br />
                <Boxmenubar2 />
                <br />
                <Form>
                  <div className="modal-header">
                    <c>ข้อมูลที่ทำงาน </c>
                  </div>
                  <div className="modal-content ">
                    <Row gutter={22} style={{ marginTop: "20px" }}>
                      <Col span={2} />

                      <Col span={4}>
                        <div style={style}>
                          <Form.Item>
                            <Col span={4}>
                              <Uploadimg />
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>

                      <Col span={4} style={{ marginTop: "40px" }}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}>* </c> ตำแหน่ง :
                          </label>
                          <Form.Item
                            name={["position"]}
                            hasFeedback
                            rules={[
                              { required: true, message: "กรุณากรอกตำแหน่ง" },
                            ]}
                          >
                            <Col span={4}>
                              <div style={style}>
                                <input
                                  className="from-input"
                                  id="privileg"
                                  ref={this.privilegeEl}
                                  placeholder="กรุณากรอกตำแหน่ง"
                                ></input>
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>

                      <Col span={4} style={{ marginTop: "40px" }}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}>* </c> เงินเดือน (บาท) :
                          </label>
                          <Form.Item
                            name={["salary"]}
                            rules={[
                              { required: true, message: "กรุณากรอกเงินเดือน" },
                            ]}
                            hasFeedback
                          >
                            <Col span={4}>
                              <div style={style}>
                                <InputNumber
                                  defaultValue={1000}
                                  formatter={(value) =>
                                    `${value}`.replace(
                                      /\B(?=(\d{3})+(?!\d))/g,
                                      ","
                                    )
                                  }
                                  parser={(value) =>
                                    value.replace(/\$\s?|(,*)/g, "")
                                  }
                                  onChange={onChange}
                                  style={{ width: "600%", fontSize: "2.4ch" }}
                                />
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>

                      <Col span={4} style={{ marginTop: "40px" }}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}>* </c> บัญชีธนาคาร :
                          </label>
                          <Form.Item
                            name="bank_account"
                            rules={[
                              {
                                required: true,
                                message: "กรุณากรอกบัญชีธนาคาร",
                              },
                            ]}
                            hasFeedback
                          >
                            <Col span={4}>
                              <div style={style}>
                                <Input
                                  placeholder="กรุณากรอกบัญชีธนาคาร"
                                  style={{
                                    width: "600%",
                                    borderRadius: "0.5em",
                                  }}
                                />
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>

                      <Col span={4} style={{ marginTop: "40px" }}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}>* </c> เลขที่บัญชีธนาคาร
                            :
                          </label>
                          <Form.Item
                            name="bank_number"
                            rules={[
                              { required: true, message: "เลขที่บัญชีธนาคาร" },
                            ]}
                            hasFeedback
                          >
                            <Col span={4}>
                              <div style={style}>
                                <Input
                                  placeholder="กรุณากรอกเลขที่บัญชีธนาคาร"
                                  style={{
                                    width: "600%",
                                    borderRadius: "0.5em",
                                  }}
                                />
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>
                    </Row>
                    <Row gutter={22} style={{ paddingBottom: "10px" }}>
                      <Col span={2} />

                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}>* </c> ประเภทบัญชี :
                          </label>
                          <Form.Item
                            name="account_type"
                            rules={[
                              {
                                required: true,
                                message: "กรุณากรอกประเภทบัญชี",
                              },
                            ]}
                            hasFeedback
                          >
                            <Col span={4}>
                              <div style={style}>
                                <Input
                                  placeholder="กรุณากรอกประเภทบัญชี"
                                  style={{
                                    width: "600%",
                                    borderRadius: "0.5em",
                                  }}
                                />
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>

                      <Col span={4}>
                        <div style={style}>
                          <label style={{ fontSize: "3ch", color: "black" }}>
                            <c style={{ color: "red" }}> </c> Fax :
                          </label>
                          <Form.Item name="Fax" rules={[{ required: false }]}>
                            <Col span={4}>
                              <div style={style}>
                                <Input
                                  placeholder="กรุณากรอกหมายเลขแฟกซ์"
                                  style={{
                                    width: "600%",
                                    borderRadius: "0.5em",
                                  }}
                                />
                              </div>
                            </Col>
                          </Form.Item>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </Content>
              <div style={{ textAlign: "center" }}>
                <Button type="primary" danger style={{ fontSize: "3.5ch" }}>
                  ยกเลิก
                </Button>
                <button type="submit">บันทึก</button>
              </div>
            </div>
          </Addofficer>
        </Layout>
      </div>
      </form>
    );
  }
}
const Addofficer = styled.div`
  .t-content {
    font-family: "DB Adman X";
    position: relative;
    background-color: #fefefe;
    padding: 10px 0px 0px 10px;
    width: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 210ch;
    margin-bottom: 60px;
    margin-left: 40px;
    margin-right: 40px;
  }
  .t-header {
    margin-left: 40px;
    margin-right: 40px;
    width: auto;
    font-size: 3ch;
    font-family: "DB Adman X";
    padding: 10px 0px 0px 10px;
    background-color: #0080ff;
    color: white;
    height: 2.75rem;
    border: solid thick #0080ff;
    border-radius: 1em 1em 0em 0em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .t-inputcode {
    font-size: 2.4ch;
    font-weight: bolder;
    margin-left: 25px;
  }
  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 10px 0px 0px 10px;
    width: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .modal-header {
    font-size: 3ch;
    padding: 10px 0px 0px 10px;
    background-color: #0080ff;
    color: white;
    height: 2.75rem;
    border: solid thick #0080ff;
    border-radius: 1em 1em 0em 0em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
