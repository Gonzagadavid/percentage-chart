const inputs = [
  { type: 'color', name: 'backgroundColor', labelText: 'Cor de fundo:' },
  { type: 'color', name: 'lineColor', labelText: 'Cor da linha:' },
  { type: 'number', name: 'widthLine', labelText: 'Largura da linha:' },
  { type: 'number', name: 'fontSizeBackground', labelText: 'Tamanho da letra:' },
  { type: 'text', name: 'fontBackground', labelText: 'Fonte de fundo:' },
  { type: 'number', name: 'widthGraph', labelText: 'Largura do grafico:' },
  { type: 'number', name: 'heightGraph', labelText: 'Altura do grafico:' },
  { type: 'number', name: 'widthBorder', labelText: 'Espessura da borda:' },
  { type: 'color', name: 'borderColor', labelText: 'Cor da borda:' },
  {
    type: 'radio', name: 'percentSide', labelText: 'Esquerdo', value: 'left',
  },
  {
    type: 'radio', name: 'percentSide', labelText: 'Direito', value: 'right',
  },
];

export default inputs;
