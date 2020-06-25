import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import LoginPage from "./pages/Members/Login";
import RegisterPage from "./pages/Members/Register";
import SellingStockPage from "./pages/SellingStock";
import StockPage from "./pages/Stock";
import MainNavigation from "./components/Navigation/MainNavigation";

import Add_officerPage from "./pages/Officer/AddOfficer";

import AuthContext from "./context/auth-context";

import "./App.css";

class App extends Component {
  state = {
    token: null,
    userId: null,
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };
  login_off = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };
  logout = () => {
    this.setState({ token: null, userId: null });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              login_off: this.login_off,
              logout: this.logout,
            }}
          >
            <MainNavigation />
            <main className="main-content">
              <Switch>
                {this.state.token && <Redirect from="/" to="/stocks" exact />}
                {this.state.token && (
                  <Redirect from="/login" to="/stocks" exact />
                )}
                {!this.state.token && (
                  <Route path="/login" component={LoginPage} />
                )}
                <Route path="/register" component={RegisterPage} />
                <Route path="/stocks" component={StockPage} />
                <Route path="/add_officer" component={Add_officerPage} />
                {this.state.token && (
                  <Route path="/sellingStocks" component={SellingStockPage} />
                )}
                {!this.state.token && <Redirect to="/login" exact />}
              </Switch>
            </main>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
