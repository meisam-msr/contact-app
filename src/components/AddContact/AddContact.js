import "./addContact.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import addOneContact from "../../services/addContactService";

const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });
  let navigate = useNavigate();

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("all fields is mandatory !");
      return;
    }
    e.preventDefault();

    try {
      await addOneContact(contact);
      setContact({ name: "", email: "" });
      navigate("/");
    } catch (error) {}
  };

  return (
    <form onSubmit={submitForm}>
      <div className="formControl">
        <label>name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className="formControl">
        <label>email</label>
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
