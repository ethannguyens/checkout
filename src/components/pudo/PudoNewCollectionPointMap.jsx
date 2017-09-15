import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';
import GoogleMapReact from 'google-map-react';
import PudoNewCollectionPointMarker from './PudoNewCollectionPointMarker';



class PudoNewCollectionPointMap extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {latlng} = this.props.pudo.currentLocation;
    return (
      <div style={{width: '100%', height: '400px'}}>
        <GoogleMapReact
          defaultCenter={latlng}
          defaultZoom={13}
        >
          <PudoNewCollectionPointMarker
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    )
  }
}


PudoNewCollectionPointMap.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PudoNewCollectionPointMap);

