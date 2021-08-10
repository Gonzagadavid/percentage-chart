import {
  ADD_BACKGROUND, ADD_COLOR, ADD_DATA, ADD_LEGEND, ADD_STYLEBAR, EDIT_COLOR, EDIT_QTY, REMOVE_DATA,
} from '../actions';

const INITIAL_STATE = {
  data: {},
  colors: [],
  backgroundColor: 'white',
  lineColor: 'black',
  fontSizeBackground: '10',
  widthGraph: '1000',
  heightGraph: '500',
  widthBorder: '1',
  borderColor: 'black',
  widthLine: '1',
  fontBackground: 'monospace',
  maxPercent: '100%',
  percentSide: 'left',
  widthBar: '60',
  fontSizeBar: '15',
  fontBar: 'monospace',
  fontColordifBar: false,
  fontColor: 'black',
  topPercent: false,
  baseName: true,
  withLegend: false,
  fontLegend: 'monospace',
  fontLegendSize: '20',
  fontColorLegend: 'black',
  colorLegend: 'white',
  borderLegend: 1,
  colorBorderLegend: 'black',
  legendSide: 'right',
  legendVertical: 'atop',
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

    case REMOVE_DATA:
      return {
        ...state,
        data: Object
          .keys(state.data)
          .filter((key) => key !== action.state.name)
          .reduce((newState, name) => ({ ...newState, [name]: state.data[name] }), {}),
        colors: state.colors.filter((color) => color !== action.state.color),
      };

    case EDIT_COLOR:
      return {
        ...state,
        colors: state
          .colors
          .map((color, index) => (index === action.state.index ? action.state.color : color)),
      };

    case EDIT_QTY:
      return {
        ...state,
        data: { ...state.data, [action.state.name]: action.state.qty },
      };

    default: return state;
  }
};

export default reducerData;