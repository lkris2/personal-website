import React,{ useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../navigate/NavBar';
import "../style/Contact.css";
import {useState} from 'react';
const Contact = () => {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false);
    const [data,setData] = useState({name: "", email: "",phone:"",message:""});
    const handleChange=(e)=>
    {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(data);
        setSubmitted(true);
        emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',form.current,'YOUR_PUBLIC_KEY')
        .then((result)=>{
            console.log(result.text);
        }, (error)=>{
            console.log(error.text);
        });
        }

      
  

  return (
    <>
   
    <div className = 'nav-app'>
     <NavBar/>
    </div>
   <form method ='post' onSubmit={handleSubmit}>
    <h1>Contact me</h1>
    <input type="text" name = "name" id="" onChange={handleChange} value = {data.name} placeholder ="Enter Name"/>
    <input type ="email" name = "email" id="" onChange={handleChange} value = {data.email} placeholder='Enter Email'/>
    <input type ="phone" name = "phone" id="" onChange={handleChange} value={data.phone} placeholder='Enter mobile number'/>
    <textarea name ="message" id ="" cols ="30" onChange={handleChange} value = {data.message} rows ="10" placeholder='Message:'/>
    <button type ='submit'>Send</button>
    
   </form>
    </>

  );
};

export default Contact;