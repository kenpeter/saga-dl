// react
import React, { Component } from "react";
// redux
import { connect } from "react-redux";

class App extends Component {
  render() {
    // loading, dog data, onClick, err
    const { fetching, dog, onRequestDog } = this.props;

    return (
      <div className="App"> 
        {fetching ? (
          <div>Fetching...</div>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}
      </div>
    );
  }
}

// this props can get
const mapStateToProps = state => {
  return {
    // loading
    fetching: state.fetching,
    // dog data
    dog: state.dog,
    // err
    error: state.error
  };
};

// this props can get
const mapDispatchToProps = {
  // fire get
  onRequestDog: () => ({ type: "API_CALL_REQUEST" })
};

// connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
