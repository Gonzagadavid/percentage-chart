import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionAddStyleBar } from '../redux/actions';
import Input from './Input/Input';

class InputBar extends Component {
  constructor() {
    super();
    this.state = {
      widthBar: '60',
      fontSizeBar: '15',
      fontColorBlack: false,
      fontColor: 'black',
      fontBar: 'monospace',
      top: false,
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.insertStyleBar = this.insertStyleBar.bind(this);
  }

  handlerChange({ target }) {
    const { name, value, checked } = target;
    const checkbox = name === 'top' || name === 'fontColorBlack';
    const valueInput = checkbox ? checked : value;
    this.setState({ [name]: valueInput });
  }

  insertStyleBar() {
    const { addStyleBar } = this.props;
    addStyleBar({ ...this.state });
  }

  render() {
    const {
      widthBar, fontSizeBar, fontColorBlack, fontColor, top, fontBar,
    } = this.state;
    return (
      <fieldset>
        <legend>Estilo das Barras</legend>
        <Input
          type="number"
          name="widthBar"
          labelText="Largura das barras:"
          value={widthBar}
          change={this.handlerChange}
        />
        <Input
          type="number"
          name="fontSizeBar"
          labelText="Tamanho da fonte:"
          value={fontSizeBar}
          change={this.handlerChange}
        />
        <Input
          type="text"
          name="fontBar"
          labelText="Fonte da barra:"
          value={fontBar}
          change={this.handlerChange}
        />
        <Input
          type="checkbox"
          name="fontColorBlack"
          labelText="Cor da fonte diferente da barra:"
          value={fontColorBlack}
          change={this.handlerChange}
        />
        {
         fontColorBlack
        && (
        <Input
          type="color"
          name="fontColor"
          labelText="Cor da fonte:"
          value={fontColor}
          change={this.handlerChange}
        />
        )
        }
        <Input
          type="checkbox"
          name="top"
          labelText="Exibir a porcentagem no topo da barra:"
          value={top}
          change={this.handlerChange}
        />
        <button type="button" onClick={this.insertStyleBar}>Aplicar</button>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addStyleBar: (state) => dispatch(actionAddStyleBar(state)),
});

export default connect(null, mapDispatchToProps)(InputBar);
