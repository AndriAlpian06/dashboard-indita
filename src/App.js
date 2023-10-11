import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Sign_in"; 
import Dashboards from './pages/Dashboards';

import Keywords from './pages/keywords/Keywords';
import AddKeywords from './pages/keywords/AddKeywords';

import Menus from './pages/menu/Menus'
import AddMenu from './pages/menu/AddMenu'
import EditMenu from './pages/menu/EditMenu'
import Menus2 from './pages/menu/Menus2'

import Kategori from './pages/kategori/Kategori'
import AddKategori from './pages/kategori/AddKategori';
import EditKategori from './pages/kategori/EditKategori';

import SubMenu from './pages/subMenu/SubMenu'
import AddSubMenu from './pages/subMenu/AddSubMenu'
import EditSubMenu from './pages/subMenu/EditSubMenu'
import AddMenu2 from './pages/menu/AddMenu2'

import Intent from './pages/intent/Intent'
import AddIntent from './pages/intent/AddIntent'
import AddIntent2 from './pages/intent/AddIntent2'

import Laporan from './pages/laporan/Laporan'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboards />} />
          <Route path='/menu' element={<Menus />} />
          <Route path="/menu2" element={<Menus2 />} />
          <Route path='/addMenu' element={<AddMenu />} />
          <Route path='/editMenu/:id' element={<EditMenu />} />
          <Route path='/keyword' element={<Keywords />} />
          <Route path='/addKeyword' element={<AddKeywords />} />
          <Route path='/kategori' element={<Kategori />} />
          <Route path='/addKategori' element={<AddKategori />} />
          <Route path='/editKategori/:id' element={<EditKategori />} />
          <Route path='/subMenu' element={<SubMenu />} />
          <Route path='/addSubMenu' element={<AddSubMenu />} />
          <Route path='/editSubMenu/:id' element={<EditSubMenu />} />
          <Route path='/addMenu2' element={<AddMenu2 />} />
          <Route path='/laporan' element={<Laporan />} />
          <Route path='/intent' element={<Intent />} />
          <Route path='/addIntent' element={<AddIntent />} />
          <Route path='/addIntent2' element={<AddIntent2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
