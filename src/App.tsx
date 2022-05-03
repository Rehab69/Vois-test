import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import DetailsCard from "./Components/DetailsPage/DetailsCard";
import MainPage from "./Components/MainPage/MainPage";

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/details" element={<DetailsCard />} />
        </Routes>
      </Fragment>
    </Router>

  );
}

export default App;
