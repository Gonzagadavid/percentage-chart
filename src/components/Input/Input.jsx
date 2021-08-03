import {
  bool,
  func, string, number, oneOfType,
} from 'prop-types';

import React from 'react';

const Input = (props) => {
  const {
    labelText, value, change, type, name,
  } = props;

  return (
    <label htmlFor={name}>
      {labelText}
      <input
        type={type}
        id={name}
        value={value}
        onChange={change}
        name={name}
      />
    </label>
  );
};

Input.propTypes = {
  labelText: string.isRequired,
  value: oneOfType([number, string, bool]),
  change: func.isRequired,
  type: string.isRequired,
  name: string.isRequired,
};

Input.defaultProps = {
  value: 'Not found',
};

export default Input;
