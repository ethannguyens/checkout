import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';
import GoogleMapReact from 'google-map-react';
import PudoNewCollectionPointMarker from './PudoNewCollectionPointMarker';



class PudoCollectionPoint extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.deactivateCollectionPointInfo = this.deactivateCollectionPointInfo.bind(this);
  }

  deactivateCollectionPointInfo() {
    this.props.actions.deactivateCollectionPointInfo();
  }

  render() {
    const selectedCollectionPoint = this.props.pudo.selectedCollectionPoint;

    return(
      <div className="pudoCollectionPoint">
        <div className="pudoCollectionPointMenu">
          <button onClick={this.deactivateCollectionPointInfo} className="pudoCollectionPointMenu-back">Back</button>
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
