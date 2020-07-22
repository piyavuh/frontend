import React, { Component } from "react";

import "../Members/Login.css";
import AuthContext from "../../context/auth-context";

class AuthPage extends Component {
  state = {
    isMember: true
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.UsernameEl = React.createRef();
    this.PasswordEl = React.createRef();
  }
  
  switchModeHandler = () => {
    this.setState(prevState => {
      return { isMember: !prevState.isMember };
    });
  };

  submitHandler = event => {
    event.preventDefault();
    const Username = this.UsernameEl.current.value;
    const Password = this.PasswordEl.current.value;
   
   

    if (Username.trim().length === 0 || Password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
        query {
          login( Username: "${Username}", Password: "${Password}") {
            userId
            token
            tokenExpiration
          }
        }
        
      `,
    };

    if (!this.state.isMember) {
      requestBody = {
        query: `
        query {
          login_off( username_office: "${Username}", password_office: "${Password}"){
            userId
            token
            positionId
            tokenExpiration
          }
        }
        `
      };
    }

    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status !== 200 && res.status !== 201) {
        
        throw new Error('Failed!');
      }
      return res.json();
    })
    .then(resData => {
      if (this.state.isMember) {
        if (resData.data.login.token) {
          this.context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration
          );
        }
      }
      
      else if (!this.state.isMember) { 
        if(resData.data.login_off.token) {
          this.context.login_off(
            resData.data.login_off.token,
            resData.data.login_off.userId,
            resData.data.login_off.positionId,
            resData.data.login_off.tokenExpiration
          );
        }
      }
      
    })
      .catch((err) => {
        console.log(err);
      });
};
  render() {
    return (
      <form className="auth-form" onSubmit={this.submitHandler}>
        <div className="form-control">
          <label htmlFor="Username">Username</label>
          <input type="Username" id="Username" ref={this.UsernameEl} />
        </div>
        <div className="form-control">
          <label htmlFor="Password">Password</label>
          <input type="Password" id="Password" ref={this.PasswordEl} />
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button" onClick={this.switchModeHandler}>
            Switch to {this.state.isMember ? 'Officer' : 'Member'}
          </button>
        </div>
      </form>
    );
  }
}

export default AuthPage;
