import React from 'react'
import PropTypes from 'prop-types';

const PudoNewCollectionPointMarker = ({no}) => (
  <div className="PudoNewCollectionPointMarker">
    <div className="PudoNewCollectionPointMarker__text">{no}</div>
  </div>
);

PudoNewCollectionPointMarker.propTypes = {
};

export default PudoNewCollectionPointMarker;
