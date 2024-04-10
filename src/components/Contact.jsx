import React from 'react'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import styles from '../styles';
// import { EarthCanvas } from './canvas';
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
      'service_cpqnw8m',
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
    <section className='relative z-10'>
    <div className='2xl:mt-12 py-7 flex justify-center xl:flex-col-reverse 2xl:flex-row flex-col-reverse items-center gap-2 overflow-hidden w-screen' id="Contact">
      <motion.div
      variants={slideIn('left','tween',0.2,1)}
      className='bg-black/30 hover:bg-black/40 p-8 transition ease-linear hover:shadow-lg hover:shadow-cyan-500/50 hover:ring-emerald-200/60 hover:ring-2 rounded-2xl  2xl:w-[40%]'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-secondary-white text-[15px] mb-4'>Your Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name" className='py-4 px-6  bg-emerald-200/10 focus:bg-white/10 placeholder:text-secondary text-white rounded-lg outline-none border-none text-[15px]'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-secondary-white text-[15px] mb-4'>Your Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="What's your email" className='py-4 px-6  bg-emerald-200/10 focus:bg-white/10 placeholder:text-secondary text-white rounded-lg outline-none border-none text-[15px]'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-secondary-white text-[15px] mb-4'>Your Message</span>
            <textarea rows="7" name='message' value={form.message} onChange={handleChange} placeholder="What's your message" className='py-4 px-6  bg-emerald-200/10 focus:bg-white/10 placeholder:text-secondary text-white rounded-lg outline-none border-none text-[15px]'/>
          </label>

          <button type='submit' className='ring-1 ring-cyan-500/40 py-3 px-8 outline-none w-fit text-white font-bold text-[16px] shadow-md shadow-primary rounded-xl hover:bg-emerald-100 hover:bg-opacity-5 hover:shadow-md hover:shadow-cyan-500/50 hover:text-white/80 text-cyan-100/80 transition ease-in-out duration-200'>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
    </section>
  )
}

export default Contact