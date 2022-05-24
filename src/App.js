import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import ContactList from "./components/ContactList/ContactList";
import EditContact from "./components/EditContact/EditContact";

function App() {
  return (
    <main className="App">
      <header>
        <h1>Contact App</h1>
      </header>
      <Routes>
        <Route path="add" element={<AddContact />} />
        <Route path="/" element={<ContactList />} />
        <Route path="user/:id" element={<ContactDetail />} />
        <Route path="edit/:id" element={<EditContact />} />
      </Routes>
    </main>
  );
}

export default App;
