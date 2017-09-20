import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';
import GoogleMapReact from 'google-map-react';
import PudoNewCollectionPointMarker from './PudoNewCollectionPointMarker';
import PudoCollectionPointsList from './PudoCollectionPointsList';

import './PudoNewCollectionPoint.scss';

class PudoNewCollectionPoint extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.props.actions.getCurrentLocationCollectionPoints();

    this.deactivateAddCollectionPoint = this.deactivateAddCollectionPoint.bind(this);
    this.footer = this.footer.bind(this);
  }

  deactivateAddCollectionPoint() {
    this.props.actions.deactivateAddCollectionPoint();
    document.body.removeAttribute('pudo');
  }

  footer() {
    if (this.props.pudo.collectionPoints.length > 0) return (
      <div className="pudoNewCollectionPoint__body-info-footer">
        <span
          className="pudoNewCollectionPoint__body-info-footer-count">{this.props.pudo.collectionPoints.length} </span>
        collection points found
      </div>
    );

    return (
      <div className="pudoNewCollectionPoint__body-info-footer">
        Enter postcode to find nearby collection points
      </div>
    )

  }

  render() {
    return (
      <div className="pudoNewCollectionPoint">
        <div className="pudoNewCollectionPoint__header">
          <div className="pudoNewCollectionPoint__header-text">Add a Collection Point</div>
          <span className="pudoNewCollectionPoint__close" onClick={this.deactivateAddCollectionPoint}/>
        </div>
        <div className="pudoNewCollectionPoint__body">
          <div className="pudoNewCollectionPoint__body-info">
            <div className="pudoNewCollectionPoint__body-info-interact">
              <div className="pudoNewCollectionPoint__body-info-highlight">Find your nearby collection points</div>
              <input type="text"
                     value={this.props.pudo.currentLocation.postcode ? this.props.pudo.currentLocation.postcode : ""}
                     className="pudoNewCollectionPoint__body-info-input"/>
              {this.footer()}
            </div>
            <PudoCollectionPointsList list={this.props.pudo.collectionPoints}/>
          </div>
          <div className="pudoNewCollectionPoint__body-map">
            <GoogleMapReact
              center={{lat: 45.848923, lng: 1.4288653}}
              defaultZoom={11}
            >
              {this.props.pudo.collectionPoints.map((collection, key) => <PudoNewCollectionPointMarker
                key={key}
                lat={collection.latitude}
                lng={collection.longitude}
                no={key}
              />)}
            </GoogleMapReact>
          </div>
        </div>
      </div>
    )
  }
}


PudoNewCollectionPoint.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PudoNewCollectionPoint);

