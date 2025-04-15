import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './Pages';
import Books from "./Pages/books";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";


function App() {
    return (
    <>
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="books" element={<Books/>}/>
          <Route path="Team" element={<Team/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="Register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
  </div>
    </>
  );
}

export default App;
