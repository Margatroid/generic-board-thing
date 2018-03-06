import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  loadIdeas,
  newIdea,
  onTitleChange,
  onBodyChange,
  saveIdea,
  deleteIdea,
  ideaMouseEnter,
  ideaMouseLeave
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
    deleteIdea: id => {
      dispatch(deleteIdea(id));
    },
    ideaMouseEnter: id => {
      dispatch(ideaMouseEnter(id));
    },
    ideaMouseLeave: id => {
      dispatch(ideaMouseLeave(id));
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
        <Header isLoading={this.props.loading} newIdea={this.props.newIdea} />
        <Ideas
          onTitleChange={this.props.onTitleChange}
          onBodyChange={this.props.onBodyChange}
          saveIdea={this.props.saveIdea}
          deleteIdea={this.props.deleteIdea}
          ideas={this.props.ideas}
          ideaMouseEnter={this.props.ideaMouseEnter}
          ideaMouseLeave={this.props.ideaMouseLeave}
        />
      </div>
    );
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
