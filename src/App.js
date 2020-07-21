import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import LoginPage from "./pages/Members/Login";
import RegisterPage from "./pages/Members/Register";
import SellingStockPage from "./pages/SellingStock";
//import StockPage from "./pages/Stock";
import StockPage from "./pages/Share/dashbord";
import MainNavigation from "./components/Navigation/MainNavigation";

import Add_officerPage from "./pages/Officer/AddOfficer";
import Edit_officerPage from "./pages/Officer/EditOfficer";
import Cal_officerPage from "./pages/Officer/CalculateSalary";
import DividendandAvgReturnmoney from "./pages/Dividend-Avg_Return_Money/Dividend-Avg_Return_Money";

import EditMember from "./pages/Members/EditMember";
import AuthContext from "./context/auth-context";
import Buy_share from "./pages/Share/BuyShare";
import Sell_share from "./pages/Share/SellShare";

import Accrual from "./pages/Debt-Accrual/Accrual";
import Debt from "./pages/Debt-Accrual/Debt";
import Blacklist from "./pages/Debt-Accrual/BlackList";

import Receipt from "./pages/Finance/Receipt";
import Report from "./pages/Report/Report";
import Approve from "./pages/Approve/Approve";
import AccessHistory from "./pages/Access-History/AccessHistory";

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
                <Route path="/edit_officer" component={Edit_officerPage} />
                <Route path="/cal_officer" component={Cal_officerPage} />

                <Route path="/editMember" component={EditMember} />
                <Route path="/buy_share" component={Buy_share} />
                <Route path="/sell_share" component={Sell_share} />
                <Route
                  path="/dividendandAvgReturnmoney"
                  component={DividendandAvgReturnmoney}
                />

                <Route path="/accrual" component={Accrual} />
                <Route path="/debt" component={Debt} />
                <Route path="/blacklist" component={Blacklist} />
                <Route path="/report" component={Report} />
                <Route path="/receipt" component={Receipt} />
                <Route path="/approve" component={Approve} />
                <Route path="/access-history" component={AccessHistory} />
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
