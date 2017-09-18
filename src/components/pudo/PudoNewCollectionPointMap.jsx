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

    this.markerClick = this.markerClick.bind(this);
  }

  markerClick(key, childProps) {
    this.props.actions.selectCollectionPoint(childProps.data);
  };

  render() {
    const {latlng} = this.props.pudo.currentLocation;
    const {collectionPoints} = this.props.pudo;
    return (
      <div style={{width: '100%', height: '400px'}}>
        <GoogleMapReact
          center={{lat: 45.848923, lng: 1.4288653}}
          defaultZoom={13}
          onChildClick={this.markerClick}
        >
          {collectionPoints.map((collection, key) => <PudoNewCollectionPointMarker
            key={key}
            lat={collection.latitude}
            lng={collection.longitude}
            data={collection}
          />)}
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

