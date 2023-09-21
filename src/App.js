import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Sign_in"; 
import Dashboards from './pages/Dashboards';
import Kategori from './pages/Kategori';
import Intent from './pages/Intent';
import Keywords from './pages/keywords/Keywords';
import AddKeywords from './pages/keywords/AddKeywords';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboards />} />
          <Route path='/intent' element={<Intent />} />
          <Route path='/keyword' element={<Keywords />} />
          <Route path='/addKeyword' element={<AddKeywords />} />
          <Route path='/kategori' element={<Kategori />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
