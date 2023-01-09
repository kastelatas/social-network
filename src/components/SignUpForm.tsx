import React, {useContext, useEffect, useState} from 'react';
import Input from "./UI/Input";
import Button from "./UI/Button";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {IUserSignUp, signUp} from "../store/reducers/Auth/AuthActionCreators";
import { useHistory } from 'react-router-dom';
import logging from "../config/logging";
import {ReactNotifications} from "react-notifications-component";
import { Store } from 'react-notifications-component';
import {iNotification} from "react-notifications-component/dist/src/typings";
import {INotification, NotificationContext} from "../contexts/NotificationContext";

const SignUpForm = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const {setNotifications} = useContext(NotificationContext) as INotification

  const {isLoading, user, error: errorMsg} = useAppSelector(state => state.AuthSlice)
  const [userLogin, setUserLogin] = useState<string>("")
  const [userPassword, setUserPassword] = useState<string>("")
  const [userEmail, setUserEmail] = useState<string>("")
  const [userName, setUserName] = useState<string>("")
  const [userSurname, setUserSurname] = useState<string>("")
  const [error, setError] = useState<string>("")

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();


    let isValid: boolean = Boolean(userLogin.length || userPassword.length || userEmail.length || userName.length || userSurname.length)

    if (!isValid){
      setError("Please enter data")
    } else {
      const data: IUserSignUp = {
        username: userLogin,
        password: userPassword,
        email: userEmail,
        firstname: userName,
        lastname: userSurname
      }
      setError("")
      dispatch(signUp(data)).then(res => res).then(user => {
        console.log(user)
        setNotifications({
          successSignUp: true
        })
        // history.push('/login')
      })
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
          <Button text={!isLoading ? "Sign Up" : "LOADING"} pink />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;