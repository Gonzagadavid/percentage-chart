import React from 'react';
import { connect } from 'react-redux';
import CanvasGraffic from '../components/CanvasGraffic';

const GrafficPage = (props) => {
  const {
    data, colors, height, width, backgroundColor, lineColor, fontBar,
    fontSizeBackground, widthLine, fontBackground, maxPercent, percentSide,
    widthBar, fontSizeBar, fontColorBlack, fontColor, top,
    legend, fontLegend, fontLegendSize, colorLegend, borderLegend, colorBorderLegend,
    fontColorLegend, baseName, legendSide, legendVertical, widthBorder, borderColor,
  } = props;

  return (
    <div className="content">
      <h2>Grafico com barras</h2>
      <CanvasGraffic
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        lineColor={lineColor}
        fontSizeBackground={fontSizeBackground}
        fontBackground={fontBackground}
        widthLine={widthLine}
        maxPercent={maxPercent}
        percentSide={percentSide}
        data={data}
        colors={colors}
        widthBar={widthBar}
        fontSizeBar={fontSizeBar}
        fontBar={fontBar}
        fontColorBlack={fontColorBlack}
        fontColor={fontColor}
        top={top}
        baseName={baseName}
        legend={legend}
        fontLegend={fontLegend}
        fontLegendSize={fontLegendSize}
        colorLegend={colorLegend}
        borderLegend={borderLegend}
        colorBorderLegend={colorBorderLegend}
        fontColorLegend={fontColorLegend}
        legendSide={legendSide}
        legendVertical={legendVertical}
        widthBorder={widthBorder}
        borderColor={borderColor}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  colors: state.colors,
  width: state.width,
  height: state.height,
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
  top: state.top,
  legend: state.legend,
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
export default connect(mapStateToProps)(GrafficPage);
