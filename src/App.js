// react
import React, { Component } from "react";
// redux
import { connect } from "react-redux";

class App extends Component {
  render() {
    // loading, dog data, onClick, err
    const { fetching, dog, onRequestDog, error } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={dog} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

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
