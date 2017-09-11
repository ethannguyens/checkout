import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/pudoActions';
import PudoSavedAddresses from './PudoSavedAddresses';
import getPudoSavedAddresses from '../../api/PudoApi';

import './pudo.scss';

class Pudo extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  addNewCollection() {
    console.log('addNewCollection');
  }

  render() {
    return (
      <div className="pudo">
        <PudoSavedAddresses addresses={this.addresses}/>
        <button className="PudoAddCollectionPoint" onClick={this.addNewCollection}>+Add a collection point</button>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pudo);
