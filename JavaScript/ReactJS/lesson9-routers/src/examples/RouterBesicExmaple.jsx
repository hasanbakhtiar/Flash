import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
    </ul>
  );
};

const Home = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

const About = () => {
  return <h1>About</h1>;
};

const Contact = () => {
  return <h1>Contact</h1>;
};

const RouterBesicExmaple = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterBesicExmaple;
