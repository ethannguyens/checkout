import React from 'react'
import PropTypes from 'prop-types';
import pudoUtils from '../../modules/pudo-utils';
import PudoNewCollectionPointMarker from './PudoNewCollectionPointMarker';

const PudoCollectionPointRow = ({no, point}) => {
  return (
    <div className="pudoCollectionPointRow">
      <PudoNewCollectionPointMarker no={no}/>
      <div className="pudoCollectionPointRow__info">
        <div className="pudoCollectionPointRow__info-name">{point.name}</div>
        <div className="pudoCollectionPointRow__info-address">{pudoUtils.addressText(point.address)}</div>
      </div>
      <div className="pudoCollectionPointRow__distance">{point.distanceInKm} km</div>
    </div>
  )
};

export default PudoCollectionPointRow;
