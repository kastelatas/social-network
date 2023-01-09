import React, {FC, useState} from 'react';
import Input from "./UI/Input";
import Button from "./UI/Button";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {login} from "../store/reducers/Auth/AuthActionCreators";

const LoginForm: FC = () => {
  const dispatch = useAppDispatch()
  const userState = useAppSelector(state => state.AuthSlice.user)
  const [userName, setUserName] = useState<string>("")
  const [userPassword, setUserPassword] = useState<string>("")
  const [error, setError] = useState<string>("")

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!userName.length || !userPassword.length) {
      setError("Please enter password or username")
      return
    } else {
      setError("")
      dispatch(login({
        username: userName,
        password: userPassword
      }))
    }

  }

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value)
  }

  const onChangeUserPassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserPassword(e.target.value)
  }

  return (
    <div className="login-form">
      {userState.firstname} <br/>
      {userState.lastname}
      <form onSubmit={onSubmit}>
        <h3 className="title">Login</h3>
        <div className="column">
          <Input
            type="text"
            callback={onChangeUserName}
            value={userName}
            name="login"
            placeholder="Enter username..."/>
          <Input
            type="password"
            callback={onChangeUserPassword}
            value={userPassword}
            name="password"
            placeholder="Enter password..."/>
          <span>{error}</span>
          <Button text="Login" pink/>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;