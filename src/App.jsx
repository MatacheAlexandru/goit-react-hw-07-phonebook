import React, { useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchContacts,
  addContact,
  deleteContact,
  changeFilter,
} from "./redux/contactsSlice";
import styles from "./App.module.css";

const App = () => {
  const { items, isLoading, error } = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter); // Verifică dacă filter există
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = (filterValue) => {
    dispatch(changeFilter(filterValue));
  };

  const getFilteredContacts = () => {
    if (!items || items.length === 0 || !filter) {
      return items || [];
    }

    const normalizedFilter = filter.toLowerCase();
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactForm onAddContact={handleAddContact} />

      <h2 className={styles.title}>Contacts</h2>
      <Filter filter={filter || ""} onChangeFilter={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
