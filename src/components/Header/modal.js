import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Contact({open, handleOpen, handleClose, children}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validate the form data (you can add more validation as per your requirements)
      if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all the fields.');
        return;
      }

      const recipientEmail = 'dayush7777777@gmail.com'; // Replace with your own email address

    // Create the email body
    const emailBody = `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`;

    // Create the email payload
    const payload = {
      to: recipientEmail,
      subject: 'New message from your website',
      body: emailBody
    };

    fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(response => {
          if (response.ok) {
            setSubmitted(true);
          } else {
            throw new Error('Oops! Something went wrong. Please try again later.');
          }
        })
        .catch(error => {
          alert(error.message);
        });

    };

    if (submitted) {
      return (
        <div>
          <h1>Thank you for your message. We'll get back to you soon!</h1>
        </div>
      );
    }

  return (
    <div>
        {children}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div  className='contact-form'>
      <h1>Contact Us</h1>
      <div className='one'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        /><br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        /><br />
        </div>

        <label htmlFor="message">Message:</label><br />
        <textarea
          id="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows="5"
          required
        ></textarea><br />

<button type="submit" onClick={handleSubmit}>Submit</button>
     
    </div>
        
      </Modal>
    </div>
  );
}
