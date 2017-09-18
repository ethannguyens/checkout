import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';
import GoogleMapReact from 'google-map-react';
import PudoNewCollectionPointMarker from './PudoNewCollectionPointMarker';



class PudoCollectionPoint extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return(
      <div className="pudoCollectionPoint">
        <div className="pudoCollectionPointInfo">
          <img src="" alt="" className="pudoCollectionPointInfo-img"/>
          <p className="pudoCollectionPointInfo-header">{id}</p>
          <p className="pudoCollectionPointInfo-distance">{distance}</p>
          <p className="pudoCollectionPointInfo-address"></p>
        </div>
        <GoogleMapReact className="pudoCollectionPointMap"
          center={latlng}
          defaultZoom={14}
        >
          <PudoNewCollectionPointMarker
            className="pudoCollectionPointMap-marker"
            lat={latitude}
            lng={longitude}
            text={id}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

PudoCollectionPoint.propTypes = {
  pudo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    pudo: state.pudo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pudoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PudoCollectionPoint);
