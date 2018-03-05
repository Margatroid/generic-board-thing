import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadIdeas } from '../../actions';

import Header from '../Header/';
import Ideas from '../Ideas/';

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
    return (
      <div>
        <Header />
        <Ideas ideas={this.props.ideas} />
      </div>
    );
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
