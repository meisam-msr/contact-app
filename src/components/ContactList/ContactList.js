import "./contactList.css";
import userImage from "../../assets/images/user.svg";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className="contactList">
      <div>
        <h2>Contacts</h2>
        <Link to="/add">
          <button>Add</button>
        </Link>
      </div>
      {contacts.map((contact) => {
        const { name, email, id } = contact;
        return (
          <div key={id} className="item">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img alt="user" src={userImage} />
              <div>
                <p>name : {name}</p>
                <p>email : {email}</p>
              </div>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
          </div>
        );
      })}
    </section>
  );
};

export default ContactList;
