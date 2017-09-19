import React from 'react';
import {connect} from 'react-redux';
import PudoNewCollectionPointPostcode from './PudoNewCollectionPointPostcode';
import PudoNewCollectionPointMap from './PudoNewCollectionPointMap';

import './PudoNewCollectionPoint.scss';

const PudoNewCollectionPoint = ({deactivateAddCollectionPoint}) => (
  <div className="pudoAddCollectionPoint">
    <div className="pudoAddCollectionPoint__header">
      <div className="pudoAddCollectionPoint__header-text">Add a Collection Point</div>
      <span className="pudoAddCollectionPoint__close" onClick={deactivateAddCollectionPoint} />
    </div>
    <PudoNewCollectionPointPostcode/>
    <PudoNewCollectionPointMap/>
  </div>
);


PudoNewCollectionPoint.propTypes = {};

export default PudoNewCollectionPoint;
