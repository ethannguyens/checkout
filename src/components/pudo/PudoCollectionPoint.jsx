import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';
import GoogleMapReact from 'google-map-react';
import PudoNewCollectionPointMarker from './PudoNewCollectionPointMarker';



const PudoCollectionPoint = (({selectedCollectionPoint, deactivateCollectionPointInfo}) => (
      <div className="pudoCollectionPoint">
        <div className="pudoCollectionPointMenu">
          <button onClick={deactivateCollectionPointInfo} className="pudoCollectionPointMenu-back">Back</button>
        </div>
        <div className="pudoCollectionPointInfo">
          <img src="" alt="" className="pudoCollectionPointInfo-img"/>
          <p className="pudoCollectionPointInfo-header">{selectedCollectionPoint.id}</p>
          <p className="pudoCollectionPointInfo-distance">{selectedCollectionPoint.distanceInKm}</p>
          <p className="pudoCollectionPointInfo-address"></p>
        </div>
        <div className="pudoCollectionPointMap" style={{width: '100%', height: '400px'}}>
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

        <div className="pudoCollectionPointHours">

        </div>
        <div className="pudoCollectionPointServices">
        </div>
        <button className="pudoCollectionPointSelect">Select</button>
      </div>
    ));

PudoCollectionPoint.propTypes = {
};

export default PudoCollectionPoint;




