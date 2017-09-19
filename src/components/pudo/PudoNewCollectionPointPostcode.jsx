import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';


class PudoNewCollectionPointPostcode extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.props.actions.getCurrentLocationCollectionPoints();
  }
  render() {
    const {postcode} = this.props.pudo.currentLocation;

    return (
      <div className="pudoAddCollectionPointPostcode">
        <div className="pudoAddCollectionPointPostcode-body">
          <div className="pudoAddCollectionPointPostcode-infoTop">Find your nearby collection points</div>
          <input type="text" value={postcode ? postcode : ""} className="pudoAddCollectionPointPostcode-input"/>
          <div className="pudoAddCollectionPointPostcode-infoBottom">Enter post code to find nearby collection points</div>
        </div>
      </div>
    )
  }
}


PudoNewCollectionPointPostcode.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PudoNewCollectionPointPostcode);

