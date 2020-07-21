import React, { Component } from "react";
import Calculatesalary from "../../containers/Officer/CalculateSalary/CalculateSalary";
import Backcal from "../../containers/Officer/CalculateSalary/back-cal";
import styled from "styled-components";
import { Layout, Select, DatePicker } from "antd";

import { Row, Col, Form, Input, Button, Descriptions } from "antd";
import "./officer.css";

import Uploadimg from "../../containers/Officer/Addofficer/Upload_img";

const style = { padding: "10px 0" };

const { Option } = Select;
const { RangePicker } = DatePicker;

const { Header, Content } = Layout;

function handleChange(value) {
  console.log(`selected ${value}`);
}
export default class CalculateSalary extends Component {


    state = {
        Creating: false,
        Total_workperday: [],
        Total_Ot: [],
        Total_secur: [],
        Total_tax: [],
        Total:[]
      };

  formRef = React.createRef();

  onFinish = (values) => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };
  constructor(props) {
    super(props);
    this.name_officerEl = React.createRef();
    this.num_workperdayEl = React.createRef();
    this.wage_perdayEl = React.createRef();
    this.otEl = React.createRef();
    this.ot_perdayEl = React.createRef();
    this.num_securEl = React.createRef();
    this.secur_persenEl = React.createRef();
    this.num_taxEl = React.createRef();
    this.tax_persenEl = React.createRef();
  }
  submitHandler = (props) => {
    props.preventDefault();
    const name_officer = this.name_officerEl.current.value;

    const num_workperday = this.num_workperdayEl.current.value;
    const wage_perday = this.wage_perdayEl.current.value;
    const ot = this.otEl.current.value;
    const ot_perday = this.ot_perdayEl.current.value;
    const num_secur = this.num_securEl.current.value;
    const secur_persen = this.secur_persenEl.current.value;
    const num_tax = this.num_taxEl.current.value;
    const tax_persen = this.tax_persenEl.current.value;
    
    const total_workperday = num_workperday*wage_perday;
    const total_ot = ot*ot_perday;
    const total_secur = ((num_workperday*wage_perday)+(ot*ot_perday))*(secur_persen/100);
    const total_tax = ((num_workperday*wage_perday)+(ot*ot_perday))*(tax_persen/100);
    const total = (total_workperday+total_ot)-(total_secur+total_tax);
    
    const t_workperday = total_workperday.toString();
    this.setState({ Total_workperday: t_workperday });
    const t_ot = total_ot.toString();
    this.setState({ Total_Ot: t_ot });
    const t_secur = total_secur.toString();
    this.setState({ Total_secur: t_secur });
    const t_tax =total_tax.toString();
    this.setState({ Total_tax: t_tax });
    const t = total.toString();
    this.setState({ Total: t });


  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <Layout>
            <Header style={{ backgroundColor: "#F0F2F5", marginTop: "50px" }}>
              <Backcal />
            </Header>
            <Editmember>
              <div className="E-header " style={{ marginTop: "40px" }}>
                <c>คำนวณงินเดือนบุคลากร</c>
              </div>
              <div className="E-content">
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                    fontSize: "3ch",
                  }}
                >
                  <label>วันที่ </label>
                  <RangePicker style={{ width: "auto", marginLeft: "10px" }} />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                    fontSize: "3ch",
                  }}
                >
                  <label styled={{ fontSize: "3ch" }}>ประจำเดือน </label>
                  <Select
                    defaultValue="Month"
                    style={{ width: 120, marginLeft: "10px" }}
                    onChange={handleChange}
                  >
                    <Option styled={{ fontSize: "10ch" }} value="January">
                      มกราคม
                    </Option>
                    <Option value="February">กุมภาพันธ์</Option>
                    <Option value="March">มีนาคม</Option>
                    <Option value="April">เมษายน</Option>
                    <Option value="May">พฤษภาคม</Option>
                    <Option value="June ">มิถุนายน</Option>
                    <Option value="July">กรกฎาคม</Option>
                    <Option value="August">สิงหาคม</Option>
                    <Option value="September">กันยายน</Option>
                    <Option value="October">ตุลาคม</Option>
                    <Option value="November">พฤศจิกายน</Option>
                    <Option value="December">ธันวาคม</Option>
                  </Select>
                </div>
                <div></div>
                <Content style={{ padding: "0 50px", margin: "30px 0" }}>
                  <div>
                    <Form
                      ref={this.formRef}
                      name="control-ref"
                      onFinish={this.onFinish}
                    >
                      <div className="modal-header">
                        <c>เงินเดือนบุคลากรที่ได้รับ </c>
                      </div>
                      <div className="modal-content ">
                        <Row style={{ marginTop: "20px" }}>
                          <Col span={2} />
                          <Col span={4}>
                            <div style={style}>
                              <Form.Item>
                                <Uploadimg />
                                <Button
                                  style={{
                                    backgroundColor: "#ffcc00",
                                    color: "white",
                                    border: "#ffcc00",
                                    fontSize: "2.8ch",
                                  }}
                                  type="primary"
                                  htmlType="submit"
                                >
                                  ข้อมูลเพิ่มเติม
                                </Button>
                              </Form.Item>
                            </div>
                          </Col>
                        </Row>

                        <Descriptions
                          bordered
                          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                        >
                          <Descriptions.Item label="รหัสบุคลากร">
                            11224
                          </Descriptions.Item>
                          <Descriptions.Item label="ตำแหน่ง">
                            ผู้จัดการสหกรณ์
                          </Descriptions.Item>
                          <Descriptions.Item label="ประเภทรายได้">
                            รายเดือน
                          </Descriptions.Item>
                          <Descriptions.Item label="ชื่อ">
                            <input
                              className="from-input"
                              id="name_officer"
                              ref={this.name_officerEl}
                              placeholder="  "
                            ></input>
                          </Descriptions.Item>
                          <Descriptions.Item label="นามสกุล">
                            กุณะมา
                          </Descriptions.Item>
                          <Descriptions.Item label="เบอรฺโทรศัพท์">
                            06-58456788
                          </Descriptions.Item>
                        </Descriptions>

                        <div
                          style={{
                            borderBottom: "solid 0.5px #D3D3D3",
                            margin: "40px 100px",
                            fontSize: "3ch",
                            fontWeight: "bold",
                          }}
                        >
                          รายการเงินได้
                        </div>

                        <Row gutter={[16, 24]}>
                          <Col span={2} />

                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item
                                name="number_working_days"
                                label="จำนวนวันทำงาน"
                              >
                                <input
                                  className="from-input"
                                  id="num_workperday"
                                  ref={this.num_workperdayEl}
                                  placeholder="  "
                                ></input>
                                <label style={{ marginLeft: "20px" }}>
                                  วัน
                                </label>
                              </Form.Item>
                            </div>
                          </Col>

                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item
                                name="rate_per_day_working"
                                label="อัตราต่อวัน"
                              >
                                <input
                                  className="from-input"
                                  id="wage_perday"
                                  ref={this.wage_perdayEl}
                                  placeholder="  "
                                ></input>
                                <label style={{ marginLeft: "20px" }}>
                                  บาท
                                </label>
                              </Form.Item>
                            </div>
                          </Col>

                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item
                                name="totalmoney_working_day"
                                label="รวมเป็นเงิน "
                              >
                            {this.state.Total_workperday}
                                <label style={{ marginLeft: "20px" }}>
                                  บาท
                                </label>
                              </Form.Item>
                            </div>
                          </Col>

                          <Col span={2} />
                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item name="ot" label="OverTime (OT)">
                                <input
                                  className="from-input"
                                  id="ot"
                                  ref={this.otEl}
                                  placeholder="  "
                                ></input>
                                <label style={{ marginLeft: "20px" }}>
                                  ชั่วโมงต่อเดือน
                                </label>
                              </Form.Item>
                            </div>
                          </Col>
                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item
                                name="rate_per_hour_ot"
                                label="อัตราต่อชั่วโมง"
                              >
                                <input
                                  className="from-input"
                                  id="ot_perday"
                                  ref={this.ot_perdayEl}
                                  placeholder="  "
                                ></input>
                                <label style={{ marginLeft: "20px" }}>
                                  บาท
                                </label>
                              </Form.Item>
                            </div>
                          </Col>
                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item
                                name="totalmoney_ot"
                                label="รวมเป็นเงิน"
                              >
                                {this.state.Total_Ot}
                                <label style={{ marginLeft: "20px" }}>
                                  บาท
                                </label>
                              </Form.Item>
                            </div>
                          </Col>
                        </Row>
                        <div
                          style={{
                            borderBottom: "solid 0.5px #D3D3D3",
                            margin: "40px 100px",
                            fontSize: "3ch",
                            fontWeight: "bold",
                          }}
                        >
                          รายการหักเงิน
                        </div>
                        <Row gutter={[16, 24]}>
                          <Col span={2} />
                          <Col className="gutter-row" span={7}></Col>

                          <Col className="gutter-row" span={7}></Col>

                          <Col className="gutter-row" span={7}></Col>

                          <Col span={2} />
                          <Col className="gutter-row" span={7}></Col>
                          <Col className="gutter-row" span={7}></Col>

                          <Col className="gutter-row" span={7}></Col>

                          <Col span={2} />
                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item
                                name="social_security"
                                label="ประกันสังคมเลขที่"
                              >
                                <input
                                  className="from-input"
                                  id="num_secur"
                                  ref={this.num_securEl}
                                  placeholder="  "
                                ></input>
                              </Form.Item>
                            </div>
                          </Col>
                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item
                                name="social_security_percent"
                                label="ร้อยละ"
                              >
                                <input
                                  className="from-input"
                                  id="secur_persen"
                                  ref={this.secur_persenEl}
                                  placeholder="  "
                                ></input>
                                <label style={{ marginLeft: "20px" }}>
                                  ของเงินเดือน
                                </label>
                              </Form.Item>
                            </div>
                          </Col>
                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item
                                name="totalmoney_social_security"
                                label="รวมเป็นเงิน"
                              >
                                  {this.state.Total_secur}
                                 <label style={{ marginLeft: "20px" }}>
                                  บาท
                                </label>
                              </Form.Item>
                            </div>
                          </Col>

                          <Col span={2} />
                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item name="tax" label="ภาษีเลขที่">
                                <input
                                  className="from-input"
                                  id="num_tax"
                                  ref={this.num_taxEl}
                                  placeholder="  "
                                ></input>
                              </Form.Item>
                            </div>
                          </Col>
                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item name="tex_percent" label="ร้อยละ">
                                <input
                                  className="from-input"
                                  id="tax_persen"
                                  ref={this.tax_persenEl}
                                  placeholder="  "
                                ></input>
                                <label style={{ marginLeft: "20px" }}>
                                  ของเงินเดือน
                                </label>
                              </Form.Item>
                            </div>
                          </Col>

                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item
                                name="totalmoney_tax"
                                label="รวมเป็นเงิน"
                              >
                                  {this.state.Total_tax}
                                 <label style={{ marginLeft: "20px" }}>
                                  บาท
                                </label>
                              </Form.Item>
                            </div>
                          </Col>
                        </Row>

                        <div style={{ textAlign: "center", marginTop: "50px" }}>
                          <Form.Item
                            style={{ textAlign: "center" }}
                            name="totalmoney_salary"
                          >
                            <label
                              style={{
                                marginRight: "20px",
                                fontSize: "3ch",
                                color: "black",
                              }}
                            >
                              รวมเงินเดือนสุทธิ
                            </label>
                            {this.state.Total}
                            <label
                              style={{
                                marginLeft: "20px",
                                fontSize: "3ch",
                                color: "black",
                              }}
                            >
                              บาท
                            </label>
                          </Form.Item>
                        </div>

                        <Row gutter={[16, 24]}>
                          <Col span={2} />
                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              
                            </div>
                          </Col>

                          <Col className="gutter-row" span={8}>
                            <div style={style}>
                              <Form.Item></Form.Item>
                            </div>
                          </Col>

                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item>
                                <Button
                                  style={{
                                    fontSize: "3.5ch",
                                    marginLeft: "10px",
                                  }}
                                  type="primary"
                                  htmlType="submit"
                                >
                                  บันทึก
                                </Button>
                                <Button
                                  style={{
                                    marginLeft: "10px",
                                    fontSize: "3.5ch",
                                  }}
                                  type="danger"
                                  htmlType="button"
                                  onClick={this.onReset}
                                >
                                  ยกเลิก
                                </Button>
                              </Form.Item>
                            </div>
                          </Col>
                        </Row>
                      </div>
 
                    </Form>
                  </div>
                  <button class="cal_officer_bot" type="submit">คำนวณ</button>
                </Content>
                
              </div>
              
            </Editmember>
          </Layout>
        </div>
      </form>
    );
  }
}

const Editmember = styled.div`
  .E-content {
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
  .E-header {
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
`;
