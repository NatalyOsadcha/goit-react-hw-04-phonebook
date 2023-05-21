import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsItem.module.css';
import TextField from '@mui/material/TextField';

const ContactsItem = ({ contact, onDeleteContact, editContact }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleEdit = () => {
    setIsEdit(prevState => !prevState);
    if (isEdit) {
      editContact({ name, number, id:contact.id });
    }
  };

  return (
    <li className={css.contactsItem}>
      {isEdit ? (
        <>
          <TextField
            id="standard-basic"
            label="name"
            variant="standard"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="number"
            variant="standard"
            name="name"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </>
      ) : (
        <>
          <span>{name}</span> : <span>{number}</span>
        </>
      )}

      <button type="button" className={css.contactsBtn} onClick={handleEdit}>
        {isEdit ? 'Save' : 'Edit'}
      </button>
      <button
        type="button"
        className={css.contactsBtn}
        onClick={() => onDeleteContact(contact.id)}
      >
        Detele
      </button>
    </li>
  );
};

ContactsItem.protoTypes = {
  contact: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
