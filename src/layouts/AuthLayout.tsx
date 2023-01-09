import React, {FC, useContext, useEffect} from 'react';
import Header from "../components/Header";
import {NotificationContext, INotifications} from "../contexts/NotificationContext";
import {Store, ReactNotifications} from "react-notifications-component";
import {iNotification} from "react-notifications-component/dist/src/typings";

interface IAuthLayout {
  children: React.ReactNode
}

const AuthLayout: FC<any> = (props : IAuthLayout) => {
  const {children} = props

  const {notifications} = useContext(NotificationContext) as INotifications

  const notification: iNotification = {
    title: "Registration completed successfully!",
    type: "default",
    insert: "bottom",
    container: "bottom-right",
    animationIn: ["animate__animated animate__fadeIn"],
    animationOut: ["animate__animated animate__fadeOut"]
  };


  useEffect(() => {
    if (notifications.successSignUp) {
      Store.addNotification({
        ...notification,
      })
    }
  }, [notifications.successSignUp])

  return (
    <div className="auth-layout">
      <ReactNotifications/>
      <Header/>
      { children }
    </div>
  );
};

export default AuthLayout;