import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/organisms/NavBar/NavBar';
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import CalculatorPage from './components/pages/CalculatorPage/CalculatorPage';
import HomePage from './components/pages/HomePage/HomePage';
import LearnMorePage from './components/pages/LearnMorePage/LearnMorePage';
import ForgivenessPage from './components/pages/ForgivenessPage/ForgivenessPage';
import { createBrowserHistory, History } from "history";

const defaultHistory= createBrowserHistory();

type AppProps = {
  history?: History;
}

function App({history = defaultHistory}: AppProps) {
  return (
    <Router history = {history}>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path="/calculator"> <CalculatorPage/> </Route>
          <Route path="/home" component={HomePage}/>
          <Route path="/learn" component={LearnMorePage}/>
          <Route path="/forgiveness" component={ForgivenessPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
