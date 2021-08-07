import {
  bool,
  func, string, number, oneOfType,
} from 'prop-types';

import React from 'react';

const Input = (props) => {
  const {
    labelText, value, change, type, name, checked,
  } = props;

  return (
    <label htmlFor={name}>
      {type !== 'radio' ? labelText : ''}
      <input
        type={type}
        id={name}
        value={value}
        checked={checked}
        onChange={change}
        name={name}
      />
      {type === 'radio' ? labelText : ''}
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
