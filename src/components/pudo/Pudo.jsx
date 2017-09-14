import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';
import PudoSavedAddresses from './PudoSavedAddresses';

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

    let newCollectionPoint = null;
    if (this.props.pudo.isAddCollectionPoint) {
      newCollectionPoint = 'NEW COLLECTION POINT'
    }

    return (
      <div className="pudo">
        <PudoSavedAddresses addresses={savedAddresses}/>
        <button className="PudoAddCollectionPoint" onClick={this.activateAddCollectionPoint}>+Add a collection point</button>
        {newCollectionPoint}
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
