import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactsListItem.styled.js';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem key={id}>
      <ContactName>{name}:</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
