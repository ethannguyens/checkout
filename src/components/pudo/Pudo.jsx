import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';
import PudoSavedAddresses from './PudoSavedAddresses';
import PudoNewCollectionPoint from './PudoNewCollectionPoint';
import PudoCollectionPoint from './PudoCollectionPoint';

import './pudo.scss';

class Pudo extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const pudo = this.props.pudo;
    const actions = this.props.actions;

    return (
      <div className="pudo">
        <PudoSavedAddresses addresses={pudo.savedAddresses}/>
        <button className="PudoAddCollectionPoint" onClick={actions.activateAddCollectionPoint}>+Add a collection
          point
        </button>
        {pudo.isAddCollectionPoint && <PudoNewCollectionPoint/>}
        {pudo.isCollectionPointInfo && <PudoCollectionPoint selectedCollectionPoint={pudo.selectedCollectionPoint}
                                                            deactivateCollectionPointInfo={actions.deactivateCollectionPointInfo}/>}
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
