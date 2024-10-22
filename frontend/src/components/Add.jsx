import { Button, MenuItem, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Bar from './Bar';

const Add = () => {
  
     const navigate=useNavigate();
      //array and function to submit data
      const[employee,setEmployee]=useState(
        {employeeId:'',
          employeeName:'',
          department:'',
          designation:'',
          location:'',
          salary:''})

      const fetchValue=(event)=>{
        setEmployee({...course,[event.target.name]: event.target.value});
      }
  



      const location=useLocation()
      const sendData=()=>{
      //console.log(course);
      if(location.state!=null){
        console.log("for updation")
        // item below is the object put under state in home.jsx; course is the object used to define/connect the coursefield details in the form
        axiosInstance.put('http://localhost:5000/employee/edit/'+location.state.item._id,course).then((res)=>{
        alert("Data updated");
        navigate('/home');
      }).catch((error)=>{
        console.log(error);
      })
     }
     else{
      console.log("inside post")
      axiosInstance.post('http://localhost:5000/employee/addcourse',employee).then((res)=>{
        navigate('/home');
      }).catch((error)=>{
        console.log(error)
      })
     }
    }
     useEffect(()=>{
      if(location.state!=null){
        setEmployee({...employee,
          employeeId:location.state.item.employeeId,
          employeeName:location.state.item.employeeName,
          department:location.state.item.department,
          designation:location.state.item.designation,
          location:location.state.item.location,
          salary:location.state.item.salary
        })
      }
     },[])
     return (
      <div>
        <Bar/>
        <br />
        <h2>New Employee</h2>
    <TextField 
    id="standard-basic" 
    label="Employee ID" 
    variant="standard" 
    name="empId" 
    value={employee.employeeId} 
    onChange={fetchValue} />     <br />
   
    <TextField id="standard-basic" label="Employee Name" variant="standard" name="empName"  
    value={employee.employeeName}  
    onChange={fetchValue}/><br />
    <TextField id="standard-basic" label="Department" variant="standard" name="department" 
    value={employee.department} 
    onChange={fetchValue} /><br />
    <TextField id="standard-basic" label="Location" variant="standard" name="location" 
    value={employee.location} 
    onChange={fetchValue} /><br /><br />
    <TextField id="standard-basic" label="Designation" variant="standard" name="designation" 
    value={employee.designation} 
    onChange={fetchValue} /><br /><br />
    <TextField id="standard-basic" label="Salary" variant="standard" name="salary" 
    value={employee.salary} 
    onChange={fetchValue} /><br /><br />
    <Button variant="contained" onClick={sendData}>Add Employee</Button>
    </div>
  )
}

export default Add