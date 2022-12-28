import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
const Root = () => {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/main" element={<Main />} />
        </Route>
        <Route path="/" element={<Navigate to="/main" />} />
      </Routes>
    </div>
  );
};

export default Root;
