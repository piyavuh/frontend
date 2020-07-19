import React, { Component } from "react";
import { Layout } from "antd";
import { Table, Button, Menu } from "antd";
import AuthContext from "../../context/auth-context";
import UserList from "../../components/Users/UserList/UserList";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableEditMember from "../../containers/Member/Edit/Table_EditMember";
import Backedit from "../../containers/Member/Edit/back-edit";
import "./EditMember.css";
const { Header, Content } = Layout;

class EditMember extends Component {
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
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    const requestBody = {
      query: `
              query {
                users {
                  _id
                  First_name
                  Last_name
                  ID_card
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
        const users = resData.data.users;
        this.setState({ users: users });
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const columns = [
      {
        title: "ลำดับที่",
        dataIndex: "number",
        key: "number",

        className: "table_style",
        width: 150,
      },
      {
        title: "รหัสสมาชิก",
        dataIndex: "_id",
        className: "_id",

        width: 150,
      },
      {
        title: "ชื่อ",
        dataIndex: "First_name",
        key: "First_name",
        className: "table_style",

        width: 150,
      },
      {
        title: "นามสกุล",
        dataIndex: "Last_name",
        key: "Last_name",
        className: "table_style",
        width: 150,
      },
      {
        title: "เลขประจำตัวประชาชน",
        dataIndex: "ID_card",
        key: "ID_card",
        className: "table_style",
        width: 150,
      },
      {
        title: "เพิ่มเติม",
        key: "operation",
        fixed: "right",
        width: 100,
        className: "table_style",
        render: () => <a>เพิ่มเติม</a>,
      },
    ];

    return (
      <React.Fragment>
        <div>
          <Layout>
            <Header style={{ backgroundColor: "#F0F2F5", marginTop: "50px" }}>
              <Backedit />
            </Header>

            <div className="E-header " style={{ marginTop: "40px" }}>
              <c>ตรวจสอบ-แก้ไขข้อมูลสมาชิก</c>
            </div>
            <div className="E-content_useritem">
              <Content>
                <div style={{ margin: "30px 60px" }}>
                  <Table
                    columns={columns}
                    dataSource={this.state.users}
                    scroll={{ x: 1500, y: 300 }}
                  />
                </div>
              </Content>
            </div>
          </Layout>
        </div>
      </React.Fragment>
    );
  }
}
export default EditMember;
