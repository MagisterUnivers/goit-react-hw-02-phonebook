export const Filter = props => {
  return (
    <label>
      <h2>Find Contacts by name</h2>
      <input name="filter" onChange={props.handleChange}></input>
    </label>
  );
};
