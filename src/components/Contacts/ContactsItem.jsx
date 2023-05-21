import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsItem.module.css';
import TextField from '@mui/material/TextField';

const ContactsItem = ({ id, name, number, onDeleteContact, editContact }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setName] = useState(name);
  const [editNumber, setNumber] = useState(number);

  const handleEdit = () => {
    setIsEdit(prevState => !prevState);
    if (isEdit) {
      editContact({ editName, editNumber, id });
    }
  };

  return (
    <li key={id} className={css.contactsItem}>
      {isEdit ? (
        <>
          <TextField
            id="standard-basic"
            label="name"
            variant="standard"
            name="name"
            value={editName}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="number"
            variant="standard"
            name="name"
            value={editNumber}
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
        onClick={() => onDeleteContact(id)}
      >
        Detele
      </button>
    </li>
  );
};

ContactsItem.protoTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
