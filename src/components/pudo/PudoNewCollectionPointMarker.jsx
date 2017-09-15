import React from 'react'
import PropTypes from 'prop-types';

const PudoNewCollectionPointMarker = ({text}) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>
);

PudoNewCollectionPointMarker.propTypes = {
};

export default PudoNewCollectionPointMarker;
