import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axiosInstance from '../axiosinterceptor';
import Bar from './Bar';


const Home = () => {

   const[employee,SetEmployee]=useState([]);
   useEffect(()=>{
    axiosInstance.get('http://localhost:5000/employee/').then((res)=>{
      SetEmployee(res.data);
    })
   },[])


   //Delete Course
   let deleteEmployee=(p)=>{
    axiosInstance.delete('http://localhost:5000/employee/remove/'+p).then((res)=>{
      alert('deleted');
      window.location.reload();
    })
    .catch(()=>{console.log("error")})
   }

// Update course
   const navigate=useNavigate();
   let updateEmployee=(item)=>{
    navigate('/add',{state:{item}})//add is given so that the form is loaded
   }

   const user=localStorage.getItem("username")
  
  return (
    <div>
      <Bar/><br /><br /><br />
   <Typography gutterBottom variant='h5'>Welcome {user}</Typography>
   <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650,backgroundColor: '#F5EDED' }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold' }}>Employee ID</TableCell>
          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Employee Name</TableCell>
          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Department</TableCell>
          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Location</TableCell>
          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Designation</TableCell>
          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Salary</TableCell>
          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {employee.map((row) => (
          <TableRow
            key={row.employeeId}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.employeeId}
            </TableCell>
            <TableCell align="center">{row.employeeName}</TableCell>
            <TableCell align="center">{row.department}</TableCell>
            <TableCell align="center">{row.location}</TableCell>
            <TableCell align="center">{row.designation}</TableCell>
            <TableCell align="center">{row.salary}</TableCell>
            <TableCell> 
              <Button  sx={{backgroundColor:'red',color:'white'}} onClick={()=>deleteEmployee(row._id)}>Delete</Button>
              <Button sx={{backgroundColor:'green',color:'white'}} onClick={()=>updateEmployee(row)}>Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}

export default Home