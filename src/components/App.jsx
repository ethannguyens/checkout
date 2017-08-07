// This component handles the App template used on every page.
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isTouchDevice} from '../modules/utility';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.touchDevice = isTouchDevice();
    if (!this.touchDevice) this.addNontouchClass();
  }

  addNontouchClass() {
    document.querySelector('.nguyene').classList.add('nontouch');
  }

  render() {
    return (
      <div className={`nguyene`}>
        APP
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
