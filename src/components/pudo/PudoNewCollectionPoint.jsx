import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PudoNewCollectionPointPostcode from './PudoNewCollectionPointPostcode';
import * as pudoActions from '../../actions/pudoActions';


class PudoNewCollectionPoint extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return(
    <div className="pudoAddCollectionPoint">
      <PudoNewCollectionPointPostcode />
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
