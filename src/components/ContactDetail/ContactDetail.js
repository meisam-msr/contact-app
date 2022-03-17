import { Link, useLocation } from "react-router-dom";

const ContactDetail = () => {
  const location = useLocation();
  const { contact } = location.state;

  return (
    <div>
      <p>user name is : {contact.name}</p>
      <p>user email is : {contact.email}</p>
      <Link to="/" >go to contact List</Link>
    </div>
  );
};

export default ContactDetail;
