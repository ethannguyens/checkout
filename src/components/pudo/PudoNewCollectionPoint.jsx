import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';
import PudoNewCollectionPointPostcode from './PudoNewCollectionPointPostcode';
import PudoNewCollectionPointMap from './PudoNewCollectionPointMap';


const PudoNewCollectionPoint = () => (
    <div className="pudoAddCollectionPoint">
      <PudoNewCollectionPointPostcode />
      <PudoNewCollectionPointMap />
    </div>
    );

PudoNewCollectionPoint.propTypes = {
};

export default PudoNewCollectionPoint;
