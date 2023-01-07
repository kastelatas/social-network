import React from 'react';
import Input from "./UI/Input";
import Button from "./UI/Button";
import logging from "../config/logging";

const LoginForm = () => {

  const onSubmit = () => {
    logging.info("LOGIN FORM SUBMIT")
  }

  return (
    <div className="login-form">
      <form>
        <h3 className="title">Login</h3>
        <Input/>
        <Input/>
       <Button text="Login" onClick={onSubmit}/>
      </form>
    </div>
  );
};

export default LoginForm;