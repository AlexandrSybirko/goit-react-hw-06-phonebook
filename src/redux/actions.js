import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('phonebook/add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const deleteContact = createAction('phonebook/delete');
const changeFilter = createAction('phonebook/changeFilter');

const contactsActions = { addContact, deleteContact, changeFilter };
export default contactsActions;