// import React from 'react';
import { useState, useEffect } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from '../components/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, deleteContact, filtered } from 'redux/contacts/slice';

export default function App() {
  const { contacts, filter } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    if (contacts.some(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContacts(newContact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = event => {
    dispatch(filtered(event.target.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.page}>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm contacts={contacts} onAddContact={handleAddContact} />
      </div>
      <div>
        <h2 className={css.title}>Contacts</h2>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
}
