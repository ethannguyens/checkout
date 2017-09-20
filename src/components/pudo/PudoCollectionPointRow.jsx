import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';
import pudoUtils from '../../modules/pudo-utils';
import PudoNewCollectionPointMarker from './PudoNewCollectionPointMarker';

class PudoCollectionPointRow extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onEnter() {
    this.props.actions.enterCollectionPoint(this.props.no);
  }

  onLeave() {
    this.props.actions.leaveCollectionPoint();
  }

  onClick() {

  }

  render() {
    let customClass = '';
    if (this.props.pudo.activeCollectionPoint == this.props.no) customClass = `active`;

    return (
      <div id={`pudoCollectionPointRow-${this.props.no}`} onMouseLeave={this.onLeave} onMouseEnter={this.onEnter} onClick={this.onClick} className={`pudoCollectionPointRow ${customClass}`}>
        <PudoNewCollectionPointMarker no={this.props.no}/>
        <div className="pudoCollectionPointRow__info">
          <div className="pudoCollectionPointRow__info-name">{this.props.point.name}</div>
          <div className="pudoCollectionPointRow__info-address">{pudoUtils.addressText(this.props.point.address)}</div>
        </div>
        <div className="pudoCollectionPointRow__distance">{this.props.point.distanceInKm} km</div>
      </div>
    )
  }
}


PudoCollectionPointRow.propTypes = {
  pudo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  no: PropTypes.number.isRequired,
  point: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(PudoCollectionPointRow);
