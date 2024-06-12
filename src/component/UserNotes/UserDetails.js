import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { renderConfigurationFieldsServ } from './UserNoteService';
// import SaveNotes from './Notes';
function SaveUser() {
  // const history = useNavigate()
  const userDetailsFields = {
    email:"",
    password:""
  }
  const[intialFields,setIntialFields] = useState({
    userDetailsFields
  })
  console.log(intialFields)
  const onChangeFields = (e)=>{
    setIntialFields({
      ...intialFields,[e.target.name] : e.target.value
    })
  }

const onClickLogin = async ()=>{
  // history.push(<SaveNotes/>)
  const data = await renderConfigurationFieldsServ();
  console.log(data)
}

  const{email,password} = intialFields;
  return (
    <div className="App">
      <h1>User Details</h1>
      <div>
      <label>Email Address : </label>
      <input placeholder='Enter Email' value={email} onChange={onChangeFields} name='email'/> 
      </div>
      <div>
      <label>Password : </label>
      <input placeholder='Enter Password' value={password} onChange={onChangeFields} name='password'/>
      </div>
      <button onClick={onClickLogin}>Login</button>
      
    </div>
  );
}

export default SaveUser;
