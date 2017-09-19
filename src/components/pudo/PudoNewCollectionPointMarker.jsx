import React from 'react'
import PropTypes from 'prop-types';

const PudoNewCollectionPointMarker = ({no}) => (
  <div className="pudoNewCollectionPointMarker">
    <div className="pudoNewCollectionPointMarker__text">{no}</div>
  </div>
);

PudoNewCollectionPointMarker.propTypes = {
  no: PropTypes.number.isRequired
};

export default PudoNewCollectionPointMarker;
