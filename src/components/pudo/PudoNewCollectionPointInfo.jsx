import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';
import GoogleMapReact from 'google-map-react';
import PudoNewCollectionPointMarker from './PudoNewCollectionPointMarker';
import pudoUtils from '../../modules/pudo-utils';

const PudoNewCollectionPointInfo = (({selectedCollectionPoint, deactivateCollectionPointInfo}) => (
      <div className="pudoCollectionPoint">
        <div className="pudoCollectionPoint__menu">
          <button onClick={deactivateCollectionPointInfo} className="pudoCollectionPoint__menu-back">Back</button>
        </div>

        <div className="pudoCollectionPoint__info">
          <img src="" alt="" className="pudoCollectionPoint__info-img"/>
          <p className="pudoCollectionPoint__info-header">{selectedCollectionPoint.id}</p>
          <p className="pudoCollectionPoint__info-distance">{selectedCollectionPoint.distanceInKm}</p>
          <p className="pudoCollectionPoint__info-address">{pudoUtils.addressText(selectedCollectionPoint.address)}</p>
        </div>

        <div className="pudoCollectionPoint__map" style={{width: '100%', height: '400px'}}>
          <GoogleMapReact className="pudoCollectionPointMap"
                          center={{lat: selectedCollectionPoint.latitude, lng: selectedCollectionPoint.longitude}}
                          defaultZoom={14}
          >
            <PudoNewCollectionPointMarker
              lat={selectedCollectionPoint.latitude}
              lng={selectedCollectionPoint.longitude}
              text={selectedCollectionPoint.id}
            />
          </GoogleMapReact>
        </div>

        <div className="pudoCollectionPoint__hours">
        </div>

        <div className="pudoCollectionPoint__services">
        </div>

        <button className="pudoCollectionPoint__select">Select</button>
      </div>
    ));

PudoNewCollectionPointInfo.propTypes = {
  selectedCollectionPoint: PropTypes.object.isRequired,
  deactivateCollectionPointInfo: PropTypes.func.isRequired
};

export default PudoNewCollectionPointInfo;




