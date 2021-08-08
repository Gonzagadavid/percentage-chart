import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionAddLegend } from '../redux/actions';
import Input from './Input/Input';

class Legend extends Component {
  constructor() {
    super();
    this.state = {
      withLegend: false,
      fontLegend: 'monospace',
      fontLegendSize: '20',
      fontColorLegend: 'black',
      colorLegend: '#fff',
      borderLegend: 1,
      colorBorderLegend: 'black',
      legendSide: 'right',
      legendVertical: 'atop',
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.insertLegenda = this.insertLegenda.bind(this);
  }

  handlerChange({ target }) {
    const {
      name, value, checked, type,
    } = target;
    const checkbox = type === 'checkbox';
    const valueInput = checkbox ? checked : value;
    this.setState({ [name]: valueInput }, () => {
      if (name === 'withLegend') this.insertLegenda();
    });
  }

  insertLegenda() {
    const { addLegend } = this.props;
    addLegend({ ...this.state });
  }

  render() {
    const {
      withLegend, fontLegend, fontLegendSize, colorLegend, borderLegend, colorBorderLegend,
      fontColorLegend,
    } = this.state;
    return (
      <fieldset>
        <legend>Legenda</legend>
        <Input type="checkbox" name="withLegend" labelText="Com legenda" checked={withLegend} change={this.handlerChange} />
        { withLegend
        && (
        <>
          <Input type="text" name="fontLegend" labelText="Fonte da legenda:" value={fontLegend} change={this.handlerChange} />
          <Input
            type="number"
            name="fontLegendSize"
            labelText="Tamanho da fonte:"
            value={fontLegendSize}
            change={this.handlerChange}
          />
          <Input type="color" name="fontColorLegend" labelText="Cor da fonte:" value={fontColorLegend} change={this.handlerChange} />
          <Input type="color" name="colorLegend" labelText="Cor de fundo da legenda:" value={colorLegend} change={this.handlerChange} />
          <Input type="number" name="borderLegend" labelText="Largura da borda:" value={borderLegend} change={this.handlerChange} />
          <Input type="color" name="colorBorderLegend" labelText="Cor da borda:" value={colorBorderLegend} change={this.handlerChange} />
          <Input type="radio" name="legendSide" labelText="Esquerdo" value="left" change={this.handlerChange} />
          <Input type="radio" name="legendSide" labelText="Direito" value="right" change={this.handlerChange} />
          <Input type="radio" name="legendVertical" labelText="Superior" value="atop" change={this.handlerChange} />
          <Input type="radio" name="legendVertical" labelText="Inferior" value="bottom" change={this.handlerChange} />
          <button type="button" onClick={this.insertLegenda}>Aplicar</button>
        </>
        )}
      </fieldset>
    );
  }
}

const mapDispacthToProps = (dispatch) => ({
  addLegend: (state) => dispatch(actionAddLegend(state)),
});

export default connect(null, mapDispacthToProps)(Legend);
