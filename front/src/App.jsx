import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewWorkout from "./components/pages/NewWorkout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/new-workout" element={<NewWorkout />} />
      </Routes>
    </Router>
  );
};

export default App;
