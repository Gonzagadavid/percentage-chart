import React from 'react';
import { connect } from 'react-redux';
import { inputBar } from '../../data/inputs';
import { actionAddStyleBar } from '../../redux/actions';
import Input from '../Input/Input';
import './InputContainer.css';

const InputBar = ({ addStyleBar, state }) => {
  const handlerChange = ({ target }) => {
    const {
      name, value, checked, type,
    } = target;
    const checkbox = type === 'checkbox';
    const valueInput = checkbox ? checked : value;
    addStyleBar({ [name]: valueInput });
  };

  return (
    <div className="InputConatiner">
      <h3>Estilo das Barras</h3>
      {
         state.fontColordifBar
        && (
        <Input
          type="color"
          name="fontColor"
          labelText="Cor da fonte:"
          value={state.fontColor}
          change={handlerChange}
        />
        )
        }
      {
        inputBar.map(({ name, type, labelText }) => (
          <Input
            type={type}
            name={name}
            labelText={labelText}
            checked={state[name]}
            value={state[name]}
            change={handlerChange}
          />
        ))
        }

    </div>
  );
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  addStyleBar: (state) => dispatch(actionAddStyleBar(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBar);
