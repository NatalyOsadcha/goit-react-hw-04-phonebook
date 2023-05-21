import React from 'react';
import css from './Contacts.module.css';
import ContactsItem from './ContactsItem';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onDeleteContact, editContact}) => (
  <ul className={css.contactsList}>
    {contacts.map(contact => (
      <ContactsItem
        key={contact.id}
        contact={contact}
        onDeleteContact={onDeleteContact}
        editContact={editContact}
      />
    ))}
  </ul>
);

Contacts.protoTypes = {
  editContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      contact: PropTypes.object.isRequired,
    }).isRequired
  ).isRequired,
};

export default Contacts;
