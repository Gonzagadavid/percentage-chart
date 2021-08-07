import {
  ADD_BACKGROUND, ADD_COLOR, ADD_DATA, ADD_LEGEND, ADD_STYLEBAR,
} from '../actions';

const INITIAL_STATE = {
  data: {},
  colors: [],
  backgroundColor: '#fff',
  lineColor: '#000',
  fontSizeBackground: '10',
  width: '1000',
  height: '500',
  widthLine: '1',
  fontBackground: 'monospace',
  maxPercent: '100%',
  percentSide: 'left',
  widthBar: '60',
  fontSizeBar: '15',
  fontBar: 'monospace',
  fontColorBlack: false,
  fontColor: 'black',
  top: false,
  baseName: false,
  legend: false,
  fontLegend: 'monospace',
  fontLegendSize: '20',
  fontColorLegend: 'black',
  colorLegend: '#fff',
  borderLegend: 1,
  colorBorderLegend: 'black',
};

const reducerData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, data: { ...state.data, ...action.state } };

    case ADD_COLOR:
      return { ...state, colors: [...state.colors, action.state] };

    case ADD_BACKGROUND:
      return { ...state, ...action.state };

    case ADD_STYLEBAR:
      return { ...state, ...action.state };

    case ADD_LEGEND:
      return { ...state, ...action.state };

    default: return state;
  }
};

export default reducerData;
