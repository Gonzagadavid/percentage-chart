import React from 'react';
import { connect } from 'react-redux';
import { GraphicComponent } from 'stylized-graphic-component';
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
        <GraphicComponent
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
  maxPercent: state.maxPercent,
});
export default connect(mapStateToProps)(GraphicPage);
