import React, {FC, useContext, useEffect} from 'react';
import {INotifications, NotificationContext} from "../contexts/NotificationContext";
import {iNotification} from "react-notifications-component/dist/src/typings";
import {ReactNotifications, Store} from "react-notifications-component";
import {timeOut} from "../utils/timeOut";

const Notification: FC<iNotification> = (props) => {
  const {title, type, insert, container} = props

  const {notifications, setNotifications} = useContext(NotificationContext) as INotifications

  const notification: iNotification = {
    title,
    container,
    type: !type ? "default" : type,
    insert: !insert ? "bottom" : insert,
    animationIn: ["animate__animated animate__fadeIn"],
    animationOut: ["animate__animated animate__fadeOut"]
  };


  useEffect(() => {
    if (notifications.successSignUp) {
      timeOut(1000, () => {
        Store.addNotification({
          ...notification,
        })
        setNotifications(false)
      })
    } else {
      timeOut(10000, () => {
        Store.removeAllNotifications()
      })
    }

  }, [notifications.successSignUp])

  return (
    <ReactNotifications/>
  );
};

export default Notification;