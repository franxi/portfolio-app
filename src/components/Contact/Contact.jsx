import { contactData } from "../../data/contactData";
import "./Contact.css";

import { ThemeContext } from "../../context/ThemeContextProvider";
import { useContext } from "react";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="contact"
      id="contacto"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="contact--container">
        <h1 style={{ color: theme.primary }}>Contacts</h1>
           <div className='contact-body'>
        <p>{contactData.email}</p>
        <p>{contactData.phone}</p>
        <p>{contactData.address}</p>
      </div>
      </div>
    </div>
  );
};

export default Contact;
