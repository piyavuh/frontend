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
import calDividendandAvgReturnmoney from "./pages/Dividend-Avg_Return_Money/Dividend-Avg_Return_Money";
import DividendandAvgReturnmoney from "./pages/Dividend-Avg_Return_Money/calDividend-Avg_Return_Money";

import EditMember from "./pages/Members/EditMember";
import AuthContext from "./context/auth-context";
import Buy_share from "./pages/Share/BuyShare";
import Sell_share from "./pages/Share/SellShare";
import Info_share from "./pages/Share/InfoShare";

import Accrual from "./pages/Debt-Accrual/Accrual";
import Debt from "./pages/Debt-Accrual/Debt";
import Blacklist from "./pages/Debt-Accrual/BlackList";

import Receipt from "./pages/Finance/Receipt";
import Report from "./pages/Report/Report";
import Approve from "./pages/Approve/Approve";
import AccessHistory from "./pages/Access-History/AccessHistory";


import BuyCowCash from './pages/General-product/BuyCow/BuyCowCash';
import BuyCowCredit from './pages/General-product/BuyCow/BuyCowCredit';
import SellCowFatten from './pages/General-product/SellCow/SellCowFatten';
import SellCowSlice from './pages/General-product/SellCow/SellCowSlice';
import SemenCowRegistered from './pages/General-product/SemenCow/SemenCowRegistered';
import SemeCowCash from './pages/General-product/SemenCow/SemeCowCash';
import SemeCowCredit from './pages/General-product/SemenCow/SemeCowCredit';
import FoodCowRegistered from './pages/General-product/FoodCow/FoodCowRegistered';
import FoodCowCash from './pages/General-product/FoodCow/FoodCowCash';
import FoodCowCredit from './pages/General-product/FoodCow/FoodCowCredit';
import ImportMedicine from './pages/General-product/MedicineCow/ImportMedicine';
import MedicineCowRegistered from './pages/General-product/MedicineCow/Medicineregistered';
import MedicineCowCash from './pages/General-product/MedicineCow/MedicineCowCash';
import MedicineCowCredit from './pages/General-product/MedicineCow/MedicineCowCredit';
import Equipmentfarmregistered from './pages/General-product/Farm-equipment/equipmentregistered';
import Equipmentfarmcash from './pages/General-product/Farm-equipment/equipmentcash';
import Equipmentfarmcredit from './pages/General-product/Farm-equipment/equipmentcredit';




import "./App.css";



class App extends Component {
  state = {
    creating: false,
    token: null,
    userId: null,
    positionId:null,
    users: [],
  };
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
        console.log(resData.data.users);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }


  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };
  login_off = (token, userId,positionId, tokenExpiration) => {
    this.setState({ token: token, userId: userId ,positionId:positionId});
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
              positionId: this.state.positionId,
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
              
                <Route
                  path="/dividendandAvgReturnmoney"
                  component={DividendandAvgReturnmoney}
                />
                <Route
                  path="/caldividendandAvgReturnmoney"
                  component={calDividendandAvgReturnmoney}
                />


                <Route path="/editMember" component={EditMember} />
                <Route path="/buy_share" component={Buy_share} />
                <Route path="/sell_share" component={Sell_share} />
                <Route path="/info_share" component={Info_share} />
               
                

                <Route path="/accrual" component={Accrual} />
                <Route path="/debt" component={Debt} />
                <Route path="/blacklist" component={Blacklist} />
                <Route path="/report" component={Report} />
                <Route path="/receipt" component={Receipt} />
                <Route path="/approve" component={Approve} />
                <Route path="/access-history" component={AccessHistory} />

                <Route path = "/buycow-cash" component = {BuyCowCash}/>
                <Route path = "/buycow-credit" component = {BuyCowCredit}/>
                <Route path = "/sellcow-fatten" component = {SellCowFatten}/>
                <Route path = "/sellcow-slice" component = {SellCowSlice}/>
                <Route path = "/semencow-registered" component ={SemenCowRegistered}/>
                <Route path = "/semencow-cash" component = {SemeCowCash}/>
                <Route path = "/semencow-credit" component = {SemeCowCredit}/>
                <Route path = "/foodcow-registered" component = {FoodCowRegistered}/>
                <Route path = "/foodcow-cash" component = {FoodCowCash}/>
                <Route path = "/foodcow-credit" component = {FoodCowCredit}/>
                <Route path = "/medicinecow-import" component = {ImportMedicine}/>
                <Route path = "/medicinecow-registered" component = {MedicineCowRegistered}/>
                <Route path = "/medicinecow-cash" component = {MedicineCowCash}/>
                <Route path = "/medicinecow-credit" component = {MedicineCowCredit}/>
                <Route path = "/equipmentfarm-registered" component = {Equipmentfarmregistered}/>
                <Route path = "/equipmentfarm-cash" component = {Equipmentfarmcash}/>
                <Route path = "/equipmentfarm-credit" component = {Equipmentfarmcredit}/>
              
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
