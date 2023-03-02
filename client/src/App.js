import './App.css';
import React from 'react';

// compoenents are imported
import AddUser from './components/AddUser';
import Navbar from './components/Navbar';
import AllUsers from './components/AllUsers';
import AryanG from './components/AryanG';
import EditUser from './components/EditUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
//     all components are given their paths with the component being attached
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AryanG />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
