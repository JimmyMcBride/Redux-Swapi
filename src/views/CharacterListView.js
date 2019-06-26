import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from '../actions'

class CharacterListView extends React.Component {


  componentDidMount() {
    this.props.getCharacters()
  }

  render() {
    if (this.props.fetching) {
      return <h2>Loading...</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  }
}

export default connect(
  mapStateToProps,
  {
    getCharacters
  }
)(CharacterListView);
