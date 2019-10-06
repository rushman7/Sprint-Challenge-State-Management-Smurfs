import React, { Component } from "react";
import { fetchSmurfs } from '../actions/index';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>{this.props.smurfs.map(smurf => (
          <div key={smurf.id}>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <p>ID: {smurf.id}</p>
          </div>
        ))}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error
})

export default connect(mapStateToProps, { fetchSmurfs })(App);
