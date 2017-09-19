import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';
import PudoSavedAddresses from './PudoSavedAddresses';
import PudoNewCollectionPoint from './PudoNewCollectionPoint';
import PudoNewCollectionPointInfo from './PudoNewCollectionPointInfo';

import './pudo.scss';

class Pudo extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.activateAddCollectionPoint = this.activateAddCollectionPoint.bind(this);
    this.deactivateCollectionPointInfo = this.deactivateCollectionPointInfo.bind(this);
  }

  activateAddCollectionPoint() {
    this.props.actions.activateAddCollectionPoint();
    document.body.setAttribute('pudo', 'active');
  }

  deactivateCollectionPointInfo() {
    this.props.actions.deactivateCollectionPointInfo();
    document.body.setAttribute('pudo', 'active');
  }

  render() {
    const pudo = this.props.pudo;
    const actions = this.props.actions;

    return (
      <div className="pudo">
        <PudoSavedAddresses addresses={pudo.savedAddresses}/>
        <button className="PudoAddCollectionPoint" onClick={this.activateAddCollectionPoint}>+Add a collection
          point
        </button>
        {pudo.isAddCollectionPoint && <PudoNewCollectionPoint />}
        {pudo.isCollectionPointInfo && <PudoNewCollectionPointInfo selectedCollectionPoint={pudo.selectedCollectionPoint}
                                                            deactivateCollectionPointInfo={this.deactivateCollectionPointInfo}/>}
      </div>
    )
  }
}

Pudo.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Pudo);
