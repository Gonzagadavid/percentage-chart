export const inputBackground = [
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

export const inputData = [
  { type: 'text', name: 'dataName', labelText: 'Nome:' },
  { type: 'number', name: 'qty', labelText: 'Quantidade:' },
  { type: 'color', name: 'color', labelText: 'Cor:' },
];

export const inputBar = [
  { type: 'checkbox', name: 'fontColordifBar', labelText: 'Cor da fonte diferente da barra:' },
  { type: 'number', name: 'widthBar', labelText: 'Largura das barras:' },
  { type: 'number', name: 'fontSizeBar', labelText: 'Tamanho da fonte:' },
  { type: 'text', name: 'fontBar', labelText: 'Fonte da barra:' },
  { type: 'checkbox', name: 'topPercent', labelText: 'Exibir a porcentagem no topo da barra:' },
  { type: 'checkbox', name: 'baseName', labelText: 'Exibir o nome na base da barra:' },
];

export const legend = [
  { type: 'number', name: 'fontLegendSize', labelText: 'Tamanho da fonte:' },
  { type: 'color', name: 'fontColorLegend', labelText: 'Cor da fonte:' },
  { type: 'color', name: 'colorLegend', labelText: 'Cor de, fundo da legenda:' },
  { type: 'number', name: 'borderLegend', labelText: 'Largura da, borda:' },
  { type: 'color', name: 'colorBorderLegend', labelText: 'Cor da, borda:' },
  {
    type: 'radio', name: 'legendSide', labelText: 'Esquerdo', value: 'left',
  },
  {
    type: 'radio', name: 'legendSide', labelText: 'Direito', value: 'right',
  },
  {
    type: 'radio', name: 'legendVertical', labelText: 'Superior', value: 'atop',
  },
  {
    type: 'radio', name: 'legendVertical', labelText: 'Inferior', value: 'bottom',
  },
];
