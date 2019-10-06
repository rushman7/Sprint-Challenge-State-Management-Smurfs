import React, { useState, useEffect } from "react";
import { updateSmurf } from '../actions/index';
import { connect } from 'react-redux';

const EditSmurf = props => {
  const id = props.match.params.id;
  const [smurf, setSmurf] = useState({
    name: 'name',
    age: 0,
    height: 'height',
    id: id
  })

  useEffect(() => {
    setSmurf({
      name: props.smurfs[id].name,
      age: props.smurfs[id].age,
      height: props.smurfs[id].height,
    })
  }, [id, props])
  
  const updateSmurf = e => {
    e.preventDefault();
    props.updateSmurf(smurf, id)
    props.history.push('/')
  }

  const onChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value })
  }

  return (
    <div className="form-box">
      <form>
        <p>Edit {smurf.name}</p>
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
        <button onClick={updateSmurf}>Edit Smurf!</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error
})

export default connect(mapStateToProps, { updateSmurf })(EditSmurf);
