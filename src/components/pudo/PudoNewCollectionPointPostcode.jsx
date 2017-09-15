import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pudoActions from '../../actions/pudoActions';


class PudoNewCollectionPointPostcode extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.deactivate = this.deactivate.bind(this);
    this.props.actions.getPudoCurrentLocation();
  }

  deactivate() {
    console.log('deactivate');
    this.props.actions.deactivateAddCollectionPoint();
  }

  render() {
    const {postcode} = this.props.pudo.currentLocation;

    return (
      <div className="pudoAddCollectionPointPostcode">
        <div className="pudoAddCollectionPointPostcode-header">
          <p className="pudoAddCollectionPointPostcode-headerText">Add a Collection Point</p>
          <div className="pudoAddCollectionPointPostcode-close" onClick={this.deactivate}>X</div>
        </div>
        <p className="pudoAddCollectionPointPostcode-infoTop">Find your nearby collection points</p>
        <input type="text" value={postcode ? postcode : ""} className="pudoAddCollectionPointPostcode-input"/>
        <p className="pudoAddCollectionPointPostcode-infoBottom">Enter post code to find nearby collection points</p>
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

