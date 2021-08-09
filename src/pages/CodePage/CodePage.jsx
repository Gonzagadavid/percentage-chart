import React, { useRef } from 'react';
import { connect } from 'react-redux';
import './CodePage.css';
import Highlight from 'react-highlight';

const CodePage = ({
  heightGraph, widthGraph, backgroundColor, lineColor, fontBar, fontSizeBackground,
  widthLine, fontBackground, percentSide, widthBar, fontSizeBar,
  fontColorBlack, fontColor, topPercent, withLegend, fontLegend, fontLegendSize, colorLegend,
  borderLegend, colorBorderLegend, fontColorLegend, baseName, legendSide, legendVertical,
  widthBorder, borderColor,
}) => {
  const objectCode = useRef(null);
  const npm = useRef(null);

  const copyToClip = (ref) => {
    const tempInput = document.createElement('textarea');
    tempInput.value = ref.current.innerHTML;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  };

  return (document.queryCommandSupported('copy')
    && (
    <div className="CodePage">
      <h2>Finalizando</h2>
      <p>Crie um arquivo, copie e cole o objeto com os dados da estilização, depois o exporte</p>
      <div className="code">
        <button type="button" className="copy-button" onClick={() => copyToClip(objectCode)}>Copy</button>
        <Highlight className="language-javascript">
          <p ref={objectCode}>
            {
            `//style.js
            
const style = { 
  widthGraph: '${widthGraph}',
  widthBorder: '${widthBorder}',
  heightGraph: '${heightGraph}',
  backgroundColor: '${backgroundColor}',
  lineColor: '${lineColor}',
  fontSizeBackground: '${fontSizeBackground}',
  percentSide: '${percentSide}',
  widthLine: '${widthLine}',
  fontBackground: '${fontBackground}',
  widthBar: '${widthBar}',
  fontSizeBar: '${fontSizeBar}',
  fontBar: '${fontBar}',
  fontColorBlack: '${fontColorBlack}',
  fontColor: '${fontColor}',
  topPercent: '${topPercent}',
  withLegend: '${withLegend}',
  fontLegend: '${fontLegend}',
  fontLegendSize: '${fontLegendSize}',
  fontColorLegend: '${fontColorLegend}',
  colorLegend: '${colorLegend}',
  borderLegend: '${borderLegend}',
  colorBorderLegend: '${colorBorderLegend}',
  baseName: '${baseName}',
  legendSide: '${legendSide}',
  legendVertical: '${legendVertical}',
  borderColor: '${borderColor}',
}

export default style
`
}
          </p>
        </Highlight>
      </div>
      <p>Instale o componente libary em sua aplicação</p>
      <div className="code">
        <button type="button" className="copy-button" onClick={() => copyToClip(npm)}>Copy</button>
        <Highlight className="language-shell">
          <p ref={npm}>
            npm install
          </p>
        </Highlight>
      </div>
    </div>
    )
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
export default connect(mapStateToProps)(CodePage);
