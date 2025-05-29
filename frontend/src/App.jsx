import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'; 

import HomePage from './pages/Home'; 
import ProductsPage from './pages/Product';
import ClientsPage from './pages/Clients';
import EmployeesPage from './pages/Employees';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/clientes" element={<ClientsPage />} />
        <Route path="/empleados" element={<EmployeesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
