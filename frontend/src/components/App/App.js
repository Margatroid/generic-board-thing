import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadIdeas } from '../../actions';

const mapStateToProps = state => {
  return {
    ideas: state.ideas,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadIdeas: () => {
      dispatch(loadIdeas());
    }
  };
};

export class App extends Component {
  componentDidMount() {
    this.props.loadIdeas();
  }

  render() {
    return <div className="App">Hi</div>;
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
