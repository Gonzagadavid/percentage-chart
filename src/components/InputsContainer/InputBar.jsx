import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionAddStyleBar } from '../../redux/actions';
import Input from '../Input/Input';
import './InputContainer.css';

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
  }

  handlerChange({ target }) {
    const {
      name, value, checked, type,
    } = target;
    const { addStyleBar } = this.props;
    const checkbox = type === 'checkbox';
    const valueInput = checkbox ? checked : value;
    this.setState({ [name]: valueInput });
    addStyleBar({ [name]: valueInput });
  }

  render() {
    const {
      widthBar, fontSizeBar, fontColordifBar, fontColor, topPercent, fontBar, baseName,
    } = this.state;
    return (
      <div className="InputConatiner">
        <h3>Estilo das Barras</h3>
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
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addStyleBar: (state) => dispatch(actionAddStyleBar(state)),
});

export default connect(null, mapDispatchToProps)(InputBar);
