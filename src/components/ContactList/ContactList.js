import "./contactList.css";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import { useState, useEffect } from "react";
import getContacts from "../../services/getContactsService";
import deleteOneContact from "../../services/deleteContactService";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);
  const [allContacts, setAllContacts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
      setAllContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  const deleteContactHandler = async (id) => {
    try {
      await deleteOneContact(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {}
  };

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    const search = e.target.value;

    if (search !== "") {
      const filteredContacts = allContacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filteredContacts);
    } else {
      setContacts(allContacts);
    }
  };

  return (
    <section className="listWrapper">
      <div className="contactList">
        <div className="listHeader">
          <h2>Contacts</h2>
          <Link to="/add">
            <button>Add</button>
          </Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="search..."
            value={searchTerm}
            onChange={searchHandler}
          />
        </div>
        {contacts ? (
          contacts.map((contact) => {
            return (
              <Contact
                key={contact.id}
                contact={contact}
                onDelete={deleteContactHandler}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
