import PropTypes from 'prop-types';
import { Button, Li, Ul } from './ContactList.styled';
import { HiMinusCircle } from 'react-icons/hi';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <Ul>
      {contacts.map(({ id, name, number }) => (
        <Li key={id}>
          {name} : {number}
          <Button onClick={() => onDelete(id)} aria-label="Delete contact">
            <HiMinusCircle />
          </Button>
        </Li>
      ))}
    </Ul>
  );
};
ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
