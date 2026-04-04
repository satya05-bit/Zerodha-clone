import {Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

const Apps = () => {
  return (
    
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
  
  )
};

export default Apps;