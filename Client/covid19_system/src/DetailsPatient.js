import React , { useState, useEffect } from "react";
import {  Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {  useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    id:yup.string().required(),
    firstName:  yup.string().required(),
    lastName:  yup.string().required(),
    address:  yup.string().required(),
    city:  yup.string().required(),
    houseNum:  yup.number().required(),
    phone:  yup.string(),
    cellphone:  yup.string().required(),
    birthDate:yup.string().required()
  }).required();

export default function DetailsPatient({id,type,chosed}) {
    const { register, handleSubmit, setValue , formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const [ patient,  setpatient]= useState({});
    const navigate = useNavigate();
    useEffect(() => {
        if(type=='1')
        fetch(`http://localhost:3003/api/patient/details/${id}`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                setpatient(data[0]);
                setValue('firstName',data[0].p_firstName)
                setValue('lastName',data[0].p_lastName)
                setValue('city',data[0].p_city)
                setValue('address',data[0].p_address)
                setValue('houseNum',data[0].p_houseNum)
                setValue('birthDate',data[0].p_birthDate.substring(0,10))
                setValue('phone',data[0].p_phone)
                setValue('cellphone',data[0].p_cellphone)
                setValue('id',id)
            })
            .catch((err) => {
                alert('failed to connect to the server '+err)
            })
    }, [])
    const deleteP=(id)=>{
        fetch(`http://localhost:3003/api/patient/delete/${id}`, { method: "Delete" })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setpatient(data);
        })
        .catch((err) => {
            alert('failed to connect to the server '+ err)
        })
    }
    const onSubmit =  data => {
         if(type=='1'){
          console.log("on submit method update", type)
          console.log(data)
         fetch(`http://localhost:3003/api/patient/update`,{
            method: "PUT", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
              id:id,
                firstName: data.firstName,
               LastName:data.lastName
                , address:data.address
                , city:data.city
                ,houseNum:data.houseNum
                ,birthDate:data.birthDate.substring(0,10)
                ,phone:data.phone
                ,cellphone:data.cellphone
            })})
            .then(response => response.json())
          .then(data => {
            alert("Hello" + data);
             navigate('/patient')
          })
          .catch((err) => {
            alert('failed to connect to the server '+ err)
          })}
          else{
            console.log("on submit method post",type)
            console.log(data)
            fetch(`http://localhost:3003/api/patient/add`,{
               method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                 id:data.id,
                   firstName: data.firstName,
                  LastName:data.lastName
                   , address:data.address
                   , city:data.city
                   ,houseNum:data.houseNum
                   ,birthDate:data.birthDate
                   ,phone:data.phone
                   ,cellphone:data.cellphone
               })})
               .then(response => response.json())
             .then(datay => {
               alert("Hello" + datay);
               chosed(data.id)
                navigate('/patient')
             })
             .catch((err) => {
               alert('failed to connect to the server '+ err)
             })
          }
      };
    const onsubmit =(data)=> {
             console.lod("on submit method")
             console.log(data)
    }
    return <div>
       {(type=='1') ?<h3> Updtae your details</h3>:<h3>Welcome new!</h3>}
      <form onSubmit={handleSubmit(onSubmit)}>
         {(type=='1') ?<input id="inputEnter"   value={id} />:<input id="inputEnter" {...register("id")} placeholder='id'/>}
          <p>{errors.id?.message}</p>
          <input id="inputEnter" {...register("firstName")} placeholder='firstName' />
          <p>{errors.firstName?.message}</p>
          <input id="inputEnter" {...register("lastName")} placeholder='lastName' />
          <p>{errors.lastName?.message}</p>
          <input id="inputEnter" {...register("address")} placeholder='address' />
          <p>{errors.address?.message}</p>
          <input id="inputEnter" {...register("city")} placeholder='city' />
          <p>{errors.city?.message}</p>
          <input id="inputEnter"  type="number" {...register("houseNum")} placeholder='houseNum' />
          <p>{errors.houseNum?.message}</p>
          <input id="inputEnter" {...register("birthDate")} placeholder='birth Date' />
          <p>{errors.birthDate?.message}</p>
          <input id="inputEnter" {...register("phone")} placeholder='phone' />
          <p>{errors.phone?.message}</p>
          <input id="inputEnter" {...register("cellphone")} placeholder='cellphone'/>
          <p>{errors.cellphone?.message}</p>
          <input type="submit"  name={(type=='1')?"Update":"Add"}className="inputs" id="toSubmitEnter" />
        </form>
        {(type=='1')&&<button onClick={() =>{ navigate('/patient')}}>Back</button>}
        </div>
}