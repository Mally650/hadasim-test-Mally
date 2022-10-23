import React , { useState, useEffect } from "react";
import {  Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MorbidityGraph from './MorbidityGraph';


export default function Patients({chosed}) {
    const [ patients,  setpatients]= useState([]);
    const [ unvaccineted,  setunvaccineted]= useState(0);
    const [ possitives,  setpossitives]= useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3003/api/patient/details`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                setpatients(data);
            })
            .catch((err) => {
                alert('failed to connect to the server '+err)
            })
            fetch(`http://localhost:3003/api/patient/notvaccined`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                setunvaccineted(data[0].cnt);
            })
            .catch((err) => {
                alert('failed to connect to the server '+err)
            })
            fetch(`http://localhost:3003/api/patient/possitive/${new Date().getMonth()}`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setpossitives(data);
            })
            .catch((err) => {
                alert('failed to connect to the server '+err)
            })
    }, [])
    const deleteP=(id)=>{
        fetch(`http://localhost:3003/api/patient/delete/${id}`, { method: "DELETE" })
        .then(response => response.json())
        .then(data => {
            setpatients(data);
        })
        .catch((err) => {
            alert('failed to connect to the server '+ err)
        })
    }
    
    return <div>
        <h2>HMO- covid19 system</h2>
        <table>
            <tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Number</th><th>City</th> <th>Date of birth</th><th>CellPhone</th><th>Phone</th></tr>
            {patients.map(p=> <tr key={p.p_code}>
            <Link to='/patient' onClick={()=>{chosed(p.p_id)}} ><td>{p.p_id}</td></Link><td>{p.p_firstName}</td><td>{p.p_lastName} </td><td>{p.p_address}</td><td>{p.p_houseNum}</td><td>{p.p_city}</td> <td> 
            {p.p_birthDate} </td><td>{p.p_cellphone}</td><td>{p.p_phone}</td><td><button onClick={() => deleteP(p.p_id)}>Delete</button> 
            </td> <td><button onClick={() =>{chosed(p.p_id); navigate('/patient')}}>Details</button> 
            </td> </tr>)}
        </table> 
        <button onClick={() => navigate('/patient/details')}>Add patient</button>
        <br>
        </br>
        <div>
                    <h1> satistics</h1>
                    <h5> amount of unvaccinated patients: {unvaccineted}</h5>
                    {possitives.map(p=>  <h5> amount of possitive patients in  {p.m_dateOfPositiveTest} is {p.cnt}</h5>)}
        </div>
        {/* <MorbidityGraph></MorbidityGraph> i tried to show it in grap....*/}
    </div>
}