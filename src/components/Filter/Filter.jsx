import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filtered } from 'redux/contacts/filterSlice';
import { getFilter } from 'redux/contacts/getState';

export default function Filter() {
  const { filterValue } = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(filtered(event.target.value));
  };

  return (
    <label className={css.search}>
      <span className={css.searchName}>Find contacts by name</span>
      <input
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    </label>
  );
}

// Filter.propTypes = {
//   filterValue: PropTypes.string.isRequired,
//   handleFilterChange: PropTypes.func.isRequired,
// };
