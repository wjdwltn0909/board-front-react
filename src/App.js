import './App.css';
import React from "react";
import ShowOne from "./board/ShowOne";
import {Route, Routes} from "react-router-dom";
import ShowList from "./board/ShowList";

function App() {
  return (
    <div >
      <Routes>
        <Route path={"/board/showOne/:id"} element={<ShowOne/>} />;
        <Route path={"/board/showList/:pageNo"} element={<ShowList/>} />;

      </Routes>
    </div>
  );
}

export default App;
