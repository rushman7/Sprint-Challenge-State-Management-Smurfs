import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
 
const DisplaySmurf = props => {
  return (
    <div className="container">
      {props.smurfs.map(smurf => 
        <div key={smurf.id} className="smurf-box">
          <p>Name: {smurf.name}</p>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p> 
          <Link to={`/${smurf.id}`}>
            <button>Edit Smurf</button>
          </Link>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error
})

export default connect(mapStateToProps, { })(DisplaySmurf);