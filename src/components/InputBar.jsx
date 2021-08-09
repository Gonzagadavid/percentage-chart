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
      fontColordifBar: false,
      fontColor: 'black',
      fontBar: 'monospace',
      topPercent: false,
      baseName: true,
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.insertStyleBar = this.insertStyleBar.bind(this);
  }

  handlerChange({ target }) {
    const {
      name, value, checked, type,
    } = target;
    const checkbox = type === 'checkbox';
    const valueInput = checkbox ? checked : value;
    this.setState({ [name]: valueInput });
  }

  insertStyleBar() {
    const { addStyleBar } = this.props;
    addStyleBar({ ...this.state });
  }

  render() {
    const {
      widthBar, fontSizeBar, fontColordifBar, fontColor, topPercent, fontBar, baseName,
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
          checked={fontColordifBar}
          change={this.handlerChange}
        />
        {
         fontColordifBar
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
          name="topPercent"
          labelText="Exibir a porcentagem no topo da barra:"
          checked={topPercent}
          change={this.handlerChange}
        />
        <Input
          type="checkbox"
          name="baseName"
          labelText="Exibir o nome na base da barra:"
          checked={baseName}
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
