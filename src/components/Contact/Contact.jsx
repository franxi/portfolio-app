import {contactData} from '../../data/contactData'

const Contact = () => {
  return (  

    <div>
      <h1>Contaco</h1>
      <p>{contactData.email}</p>
      <p>{contactData.phone}</p>
      <p>{contactData.address}</p>
    </div>


  );
}

export default Contact ;