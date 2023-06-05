import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { HiSearch } from 'react-icons/hi';
const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <HiSearch />
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Label>
  );
};
Filter.prototype = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Filter;
