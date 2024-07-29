import './App.css';
import React from "react";
import ShowOne from "./board/ShowOne";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div >
      <Routes>
        <Route path={"/board/showOne/:id"} element={<ShowOne/>} />;
      </Routes>
    </div>
  );
}

export default App;
