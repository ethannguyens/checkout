import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';

class PudoNewCollectionPointMarker extends React.Component {
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
    this.props.actions.displayCollectionPointInfo(this.props.no, this.props.pudo.collectionPoints[this.props.no]);
  }

  render() {
    let customClass = '';
    if (this.props.pudo.activeCollectionPoint === this.props.no) customClass = `active`;

    return (<div onMouseEnter={this.onEnter}
                 onMouseLeave={this.onLeave}
                 onClick={this.onClick}
                 id={`pudoNewCollectionPointMarker-${this.props.no }`}
                 className={`pudoNewCollectionPointMarker ${customClass}`}>
      <div className="pudoNewCollectionPointMarker__text">{this.props.no + 1}</div>
    </div>)
  }
}

PudoNewCollectionPointMarker.propTypes = {
  pudo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  no: PropTypes.number.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(PudoNewCollectionPointMarker);
