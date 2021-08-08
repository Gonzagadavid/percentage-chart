import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionAddBackground } from '../redux/actions';
import Input from './Input/Input';
import Select from './Select/Select';

class InputBackground extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: '#fff',
      lineColor: '#000',
      fontSizeBackground: '10',
      fontBackground: 'monospace',
      widthGraph: '1000',
      heightGraph: '500',
      widthLine: '1',
      maxPercent: '100%',
      percentSide: 'left',
      widthBorder: '1',
      borderColor: 'black',
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.insertBackground = this.insertBackground.bind(this);
  }

  handlerChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  insertBackground() {
    const { addBackground } = this.props;
    addBackground({ ...this.state });
  }

  render() {
    const {
      backgroundColor, lineColor, fontSizeBackground, widthGraph, heightGraph,
      widthLine, fontBackground, maxPercent, widthBorder, borderColor,
    } = this.state;
    return (
      <fieldset>
        <legend>Estilo Background</legend>
        <Input type="color" name="backgroundColor" labelText="Cor de fundo:" value={backgroundColor} change={this.handlerChange} />
        <Input type="color" name="lineColor" labelText="Cor da linha:" value={lineColor} change={this.handlerChange} />
        <Input type="number" name="widthLine" labelText="Largura da linha:" value={widthLine} change={this.handlerChange} />
        <Input type="number" name="fontSizeBackground" labelText="Tamanho da letra:" value={fontSizeBackground} change={this.handlerChange} />
        <Input type="text" name="fontBackground" labelText="Fonte de fundo:" value={fontBackground} change={this.handlerChange} />
        <Input type="number" name="widthGraph" labelText="Largura do grafico:" value={widthGraph} change={this.handlerChange} />
        <Input type="number" name="heightGraph" labelText="Altura do grafico:" value={heightGraph} change={this.handlerChange} />
        <Input type="number" name="widthBorder" labelText="Espessura da borda:" value={widthBorder} change={this.handlerChange} />
        <Input type="color" name="borderColor" labelText="Cor da borda:" value={borderColor} change={this.handlerChange} />
        <Input type="radio" name="percentSide" labelText="Esquerdo" value="left" change={this.handlerChange} />
        <Input type="radio" name="percentSide" labelText="Direito" value="right" change={this.handlerChange} />
        <Select
          name="maxPercent"
          labelText="Porcetagem a ser exibida:"
          value={maxPercent}
          change={this.handlerChange}
          options={['100%', '70%', '50%']}
        />
        <button type="button" onClick={this.insertBackground}>Aplicar</button>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBackground: (state) => dispatch(actionAddBackground(state)),
});

export default connect(null, mapDispatchToProps)(InputBackground);
