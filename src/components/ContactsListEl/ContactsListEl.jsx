import PropTypes from 'prop-types';

export const ContactsListEl = ({ contacts, ChangeId }) => {
  return contacts.map(human => {
    return (
      <li key={human.id}>
        <p>
          {human.name}: {human.number}
        </p>
        <button onClick={() => ChangeId(human.id)}>Delete</button>
      </li>
    );
  });
};

ContactsListEl.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({})),
};
