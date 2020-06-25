import React, { Component } from "react";

import "./Login.css";

class AddPage extends Component {
  constructor(props) {
    super(props);
    this.idEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  submitHandler = (event) => {
    event.preventDefault();
    const id = this.idEl.current.value;
    const password = this.passwordEl.current.value;

    if (id.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
      mutation {
        createUser(userInput: {id: "${id}", password: "${password}"}) {
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
      <form className="auth-form" onSubmit={this.submitHandler}>
        <div className="form-control">
          <label htmlFor="id">E-Mail</label>
          <input type="id" id="id" ref={this.idEl} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={this.passwordEl} />
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>

        </div>
      </form>
    );
  }
}

export default AddPage;
