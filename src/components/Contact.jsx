import React from 'react'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import styles from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email:"",
    message:"",
  });
  const formRef = useRef();
  const[loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ... form, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_gmroj5r',
      'template_nyzl7uh',{
        from_name: form.name,
        to_name: "Harman Singh",
        from_email: form.email,
        to_email:'harmanmalht777@gmail.com',
        message: form.message,
      },
      'xvUuFiSRSxq5WwKeP' )
      .then(() => {
        setLoading(false);
        alert('Thank You! I will get back to you as soon as possible.');
        setForm({
          name: '',
          email:'',
          message:'',
        })
      }, (error) => {
          setLoading(false);
          console.log(error.message);
          alert('Something went wrong!');
      })
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden mx-[60px]' id="Contact">
      <motion.div
      variants={slideIn('left','tween',0.2,1)}
      className='flex-[0.75] bg-black/25 p-8 rounded-2xl min-w-[300px]'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-secondary-white text-[15px] mb-4'>Your Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name" className='py-4 px-6  bg-black-200/50 placeholder:text-secondary text-white rounded-lg outline-none border-none text-[15px]'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-secondary-white text-[15px] mb-4'>Your Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="What's your email" className='py-4 px-6  bg-black-200/50 placeholder:text-secondary text-white rounded-lg outline-none border-none text-[15px]'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-secondary-white text-[15px] mb-4'>Your Message</span>
            <textarea rows="7" name='message' value={form.message} onChange={handleChange} placeholder="What's your message" className='py-4 px-6  bg-black-200/50 placeholder:text-secondary text-white rounded-lg outline-none border-none text-[15px]'/>
          </label>

          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold text-[16px] shadow-md shadow-primary rounded-xl'>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
       variants={slideIn('right','tween',0.2,1)}
       className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default Contact