import React, { Component } from "react";
import { getSmurfs } from '../actions/index';
import { connect } from 'react-redux';
import AddSmurf from './AddSmurf';
import EditSmurf from './EditSmurf';
import { Route } from 'react-router-dom';
import DisplaySmurf from './DisplaySmurf';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  componentDidUpdate(prevProps) {
    if (this.props.smurfs.length !== prevProps.smurfs.length) {
      this.props.getSmurfs();
    }
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.error && <p className="error">{this.props.error}</p>}
        <Route exact path='/' component={DisplaySmurf} />
        <Route path='/:id' component={EditSmurf} /> 
        <Route exact path='/' component={AddSmurf} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error
})

export default connect(mapStateToProps, { getSmurfs })(App);
