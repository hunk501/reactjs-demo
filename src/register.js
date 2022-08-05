import React, { useState } from "react";
import "./login.css";

const RenderInput = (params) => {
  return (
    <div className="input-container">
      <label>{params.name}</label>
      <input type='text' name={params.name.toLowerCase()}/>
    </div>
  );
};

const RenderForm = () => {
  // State
  const[count, setCounter] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Handle Submit');
    console.log('count: ', count);
    if(count <=0 ) {
      setCounter(1);
    } else {
      setCounter(count + 1);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} method='POST'>
        <RenderInput name="Firstname" />
        <RenderInput name="Lastname" />
        <div className="button-container">
          <input type='submit' />
        </div>
      </form>
    </div>
  );
}

const App = () => {
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Register</div>
        <RenderForm />
      </div>
    </div>
  );
};

export default App;