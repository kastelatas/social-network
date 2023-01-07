import React, {useState} from 'react';
import Input from "./UI/Input";
import Button from "./UI/Button";
import logging from "../config/logging";

const SignUpForm = () => {
  const [userLogin, setUserLogin] = useState<string>("")
  const [userPassword, setUserPassword] = useState<string>("")
  const [userEmail, setUserEmail] = useState<string>("")
  const [userName, setUserName] = useState<string>("")
  const [userSurname, setUserSurname] = useState<string>("")
  const [error, setError] = useState<string>("")

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    logging.info("SIGNUP FORM SUBMIT")

    if (!userName.length || !userPassword.length){
      setError("Please enter data")
    } else {
      setError("")
    }
  }

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value)
  }

  const onChangeUserPassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserPassword(e.target.value)
  }
  const onChangeUserLogin = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserLogin(e.target.value)
  }

  const onChangeUserEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserEmail(e.target.value)
  }
  const onChangeUserSurname = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserSurname(e.target.value)
  }


  return (
    <div className="signup-form">
      <form onSubmit={onSubmit}>
        <h3 className="title">Sign Up</h3>
        <div className="column">
          <Input
            type="text"
            callback={onChangeUserLogin}
            value={userLogin}
            name="login"
            placeholder="Enter username..."/>
          <Input
            type="password"
            callback={onChangeUserPassword}
            value={userPassword}
            name="password"
            placeholder="Enter password..."/>
          <Input
            type="email"
            callback={onChangeUserEmail}
            value={userEmail}
            name="email"
            placeholder="Enter email..."/>
          <Input
            type="text"
            callback={onChangeUserName}
            value={userName}
            name="name"
            placeholder="Enter your name..."/>
          <Input
            type="text"
            callback={onChangeUserSurname}
            value={userSurname}
            name="surname"
            placeholder="Enter surname..."/>
          <span>{error}</span>
          <Button text="Sign Up" pink />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;