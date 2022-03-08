import "./index.css";
import { Home, ExampleOtherPage } from "./pages";
import { Nav } from "./core";
import { ThemeProvider } from "./Theme";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Router basename={process.env.REACT_APP_BASENAME}>
        <Nav />
        <Routes>
          <Route path="/ExampleOtherPage" element={<ExampleOtherPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
