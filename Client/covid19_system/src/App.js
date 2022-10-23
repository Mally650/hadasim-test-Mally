import React, { useState }  from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Patients from './Patients';
import Patient from './Patient';
import DetailsPatient from './DetailsPatient';

function App() {
  const [p,setp]=useState('');
  const chosed=(id)=>{
    console.log(id)
    setp(id);
  }
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Patients chosed={(id)=>chosed(id)}/>} ></Route>
          <Route path='/patient' element={<Patient id={p} chosed={(id)=>chosed(id)}/>}></Route>
          <Route path='/patient/details' element={<DetailsPatient id={p} type={(p!='')?'1':'0'} chosed={(id)=>chosed(id)}/>}></Route>
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
    </div>
  );
}

export default App;
