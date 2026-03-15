import React, { useRef, useState } from 'react';
import contact from '../assets/contact.svg';
import Contacts from './Contact.module.css';
import Button from './Button.jsx';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef(); 
  const [status, setStatus] = useState(''); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_voh5nnc',   
        'template_yqu4hzx',  
        form.current,
        'MF7eNmJ0boSO8ook5'    
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className={Contacts.wholes} id="contact">
      <div className={Contacts.contactimage}>
        <img src={contact} alt="Contact" />
      </div>

      <div className={Contacts.contactform}>
        <h2>Contact Me</h2>

  
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>

    
          <Button text={'Send Message'} radius={'8px'} width={'200px'}  align={'center'} />
        </form>

        {status && <p>{status}</p>}
      </div>
    </div>
  );
};

export default Contact;