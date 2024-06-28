import { useState } from 'react';
import emailjs from "@emailjs/browser"
import styles from './ContactStyles.module.css';

function Contact() {
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     message: "",
   });

   const [submitted, setSubmitted] = useState(false);

   const handleChange = (event) => {
     const { name, value } = event.target;
     setFormData({
      ...formData,
      [name]: value,
     });
   };

   const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submit formData=", formData);

    emailjs
    .send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_API_KEY
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitted(true);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );


   };
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      {submitted && <div>Thank you for your message!</div>}
      <form action="" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
            ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
