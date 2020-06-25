import React, { Component } from "react";
import AuthContext from "../context/auth-context";
import Modal from "../components/Modal/Modal";
import Backdrop from "../components/backdrop/backdrop/backdrop";
import "./Stock.css";

class StockPage extends Component {
  state = {
    creating: false,
  };
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.valueElRef = React.createRef();
    this.dateElRef = React.createRef();
  }

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  componentDidMount(){
    this.fetchEvents();
  }

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const value = +this.valueElRef.current.value;
    const date = this.dateElRef.current.value;

    if (value <= 0 || date.trim().length === 0) {
      return;
    }

    const stock = { value, date };
    console.log(stock);

    const requestBody = {
      query: `
        mutation {
          createStock(stockInput: {value:${value} , date: "${date}"}) {
            _id
            value
            date
            owner{
              _id
              Username
            }
          }
        }
        
        `,
    };

    const token = this.context.token;

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + token,
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

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };
  fetchEvents() {
    const requestBody = {
      query: `
      query {
        stocks {
          _id
          value
          date
          owner{
            _id
            Username
          }
        }
      }
      
      `,
    };

    const token = this.context.token;

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
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
  }
  render() {
    return (
      <React.Fragment>
        {this.state.creating && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add Event"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
          >
            <from>
              <div className="form-control">
                <label htmlFor="value">Value</label>
                <input type="text" id="value" ref={this.valueElRef} />
              </div>

              <div className="form-control">
                <label htmlFor="date">Date</label>
                <input
                  type="datetime-local"
                  id="date"
                  ref={this.dateElRef}
                ></input>
              </div>
            </from>
          </Modal>
        )}
        {this.context.token && (
          <div className="events-control">
            <p>Share your own Stock!</p>
            <button className="btn" onClick={this.startCreateEventHandler}>
              Create Event
            </button>
          </div>
        )}
        <ul className="events__list">
          <li className="events__list-item">Test</li>
          <li className="events__list-item">Test</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default StockPage;
