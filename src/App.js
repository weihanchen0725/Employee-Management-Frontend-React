import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "https://weihanchen0725.github.io/Employee-Management-Frontend-React/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "https://weihanchen0725.github.io/Employee-Management-Frontend-React/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "https://weihanchen0725.github.io/Employee-Management-Frontend-React/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "https://weihanchen0725.github.io/Employee-Management-Frontend-React/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
