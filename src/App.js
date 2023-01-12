import React from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>

        <Route path="/" element={<Home></Home>} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />

      </Routes>

    </div>
  );
}

export default App;
