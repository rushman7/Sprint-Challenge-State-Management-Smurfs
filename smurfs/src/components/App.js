import React, { Component } from "react";
import { getSmurfs } from '../actions/index';
import { connect } from 'react-redux';
import AddSmurf from './AddSmurf';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.error && <p className="error">{this.props.error}</p>}
        <div className="container">
          {this.props.smurfs.map(smurf => (
            <div key={smurf.id} className="smurf-box">
              <p>Name: {smurf.name}</p>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </div>
          ))}
        </div>
        <AddSmurf />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error
})

export default connect(mapStateToProps, { getSmurfs })(App);
