import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionAddColor, actionAddData } from '../redux/actions';
import Input from './Input/Input';

class InputData extends Component {
  constructor() {
    super();
    this.state = {
      dataName: '',
      qty: 0,
      color: '',
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.insertData = this.insertData.bind(this);
  }

  handlerChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  insertData() {
    const { addData, addColor } = this.props;
    const { dataName, qty, color } = this.state;
    addData({ [dataName]: qty });
    addColor(color);
    this.setState({ dataName: '', qty: 0, color: '' });
  }

  render() {
    const { dataName, qty, color } = this.state;
    return (
      <fieldset>
        <legend>Inserir Dados</legend>
        <Input type="text" name="dataName" labelText="Nome:" value={dataName} change={this.handlerChange} />
        <Input type="number" name="qty" labelText="Quantidade:" value={qty} change={this.handlerChange} />
        <Input type="color" name="color" value={color} labelText="Cor:" change={this.handlerChange} />
        <button type="button" onClick={this.insertData}>Inserir Dado</button>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addData: (state) => dispatch(actionAddData(state)),
  addColor: (state) => dispatch(actionAddColor(state)),
});

export default connect(null, mapDispatchToProps)(InputData);
