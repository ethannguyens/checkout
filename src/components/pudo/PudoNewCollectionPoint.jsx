import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';
import GoogleMapReact from 'google-map-react';
import PudoNewCollectionPointMarker from './PudoNewCollectionPointMarker';
import PudoCollectionPointsList from './PudoCollectionPointsList';

import './PudoNewCollectionPoint.scss';
import PudoNewCollectionPointInfo from "./PudoNewCollectionPointInfo";

import pudoLocationImg from './Pudo_myLocation.svg'


class PudoNewCollectionPoint extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.deactivateAddCollectionPoint = this.deactivateAddCollectionPoint.bind(this);
    this.footer = this.footer.bind(this);
    this.customClass = this.customClass.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  deactivateAddCollectionPoint() {
    this.props.actions.hidePudoCollectionPoints();
    document.body.removeAttribute('pudo');

  }

  customClass() {
    let customClass = '';

    if (!this.props.pudo.isDisplayCollectionPointInfo) customClass += " isNotDisplayCollectionPointInfo";
    if (this.props.pudo.hideCollectionPoint) customClass += " inactive";

    return customClass;
  }

  getCurrentLocation() {
    this.props.actions.getCurrentLocationCollectionPoints();
  }

  clearInput() {
    const input = document.querySelector(".pudoNewCollectionPoint__body-info-input");
    if (input.value) input.value = "";
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

  componentDidMount() {
    const input = document.querySelector('.pudoNewCollectionPoint__body-info-input');
    const searchBox = new google.maps.places.SearchBox(input);
    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      let currentLocation = {
        latlng: {lat: places[0].geometry.location.lat(), lng: places[0].geometry.location.lng()},
        address: places[0].formatted_address,
        postcode: ''
      };

      this.props.actions.updatePudoCurrentLocation(currentLocation);
    });
  }

  displayPostcodeInput() {
    return (
      <div className={`pudoNewCollectionPoint__body-info ${this.customClass()}`}>
        <div className="pudoNewCollectionPoint__body-info-interact">
          <div className="pudoNewCollectionPoint__body-info-highlight">Find your nearby collection points</div>
          <div className="pudoNewCollectionPoint__body-info-location" onClick={this.clearInput}>
            <img src={pudoLocationImg} className="pudoNewCollectionPoint__body-info-location-current"
                 onClick={this.getCurrentLocation}></img>
            <input type="text"
                   placeholder={this.props.pudo.currentLocation.postcode ? this.props.pudo.currentLocation.postcode : "Enter location"}
                   className="pudoNewCollectionPoint__body-info-input"/>
          </div>
          {this.footer()}
        </div>
        <PudoCollectionPointsList list={this.props.pudo.collectionPoints}/>
      </div>
    )
  }


  render() {
    return (
      <div className={`pudoNewCollectionPoint ${this.customClass()}`}>
        <div className="pudoNewCollectionPoint__header">
          <div className="pudoNewCollectionPoint__header-text">Add a Collection Point</div>
          <span className="pudoNewCollectionPoint__close" onClick={this.deactivateAddCollectionPoint}/>
        </div>
        <div className="pudoNewCollectionPoint__body">
          {this.displayPostcodeInput()}
          {this.props.pudo.isDisplayCollectionPointInfo &&
          <PudoNewCollectionPointInfo no={this.props.pudo.displayCollectionPoint}
                                      backFunc={this.props.actions.deactivateDisplayCollectionPointInfo}
                                      point={this.props.pudo.collectionPoints[this.props.pudo.displayCollectionPoint]}/>}
          <div className="pudoNewCollectionPoint__body-map">
            <GoogleMapReact
              center={this.props.pudo.mapCenter}
              zoom={this.props.pudo.mapZoom}
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

