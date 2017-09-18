import React from 'react';
import {connect} from 'react-redux';
import PudoNewCollectionPointPostcode from './PudoNewCollectionPointPostcode';
import PudoNewCollectionPointMap from './PudoNewCollectionPointMap';


const PudoNewCollectionPoint = () => (
  <div className="pudoAddCollectionPoint">
    <PudoNewCollectionPointPostcode/>
    <PudoNewCollectionPointMap/>
  </div>
);

PudoNewCollectionPoint.propTypes = {};

export default PudoNewCollectionPoint;
