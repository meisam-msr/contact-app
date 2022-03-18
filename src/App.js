import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import ContactList from "./components/ContactList/ContactList";
import addOneContact from "./services/addContactService";
import deleteOneContact from "./services/deleteContactService";
import getContacts from "./services/getContactsService";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {
    try {
      const { data } = await addOneContact(contact);
      setContacts([...contacts, data]);
    } catch (error) {}
  };

  const deleteContactHandler = async (id) => {
    try {
      await deleteOneContact(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {}
  };

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  return (
    <main className="App">
      <h1>Contact App</h1>
      <Routes>
        <Route
          path="add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route
          path="/"
          element={
            <ContactList contacts={contacts} onDelete={deleteContactHandler} />
          }
        />
        <Route path="user/:id" element={<ContactDetail />} />
      </Routes>
      {/* <AddContact addContactHandler={addContactHandler} /> */}
      {/* <ContactList contacts={contacts} onDelete={deleteContactHandler} /> */}
    </main>
  );
}

export default App;
