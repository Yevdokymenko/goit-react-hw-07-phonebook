import React from 'react';
import { AddingContactsForm } from '../AddingContactsForm/AddingContactsForm';
import { SearchingFilter } from '../SearchingFilter/SearchingFilter';
import { ContactsList } from '../ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { PhonebookTitle, ContactsTitle } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { selectError, selectIsLoadiang } from '../../redux/contactsSlice';
import { fetchContacts } from '../../redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadiang);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <AddingContactsForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <SearchingFilter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </>
  );
};
