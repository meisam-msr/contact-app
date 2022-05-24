import { Link, useLocation } from "react-router-dom";
import "./contactDetail.css";

const ContactDetail = () => {
  const location = useLocation();
  const { contact } = location.state;

  return (
    <div className="contactDetail">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="contactIcon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <p>{contact.name}</p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="contactIcon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <p>{contact.email}</p>
      </div>
      <Link to="/">go to contact List</Link>
    </div>
  );
};

export default ContactDetail;
