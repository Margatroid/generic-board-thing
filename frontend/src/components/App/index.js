import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  loadIdeas,
  newIdea,
  onTitleChange,
  onBodyChange,
  saveIdea
} from '../../actions';

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
    },
    saveIdea: (id, title, body) => {
      dispatch(saveIdea(id, title, body));
    },
    onTitleChange: (id, text) => {
      dispatch(onTitleChange(id, text));
    },
    onBodyChange: (id, text) => {
      dispatch(onBodyChange(id, text));
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
        <Ideas
          onTitleChange={this.props.onTitleChange}
          onBodyChange={this.props.onBodyChange}
          saveIdea={this.props.saveIdea}
          ideas={this.props.ideas}
        />
      </div>
    );
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
