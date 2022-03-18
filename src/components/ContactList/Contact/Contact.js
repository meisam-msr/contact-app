import { Link } from "react-router-dom";
import userImage from "../../../assets/images/user.svg";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <div className="item">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img alt="user" src={userImage} />
        <Link to={`user/${id}`} state={{ contact: contact }}>
          <div className="link">
            <p>name : {name}</p>
            <p>email : {email}</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/edit/${id}`}>
          <button className="editBtn">Edit</button>
        </Link>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
