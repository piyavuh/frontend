import React, { Component } from "react";
import { UserOutlined } from "@ant-design/icons";
import Boxmenuber2 from "../../containers/Member/Add/box-memuber-2";
import Backedit from "../../containers/Member/Edit/back-edit";
import Backmenuber from "../../containers/Member/Add/back-menu";
import styled from "styled-components";
import {
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  Radio,
  Select,
  Layout,
  Button,
  Table,
  Modal,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Register.css";
import Map from "./Map";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import AuthContext from "../../context/auth-context";
import {
  fab,
  faLine,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const { Header, Content } = Layout;
const { confirm } = Modal;
function showConfirm() {
  confirm({
    okText: "ใช่",
    cancelText: "ไม่ใช่",
    title: (
      <c style={{ fontFamily: "DB Adman X", fontSize: "3ch" }}>
        สมัครสมาชิกสหกรณ์
      </c>
    ),
    icon: <UserOutlined />,
    content: (
      <c style={{ fontFamily: "DB Adman X", fontSize: "2.8ch" }}>
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

library.add(fab);

const style = { padding: "10x 0px " };

const { Option } = Select;

function onChange(date, dateString) {
  console.log(date, dateString);
}

class RegisterPage extends Component {
  state = {
    creating: false,
    users: [],
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.First_nameEl = React.createRef();
    this.Last_nameEl = React.createRef();
    this.SexEl = React.createRef();
    this.Birth_DayEl = React.createRef();
    this.ID_cardEl = React.createRef();
    this.EmailEl = React.createRef();
    this.UsernameEl = React.createRef();
    this.PasswordEl = React.createRef();
    this.Tell_numberEl = React.createRef();
    this.Tell_number2El = React.createRef();
    this.FacebookEl = React.createRef();
    this.LineEl = React.createRef();

    this.Farm_numberEl = React.createRef();
    this.Farm_VillageEl = React.createRef();
    this.Farm_RoadEl = React.createRef();
    this.Farm_Village_numberEl = React.createRef();
    this.Farm_alleyEl = React.createRef();
    this.Farm_postcodeEl = React.createRef();
    this.Farm_cantonEl = React.createRef();
    this.Farm_DistrictEl = React.createRef();
    this.Farm_ProvinceEl = React.createRef();
    this.Farm_ownerEl = React.createRef();
  }
  submitHandler = (props) => {
    props.preventDefault();
    const First_name = this.First_nameEl.current.value;
    const Last_name = this.Last_nameEl.current.value;
    const Sex = this.SexEl.current.value;
    const Birth_Day = this.Birth_DayEl.current.value;
    const ID_card = this.ID_cardEl.current.value;
    const Email = this.EmailEl.current.value;
    const Username = this.UsernameEl.current.value;
    const Password = this.PasswordEl.current.value;
    const Tell_number = this.Tell_numberEl.current.value;
    const Tell_number2 = this.Tell_number2El.current.value;
    const Facebook = this.FacebookEl.current.value;
    const Line = this.LineEl.current.value;

    const Farm_number = this.Farm_numberEl.current.value;
    const Farm_Village = this.Farm_VillageEl.current.value;
    const Farm_Road = this.Farm_RoadEl.current.value;
    const Farm_Village_number = this.Farm_Village_numberEl.current.value;
    const Farm_alley = this.Farm_alleyEl.current.value;
    const Farm_postcode = this.Farm_postcodeEl.current.value;
    const Farm_canton = this.Farm_cantonEl.current.value;
    const Farm_District = this.Farm_DistrictEl.current.value;
    const Farm_Province = this.Farm_ProvinceEl.current.value;

    if (Username.trim().length === 0 || Password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
      mutation {
        createUser(userInput: {First_name: "${First_name}", Last_name: "${Last_name}", Sex: "${Sex}", Birth_Day: "${Birth_Day}", ID_card: "${ID_card}", Email: "${Email}", Username: "${Username}", Password: "${Password}", Tell_number: "${Tell_number}", Tell_number2: "${Tell_number2}", Facebook: "${Facebook}", Line: "${Line}"}) {
          _id
          Username
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
      })
      .then(() => {
        const requestBodyquery = {
          query: `
                query{
                  oneuser(Username: "${Username}") {
                    _id
                  }
                }
                `,
        };
        fetch("http://localhost:8000/graphql", {
          method: "POST",
          body: JSON.stringify(requestBodyquery),
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
            console.log(resData.data.oneuser._id);
            let requestBodyfarm = {
              query: `
          mutation {
            createFarm(farmInput: {Farm_number: "${Farm_number}", Farm_Village: "${Farm_Village}", Farm_Road: "${Farm_Road}", Farm_Village_number:"${Farm_Village_number}", Farm_alley: "${Farm_alley}", Farm_postcode: "${Farm_postcode}", Farm_canton: "${Farm_canton}",Farm_District: "${Farm_District}", Farm_Province: "${Farm_Province}", Farm_owner: "${resData.data.oneuser._id}"}) {
              Farm_number
            }
          }
          `,
            };
            fetch("http://localhost:8000/graphql", {
              method: "POST",
              body: JSON.stringify(requestBodyfarm),
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
          })
          .catch((err) => {
            console.log(err);
          });
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

            <Registerpage>
              <div className="t-header " style={{ marginTop: "40px" }}>
                <c>ข้อมูลที่ใช้ในการสมัคร </c>
              </div>
              <div className="t-content">
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
                                {
                                  required: true,
                                  message: "กรุณาเลือกคำนำหน้า",
                                },
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
                                  <input
                                    className="from-input"
                                    id="First_name"
                                    ref={this.First_nameEl}
                                    placeholder="กรุณากรอกชื่อ"
                                  ></input>
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
                                {
                                  required: true,
                                  message: "กรุณากรอกนามสกุล",
                                },
                              ]}
                              hasFeedback
                            >
                              <Col span={4}>
                                <div style={style}>
                                  <input
                                    className="from-input"
                                    id=" Last_name"
                                    ref={this.Last_nameEl}
                                    placeholder="กรุณากรอกนามสกุล"
                                  ></input>
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
                                <div style={style}></div>

                                <Radio.Group>
                                  <Radio
                                    id=" Sex"
                                    ref={this.SexEl}
                                    style={{ fontSize: "3ch" }}
                                    value="male"
                                  >
                                    เพศชาย
                                  </Radio>
                                  <Radio
                                    id=" Sex"
                                    ref={this.SexEl}
                                    style={{ fontSize: "3ch" }}
                                    value="female"
                                  >
                                    เพศหญิง
                                  </Radio>
                                </Radio.Group>
                              </Col>
                            </Form.Item>
                          </div>
                        </Col>

                        <Col span={4}>
                          <div style={style}>
                            <label
                              style={{ fontSize: "2.4ch", color: "black" }}
                            >
                              <c style={{ color: "red" }}>* </c>{" "}
                              วัน/เดือน/ปีเกิด :
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
                                  <input
                                    type="date"
                                    id=" Birth_Day"
                                    ref={this.Birth_DayEl}
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
                              <c style={{ color: "red" }}>* </c> เลขบัตรประชาชน
                              :
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
                                  <input
                                    className="from-input"
                                    id="ID_card"
                                    ref={this.ID_cardEl}
                                    placeholder="เลขบัตรประชาชน 13 หลัก"
                                  ></input>
                                </div>
                              </Col>
                            </Form.Item>
                          </div>
                        </Col>
                        <Col span={4}>
                          <div style={style}>
                            <label style={{ fontSize: "3ch", color: "black" }}>
                              {" "}
                              E-mail:
                            </label>
                            <Form.Item
                              name="E-mail"
                              rules={[{ required: false }]}
                            >
                              <Col span={4}>
                                <div style={style}>
                                  <input
                                    className="from-input"
                                    id="Email"
                                    ref={this.EmailEl}
                                    placeholder="user@example.com"
                                  ></input>
                                </div>
                              </Col>
                            </Form.Item>
                          </div>
                        </Col>

                        <Col span={4}>
                          <div style={style}>
                            <label
                              htmlFor="id"
                              style={{ fontSize: "3ch", color: "black" }}
                            >
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
                                    id="Username"
                                    ref={this.UsernameEl}
                                    placeholder="๊ชื่อผู้ใช้งาน"
                                  ></input>
                                </div>
                              </Col>
                            </Form.Item>
                          </div>
                        </Col>

                        <Col span={4}>
                          <div style={style}>
                            <label
                              htmlFor="Password"
                              style={{ fontSize: "3ch", color: "black" }}
                            >
                              <c style={{ color: "red" }}>* </c> Password :
                            </label>

                            <Form.Item
                              name="Password"
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
                                    id="Password"
                                    ref={this.PasswordEl}
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
                              <c style={{ color: "red" }}>* </c> Confirm
                              Password :
                            </label>
                            <Form.Item
                              name="confirm"
                              dependencies={["Password"]}
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
                                      getFieldValue("Password") === value
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
                                  <input
                                    className="from-input"
                                    id="Tell_number"
                                    ref={this.Tell_numberEl}
                                    placeholder="00-0000-0000"
                                  ></input>
                                </div>
                              </Col>
                            </Form.Item>
                          </div>
                        </Col>

                        <Col span={4}>
                          <div style={style}>
                            <label style={{ fontSize: "3ch", color: "black" }}>
                              <c style={{ color: "red" }}> </c>{" "}
                              เบอร์โทรศัพท์สำรอง :
                            </label>
                            <Form.Item
                              name="alternate_phone"
                              rules={[{ required: false }]}
                            >
                              <Col span={4}>
                                <div style={style}>
                                  <input
                                    className="from-input"
                                    id="Tell_number2"
                                    ref={this.Tell_number2El}
                                    placeholder="00-0000-0000"
                                  ></input>
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
                                  <input
                                    className="from-input"
                                    id="Facebook"
                                    ref={this.FacebookEl}
                                    placeholder="๊facebook"
                                  ></input>
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
                                  <input
                                    className="from-input"
                                    id="Line"
                                    ref={this.LineEl}
                                    placeholder="๊id line"
                                  ></input>
                                </div>
                              </Col>
                            </Form.Item>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                  <br />
                  <Boxmenuber2 />
                  <br />

                  <div>
                    <Form.Item>
                      <Form>
                        <div className="modal-header">
                          <c>ที่อยู่ฟาร์ม </c>
                        </div>
                        <div className="modal-content ">
                          <Row gutter={22} style={{ marginTop: "20px" }}>
                            <Col span={2} />
                            <Col span={4}>
                              <div style={style}>
                                <label
                                  style={{
                                    fontSize: "3ch",
                                    color: "black",
                                  }}
                                >
                                  <c style={{ color: "red" }}>* </c> ฟาร์มเลขที่
                                  :
                                </label>
                                <Form.Item
                                  name={["farm_number"]}
                                  hasFeedback
                                  rules={[
                                    {
                                      required: true,
                                      message: "กรุณากรอกฟาร์มเลขที่",
                                    },
                                  ]}
                                >
                                  <Col span={4}>
                                    <div style={style}>
                                      <input
                                        className="from-input"
                                        id="Farm_number"
                                        ref={this.Farm_numberEl}
                                        placeholder="กรุณากรอกฟาร์มเลขที่"
                                      ></input>
                                    </div>
                                  </Col>
                                </Form.Item>
                              </div>
                            </Col>

                            <Col span={4}>
                              <div style={style}>
                                <label
                                  style={{
                                    fontSize: "3ch",
                                    color: "black",
                                  }}
                                >
                                  {" "}
                                  ชื่อฟาร์ม :
                                </label>
                                <Form.Item
                                  name={["farm_name"]}
                                  rules={[{ required: false }]}
                                >
                                  <Col span={4}>
                                    <div style={style}>
                                      <input
                                        className="from-input"
                                        id="Farm_Village"
                                        ref={this.Farm_VillageEl}
                                        placeholder="ชื่อฟาร์ม"
                                      ></input>
                                    </div>
                                  </Col>
                                </Form.Item>
                              </div>
                            </Col>

                            <Col span={4}>
                              <div style={style}>
                                <label
                                  style={{
                                    fontSize: "3ch",
                                    color: "black",
                                  }}
                                >
                                  <c style={{ color: "red" }}> </c> ถนน :
                                </label>
                                <Form.Item
                                  name="road"
                                  rules={[{ required: false }]}
                                >
                                  <Col span={4}>
                                    <div style={style}>
                                      <input
                                        className="from-input"
                                        id="Farm_Road"
                                        ref={this.Farm_RoadEl}
                                        placeholder="กรุณากรอกถนน"
                                      ></input>
                                    </div>
                                  </Col>
                                </Form.Item>
                              </div>
                            </Col>

                            <Col span={4}>
                              <div style={style}>
                                <label
                                  style={{
                                    fontSize: "3ch",
                                    color: "black",
                                  }}
                                >
                                  {" "}
                                  หมู่ที่ :
                                </label>
                                <Form.Item
                                  name="swine"
                                  rules={[{ required: false }]}
                                >
                                  <Col span={4}>
                                    <div style={style}>
                                      <input
                                        className="from-input"
                                        id="Farm_Village_number"
                                        ref={this.Farm_Village_numberEl}
                                        placeholder="กรุณากรอกหมู่"
                                      ></input>
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
                                <label
                                  style={{
                                    fontSize: "3ch",
                                    color: "black",
                                  }}
                                >
                                  {" "}
                                  ตรอก/ซอย :
                                </label>
                                <Form.Item
                                  name="alley"
                                  rules={[{ required: false }]}
                                >
                                  <Col span={4}>
                                    <div style={style}>
                                      <input
                                        className="from-input"
                                        id="Farm_alley"
                                        ref={this.Farm_alleyEl}
                                        placeholder="กรุณากรอกซอย"
                                      ></input>
                                    </div>
                                  </Col>
                                </Form.Item>
                              </div>
                            </Col>

                            <Col span={4}>
                              <div style={style}>
                                <label
                                  style={{
                                    fontSize: "3ch",
                                    color: "black",
                                  }}
                                >
                                  <c style={{ color: "red" }}>* </c>{" "}
                                  รหัสไปรษณีย์ :
                                </label>
                                <Form.Item
                                  name={["Postal_code"]}
                                  hasFeedback
                                  rules={[
                                    {
                                      required: true,
                                      message: "กรุณากรอกรหัสไปรษณีย์",
                                    },
                                  ]}
                                >
                                  <Col span={4}>
                                    <div style={style}>
                                      <input
                                        className="from-input"
                                        id="Farm_postcode"
                                        ref={this.Farm_postcodeEl}
                                        placeholder="กรุณากรอกรหัสไปรษณีย์"
                                      ></input>
                                    </div>
                                  </Col>
                                </Form.Item>
                              </div>
                            </Col>

                            <Col span={4}>
                              <div style={style}>
                                <label
                                  style={{
                                    fontSize: "3ch",
                                    color: "black",
                                  }}
                                >
                                  <c style={{ color: "red" }}>* </c> ตำบล/แขวง :
                                </label>
                                <Form.Item
                                  name="district"
                                  rules={[
                                    {
                                      required: true,
                                      message: "กรุณากรอกตำบล",
                                    },
                                  ]}
                                  hasFeedback
                                >
                                  <Col span={4}>
                                    <div style={style}>
                                      <input
                                        className="from-input"
                                        id="Farm_canton"
                                        ref={this.Farm_cantonEl}
                                        placeholder="กรุณากรอกตำบล"
                                      ></input>
                                    </div>
                                  </Col>
                                </Form.Item>
                              </div>
                            </Col>
                            <Col span={4}>
                              <div style={style}>
                                <label
                                  style={{
                                    fontSize: "3ch",
                                    color: "black",
                                  }}
                                >
                                  <c style={{ color: "red" }}>* </c> อำเภอ/เขต :
                                </label>
                                <Form.Item
                                  name="prefecture"
                                  rules={[
                                    {
                                      required: true,
                                      message: "กรุณากรอกอำเภอ",
                                    },
                                  ]}
                                  hasFeedback
                                >
                                  <Col span={4}>
                                    <div style={style}>
                                      <input
                                        className="from-input"
                                        id="Farm_District"
                                        ref={this.Farm_DistrictEl}
                                        placeholder="กรุณากรอกอำเภอ"
                                      ></input>
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
                                <label
                                  style={{
                                    fontSize: "3ch",
                                    color: "black",
                                  }}
                                >
                                  <c style={{ color: "red" }}>* </c> จังหวัด :
                                </label>
                                <Form.Item
                                  name="province"
                                  rules={[
                                    {
                                      required: true,
                                      message: "กรุณากรอกจังหวัด",
                                    },
                                  ]}
                                  hasFeedback
                                >
                                  <Col span={4}>
                                    <div style={style}>
                                      <input
                                        className="from-input"
                                        id="Farm_Province"
                                        ref={this.Farm_ProvinceEl}
                                        placeholder="กรุณากรอกจังหวัด"
                                      ></input>
                                    </div>
                                  </Col>
                                </Form.Item>
                              </div>
                            </Col>
                          </Row>

                          <pre
                            style={{
                              marginTop: "-300px",
                              marginRight: "40px",
                              textAlign: "right",
                            }}
                          >
                            {" "}
                            <Map />
                          </pre>
                        </div>
                      </Form>
                    </Form.Item>
                  </div>
                </Content>
                <div style={{ textAlign: "center", paddingBottom: "50px" }}>
                  <div className="form-actions">
                    <button type="submit">Submit</button>
                   
                  </div>
                </div>
              </div>
            </Registerpage>
          </Layout>
        </div>
      </form>
    );
  }
}
export default RegisterPage;

const Registerpage = styled.div`
  .t-content {
    font-family: "DB Adman X";
    position: relative;
    background-color: #fefefe;
    padding: 10px 0px 0px 10px;
    width: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: auto;
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
