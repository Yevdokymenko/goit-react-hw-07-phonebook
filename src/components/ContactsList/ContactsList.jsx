import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contactsSlice';
import { selectFilter } from 'redux/filterSlice';
import { Contacts } from './ContactsList.styled';
import { ContactsItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Contacts>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactsItem key={id} name={name} number={number} id={id} />
      ))}
    </Contacts>
  );
};
