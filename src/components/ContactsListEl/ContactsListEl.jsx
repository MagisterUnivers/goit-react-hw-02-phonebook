import PropTypes from 'prop-types';

export const ContactsListEl = ({ contacts, changeId }) => {
  return contacts.map(human => {
    return (
      <li key={human.id}>
        <p>
          {human.name}: {human.number}
        </p>
        <button onClick={() => changeId(human.id)}>Delete</button>
      </li>
    );
  });
};

ContactsListEl.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
  ChangeId: PropTypes.func,
};
