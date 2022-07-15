import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/NavBar/NavBar";
import CalculatorPage from "./components/pages/CalculatorPage/CalculatorPage";
import HomePage from "./components/pages/HomePage/HomePage";
import LearnMorePage from "./components/pages/LearnMorePage/LearnMorePage";
import ForgivenessPage from "./components/pages/ForgivenessPage/ForgivenessPage";
import { PATHS } from "./constants";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path={PATHS.BASE} element={<div>HERE</div>} />
        <Route path={PATHS.CALCULATOR} element={<CalculatorPage />} />
        <Route path={PATHS.HOME} element={<HomePage />} />
        <Route path={PATHS.LEARN_MORE} element={<LearnMorePage />} />
        <Route path={PATHS.FORGIVENESS} element={<ForgivenessPage />} />
      </Routes>
    </div>
  );
}

export default App;
