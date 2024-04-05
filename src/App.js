import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import Fetch from './Pages/Fetch';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import User from './Pages/User';
import Contacts from './Pages/Contacts';
import Post from './Pages/Post.js';
import Output from './Pages/Output.js';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/user" element={<User />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/post" element={<Post />} />
        <Route path="/output" element={<Output />} />
      </Routes>
    </>
  )
}

export default App;
