import { func, string, arrayOf } from 'prop-types';
import React from 'react';
import './Select.css';

const Select = (props) => {
  const {
    labelText, value, change, name, options,
  } = props;

  return (
    <label htmlFor={name} className="Select">
      {labelText}
      <select
        id={name}
        value={value}
        onChange={change}
        name={name}
      >
        {
          options.map((option) => <option key={option}>{option}</option>)
        }
      </select>
    </label>
  );
};

Select.propTypes = {
  labelText: string.isRequired,
  value: string,
  change: func.isRequired,
  name: string.isRequired,
  options: arrayOf(string).isRequired,
};

Select.defaultProps = {
  value: 'Not found',
};

export default Select;
