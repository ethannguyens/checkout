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

    this.activateAddCollectionPoint = this.activateAddCollectionPoint.bind(this);
  }

  componentDidMount() {

  }

  activateAddCollectionPoint() {
    console.log('addNewCollection');
    this.props.actions.activateAddCollectionPoint();
  }

  render() {
    const {savedAddresses} = this.props.pudo;
    const {isAddCollectionPoint} = this.props.pudo;
    const {isCollectionPointInfo} = this.props.pudo;

    return (
      <div className="pudo">
        <PudoSavedAddresses addresses={savedAddresses}/>
        <button className="PudoAddCollectionPoint" onClick={this.activateAddCollectionPoint}>+Add a collection point</button>
        {isAddCollectionPoint && <PudoNewCollectionPoint />}
        {isCollectionPointInfo && <PudoCollectionPoint />}
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
