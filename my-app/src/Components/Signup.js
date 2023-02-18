import React from 'react'
import { useFormik } from 'formik';

export const Signup = () => {

    const formik = useFormik({
        initialValues :{
            name : '',
            email : '',
            password : '',
        },
        onSubmit : (values)=>{
            console.log(values);
        }

    })
    
    

  return (
    <div>
        <h1>User Signup</h1>
        <form onSubmit={formik.handleSubmit}>
        <div>
           <label htmlFor='name'>Name : </label> 
           <input type="text" id = "name" onChange={formik.handlechange} value = {formik.values.name}></input>
        </div>
        <div>
            <br></br>
           <label htmlFor='email'>Email : </label> 
           <input type="text" id = "email" onChange={formik.handlechange} value = {formik.values.email}></input>
        </div>
        <div>
            <br></br>
           <label htmlFor='password'>Name : </label> 
           <input type="password" id = "password" onChange={formik.handlechange} value = {formik.values.password}></input>
        </div>
        <br></br>
        <button>Submit</button>
        </form>
    </div>
  )
}
