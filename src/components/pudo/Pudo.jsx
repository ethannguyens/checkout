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
  }

  componentDidMount() {

  }

  addNewCollection() {
    console.log('addNewCollection');

  }

  render() {
    const {pudoSavedAddresses} = this.props;

    return (
      <div className="pudo">
        <PudoSavedAddresses addresses={pudoSavedAddresses}/>
        <button className="PudoAddCollectionPoint" onClick={this.addNewCollection}>+Add a collection point</button>
      </div>
    )
  }
}

Pudo.propTypes = {
  pudoSavedAddresses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    pudoSavedAddresses: state.pudoSavedAddresses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pudoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pudo);
