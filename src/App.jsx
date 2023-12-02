import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./routes/private";

import Login from "./pages/login";
import Register from "./pages/register"
import Main from "./pages/main";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/Portifolio-Cassio-Valezzi" element={
          <PrivateRoute>
            <Main />
          </PrivateRoute>} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>

  );
}

export default App;
