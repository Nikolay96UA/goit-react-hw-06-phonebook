import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactSlice';
import { getContacts, getFilter } from 'redux/contacts/getState';

export default function ContactList() {
  const { contacts } = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contacts}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>
              <span className={css.accent}> Name:</span> {contact.name}
            </p>
            <p>
              {' '}
              <span className={css.accent}> Number:</span> {contact.number}
            </p>
            <button
              className={css.dltBtn}
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
