import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadIdeas, newIdea } from '../../actions';

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
    },
    newIdea: () => {
      dispatch(newIdea());
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
        <Header newIdea={this.props.newIdea} />
        <Ideas ideas={this.props.ideas} />
      </div>
    );
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
