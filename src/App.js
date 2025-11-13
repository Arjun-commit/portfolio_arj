import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
