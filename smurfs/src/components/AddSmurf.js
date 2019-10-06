import React, { useState } from "react";
import { postSmurf } from '../actions/index';
import { connect } from 'react-redux';

const AddSmurf = props => {
  const initialState = {
    name: '',
    age: '',
    height: ''
  }

  const [smurf, setSmurf] = useState(initialState)
  
  const addSmurf = e => {
    e.preventDefault();
    console.log(smurf)
    props.postSmurf(smurf)
    setSmurf(initialState)
  }

  const onChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value })
  }

  return (
    <div className="form-box">
      <form>
        <p>Add a Smurf!</p>
        <input 
          type="text"
          name="name"
          onChange={onChange}
          placeholder='name'
          value={smurf.name}
        />
        <input 
          type="text"
          name="age"
          onChange={onChange}
          placeholder='age'
          value={smurf.age}
        />
        <input 
          type="text"
          name="height"
          onChange={onChange}
          placeholder='height'
          value={smurf.height}
        />
        <button onClick={addSmurf}>Add Smurf!</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error
})

export default connect(mapStateToProps, { postSmurf })(AddSmurf);
