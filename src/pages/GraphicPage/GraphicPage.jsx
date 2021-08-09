import React from 'react';
import { connect } from 'react-redux';
import CanvasGraffic from '../../components/CanvasGraffic';
import NavSet from '../../components/NavSet/NavSet';

import './GraphicPage.css';

const GraphicPage = (props) => {
  const {
    data, colors, maxPercent, style,
  } = props;

  return (
    <div className="GraphicPage">
      <NavSet />
      <div className="graphic">
        <CanvasGraffic
          style={style}
          data={data}
          maxPercent={maxPercent}
          colors={colors}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  style: state,
  data: state.data,
  colors: state.colors,
  widthGraph: state.widthGraph,
  heightGraph: state.heightGraph,
  widthBorder: state.widthBorder,
  backgroundColor: state.backgroundColor,
  lineColor: state.lineColor,
  fontSizeBackground: state.fontSizeBackground,
  percentSide: state.percentSide,
  widthLine: state.widthLine,
  fontBackground: state.fontBackground,
  maxPercent: state.maxPercent,
  widthBar: state.widthBar,
  fontSizeBar: state.fontSizeBar,
  fontBar: state.fontBar,
  fontColorBlack: state.fontColorBlack,
  fontColor: state.fontColor,
  topPercent: state.topPercent,
  withLegend: state.withLegend,
  fontLegend: state.fontLegend,
  fontLegendSize: state.fontLegendSize,
  fontColorLegend: state.fontColorLegend,
  colorLegend: state.colorLegend,
  borderLegend: state.borderLegend,
  colorBorderLegend: state.colorBorderLegend,
  baseName: state.baseName,
  legendSide: state.legendSide,
  legendVertical: state.legendVertical,
  borderColor: state.borderColor,
});
export default connect(mapStateToProps)(GraphicPage);
