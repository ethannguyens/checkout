import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';
import GoogleMapReact from 'google-map-react';
import PudoNewCollectionPointMarker from './PudoNewCollectionPointMarker';

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
    document.body.classList.remove('pudo-active');
  }

  footer() {
    if (this.props.pudo.collectionPoints.length > 0) return (
      <div className="pudoAddCollectionPoint__body-info-footer">
        <span className="pudoAddCollectionPoint__body-info-footer-count">{this.props.pudo.collectionPoints.length} </span>
        collection points found
      </div>
    );

    return (
      <div className="pudoAddCollectionPoint__body-info-footer">
        Enter postcode to find nearby collection points
      </div>
    )

  }

  render() {
    return (
      <div className="pudoAddCollectionPoint">
        <div className="pudoAddCollectionPoint__header">
          <div className="pudoAddCollectionPoint__header-text">Add a Collection Point</div>
          <span className="pudoAddCollectionPoint__close" onClick={this.deactivateAddCollectionPoint}/>
        </div>
        <div className="pudoAddCollectionPoint__body">
          <div className="pudoNewCollectionPoint__body-info">
            <div className="pudoAddCollectionPoint__body-info-highlight">Find your nearby collection points</div>
            <input type="text"
                   value={this.props.pudo.currentLocation.postcode ? this.props.pudo.currentLocation.postcode : ""}
                   className="pudoAddCollectionPoint__body-info-input"/>
            {this.footer()}
          </div>
          <div className="pudoNewCollectionPoint__body-map">
            <GoogleMapReact
              center={{lat: 45.848923, lng: 1.4288653}}
              defaultZoom={11}
              onChildClick={(key, childProps) => this.props.actions.selectCollectionPoint(childProps.data)}
            >
              {this.props.pudo.collectionPoints.map((collection, key) => <PudoNewCollectionPointMarker
                key={key}
                lat={collection.latitude}
                lng={collection.longitude}
                no={key}
                data={collection}
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

