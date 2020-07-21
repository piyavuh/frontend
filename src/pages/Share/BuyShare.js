import React, { Component } from "react";
import Buyshare from "../../containers/Share/buyshare/Buyshare";
import Backmenubar from "../../containers/Share/buyshare/back-menu";
import styled from "styled-components";
import "./share.css";
import AuthContext from "../../context/auth-context";
import {
  Layout,
  Button,
  Row,
  Col,
  Input,
  Form,
  Select,
  DatePicker,
} from "antd";
const { Option } = Select;
const { Header, Content } = Layout;
const style = { padding: "0px 0px" };

class BuySharePage extends Component {
  state = {
    creating: false,
    newshares: [],
    sumnewshares: [],
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.First_nameEl = React.createRef();
    this.ValueshareEl = React.createRef();
    this.CountEl = React.createRef();
    this.DateDateshareEl = React.createRef();
  }

  submitHandler = (props) => {
    props.preventDefault();
    const First_name = this.First_nameEl.current.value;
    const Valueshare = +this.ValueshareEl.current.value;
    const Count = +this.CountEl.current.value;
    const Dateshare = this.DateDateshareEl.current.value;

    const requestBodyoneshare = {
      query: `
      
                query{
                    oneshare(Status:${false}){
                        _id
                        Value
                        Count
                        Num_start
                        Share_owner{
                          _id
                        }
                    }
                  }
           
          `,
    };
    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBodyoneshare),
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
        const requestupdateShare = {
          query: `
            
            mutation {
              updateShare( shareId: "${resData.data.oneshare._id}",shareInput: {Value: ${Valueshare}, Count: ${Count}, Num_start: ${resData.data.oneshare.Num_start}, Date: "${Dateshare}", Status:true, Share_owner: "${resData.data.oneshare.Share_owner._id}"}) {
                Status
              }
            }
                 
                `,
        };

