
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';



export default function App()  {
  
  
    return (
      <>
      <Section title="Phonebook">
          <ContactForm />
      </Section>
      <Section title="Phonebook">
      <Filter />
          <ContactList />
          </Section>
      </>
    );
  }


