import {
  ADD_BACKGROUND, ADD_COLOR, ADD_DATA, ADD_STYLEBAR,
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
};

const reducerData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, data: { ...state.data, ...action.state } };

    case ADD_COLOR:
      return { ...state, colors: [...state.colors, action.state] };

    case ADD_BACKGROUND:
      return {
        ...state,
        backgroundColor: action.state.backgroundColor,
        lineColor: action.state.lineColor,
        fontSizeBackground: action.state.fontSizeBackground,
        width: action.state.width,
        height: action.state.height,
        widthLine: action.state.widthLine,
        fontBackground: action.state.fontBackground,
        maxPercent: action.state.maxPercent,
        percentSide: action.state.percentSide,
      };

    case ADD_STYLEBAR:
      return {
        ...state,
        widthBar: action.state.widthBar,
        fontSizeBar: action.state.fontSizeBar,
        fontBar: action.state.fontBar,
        fontColorBlack: action.state.fontColorBlack,
        fontColor: action.state.fontColor,
        top: action.state.top,
      };

    default: return state;
  }
};

export default reducerData;
