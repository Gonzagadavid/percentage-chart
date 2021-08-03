import React, { Component } from 'react';
import Input from './Input/Input';

class Legend extends Component {
  constructor() {
    super();
    this.state = {
      legend: false,
      fontLegend: 'monospace',
      fontLegendSize: '20',
      colorLegend: '#fff',
    };
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange({ target }) {
    const { name, value, checked } = target;
    const checkbox = name === 'legend';
    const valueInput = checkbox ? checked : value;
    this.setState({ [name]: valueInput });
  }

  render() {
    const {
      legend, fontLegend, fontLegendSize, colorLegend,
    } = this.state;
    return (
      <fieldset>
        <legend>Legenda</legend>
        <Input type="checkbox" name="legend" labelText="Com legenda" value={legend} change={this.handlerChange} />
        { legend
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
          <Input type="color" name="colorLegend" labelText="cor de fundo da legenda" value={colorLegend} change={this.handlerChange} />
        </>
        )}
      </fieldset>
    );
  }
}

export default Legend;