        fetch("http://localhost:8000/graphql", {
          method: "POST",
          body: JSON.stringify(requestupdateShare),
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
          .then((resData) => {})
          .catch((err) => {
            console.log(err);
          });

        const newNumstart =
          resData.data.oneshare.Num_start + resData.data.oneshare.Count;

        let requestBodyfarm = {
          query: `
          query{
            oneuser_name(First_name:"${First_name}"){
              _id
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
            let requestBodyfarm = {
              query: `
                        mutation {
                            createShare(shareInput: {Value: ${Valueshare}, Count: ${Count}, Num_start: ${newNumstart}, Date: "${Dateshare}", Status:false, Share_owner: "${resData.data.oneuser_name._id}"}) {
                            Value
                            Count
                            Num_start
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
                const shares = resData.data.createShare;
                this.setState({ newshares: shares });
                const sumShare =
                  resData.data.createShare.Value * resData.data.createShare.Count;
                this.setState({ sumnewshares: sumShare });
    
                console.log(shares);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });

      
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
              <Backmenubar />
            </Header>
            <Buysharesty>
              <div className="E-header " style={{ marginTop: "40px" }}>
                <c>กรอกข้อมูลการซื้อหุ้น</c>
              </div>

              <div className="E-content">
                <div
                  style={{
                    margin: "40px 60px",
                    borderStyle: "groove",
                    borderRadius: "0.5em",
                    borderWidth: "5px",
                  }}
                >
                  <Row
                    gutter={[16, 24]}
                    style={{ padding: "5px 20px", marginTop: "20px" }}
                  >
                    <Col className="gutter-row" span={6}>
                      <div style={style}>
                        <Form.Item name="member_code" label="รหัสสมาชิก">
                          <Input
                            placeholder="กรุณากรอกรหัสสมาชิก"
                            style={{ width: "auto" }}
                          />
                        </Form.Item>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <div style={style}>
                        <Form.Item name="prefix" label="คำนำหน้า">
                          <Select
                            style={{ fontSize: "3ch", width: "auto" }}
                            placeholder="กรุณาเลือกคำนำหน้า"
                            allowClear
                          >
                            <Option
                              style={{ fontSize: "3ch", width: "auto" }}
                              value="Mr."
                            >
                              นาย
                            </Option>
                            <Option
                              style={{ fontSize: "3ch", width: "auto" }}
                              value="Mrs."
                            >
                              นาง
                            </Option>
                            <Option
                              style={{ fontSize: "3ch", width: "auto" }}
                              value="Ms."
                            >
                              นางสาว
                            </Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <div style={style}>
                        <Form.Item name="name" label="ชื่อ">
                          <input
                            className="from-input"
                            id="First_name"
                            ref={this.First_nameEl}
                            placeholder="กรุณากรอกชื่อ"
                          ></input>
                        </Form.Item>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <div style={style}>
                        <Form.Item name="surname" label="นามสกุล">
                          <Input
                            placeholder="กรุณากรอกนามสกุล"
                            style={{ width: "auto" }}
                          />
                        </Form.Item>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <div style={style}>
                        <Form.Item name="group" label="กลุ่มที่">
                          <Input
                            placeholder="กรุณากรอกลุ่มของสมาชิก"
                            style={{ width: "auto" }}
                          />
                        </Form.Item>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <div style={style}>
                        <Form.Item name="village" label="บ้าน">
                          <Input
                            placeholder="กรุณากรอกบ้าน"
                            style={{ width: "auto" }}
                          />
                        </Form.Item>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <div className="form-control">
                        <label>Date</label>
                        <input
                          type="datetime-local"
                          id="Dateshare"
                          ref={this.DateDateshareEl}
                        />
                      </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <div style={style}></div>
                    </Col>
                  </Row>
                </div>

                <Content style={{ padding: "0 50px", margin: "30px 0" }}>
                  <div>
                    <Form
                      ref={this.formRef}
                      name="control-ref"
                      onFinish={this.onFinish}
                    >
                      <div className="modal-header">
                        <c>ซื้อหุ้นสหกรณ์ </c>
                      </div>
                      <div className="modal-content ">
                        <Row
                          gutter={[16, 24]}
                          style={{
                            marginTop: "20px",
                            marginBottom: "40px",
                            paddingBottom: "40px",
                          }}
                        >
                          <Col span={2} />

                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item name="per_share_buy" label="หุ้นละ">
                                <input
                                  className="from-input"
                                  id="Valueshare"
                                  ref={this.ValueshareEl}
                                  placeholder=""
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
                                name="number_share_buy"
                                label="จำนวนหุ้น"
                              >
                                <input
                                  className="from-input"
                                  id="Count"
                                  ref={this.CountEl}
                                  placeholder=""
                                ></input>
                                <label style={{ marginLeft: "20px" }}>
                                  หุ้น
                                </label>
                              </Form.Item>
                            </div>
                          </Col>

                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item
                                name="totalmoney_share_buy"
                                label="รวมเป็นเงิน "
                              >
                                {this.state.sumnewshares}

                                <label style={{ marginLeft: "20px" }}>
                                  บาท
                                </label>
                              </Form.Item>
                            </div>
                          </Col>
                          <Col span={2} />
                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item name="no_share_buy" label="หุ้นลขที่ ">
                                {this.state.newshares.Num_start}
                              </Form.Item>
                            </div>
                          </Col>
                          <Col className="gutter-row" span={7}>
                            <div style={style}>
                              <Form.Item
                                name="to_no_share_buy"
                                label="ถึงหุ้นลขที่ "
                              >
                                {this.state.newshares.Num_start +
                                  this.state.newshares.Count -
                                  1}
                              </Form.Item>
                            </div>
                          </Col>
                        </Row>
                      </div>

                      <div
                        style={{ paddingBottom: "20px", textAlign: "center" }}
                      ></div>
                    </Form>
                  </div>
                  <button class="centle" type="submit">
                    Submit
                  </button>
                </Content>
              </div>
            </Buysharesty>
          </Layout>
        </div>
      </form>
    );
  }
}
export default BuySharePage;
const Buysharesty = styled.div`
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
