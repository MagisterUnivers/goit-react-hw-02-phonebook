import { ContactsListEl } from 'components/ContactsListEl/ContactsListEl';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, ChangeId }) => {
  return (
    <ul>
      <ContactsListEl contacts={contacts} ChangeId={ChangeId} />
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({})),
};
