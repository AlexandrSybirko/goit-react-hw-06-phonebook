import { useState } from 'react';
import s from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/actions';
import { getContacts } from '../../redux/selectors';


export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
     if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      reset();
      return;
    }
    dispatch(contactsActions.addContact(name, number));
    reset();
  }  
  
  const reset = () => {
    setName('');
    setNumber('');
  } 

  
    return (
      <form
      className={s.form}
        onSubmit={handleSubmit}>
        <label
          className={s.label}>
          Name
          <input 
            className ={s.input}
            type="text"
            name="name"
            value={name}
             placeholder="Go IT"
            onChange={handleChange}
            
          />
        </label>
        <label
            className={s.label}     
          >
          Number
          <input
            className ={s.input}
            type="text"
            name="number"
            value={number}
             placeholder="000-000-000"
            onChange={handleChange}
            
          />
        </label>

        <button
          className={s.button}
          type="submit">
          Add contact
        </button>
      </form>
    )
  }


