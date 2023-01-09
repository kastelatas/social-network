import React, {FC, useState} from 'react';
import Input from "./UI/Input";
import Button from "./UI/Button";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {login} from "../store/reducers/Auth/AuthActionCreators";
import {useHistory} from "react-router-dom";

const LoginForm: FC = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const {isLoading} = useAppSelector(state => state.AuthSlice)
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
      let data = {
        username: userName,
        password: userPassword
      }
      dispatch(login(data)).then(res => res).then(user => {
        history.push('/')
      })
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
          <Button text={!isLoading ? "Login" : "LOADING"} pink/>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;