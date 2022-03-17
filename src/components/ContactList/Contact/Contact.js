import { Link } from "react-router-dom";
import userImage from "../../../assets/images/user.svg";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <div className="item">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img alt="user" src={userImage} />
        <Link to={`user/${id}`}>
          <div>
            <p>name : {name}</p>
            <p>email : {email}</p>
          </div>
        </Link>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
