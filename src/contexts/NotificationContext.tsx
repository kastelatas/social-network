import React, {useState} from "react";

interface Props {
  children: React.ReactNode;
}
export interface INotification {
  notifications: any,
  setNotifications: any
}


const NotificationContext = React.createContext<Partial<INotification>>({})

const NotificationProvider: React.FC<Props> = ({children}) => {
  const [notifications, setNotifications] = useState<Object>({
    successSignUp: false
  })

  return (
    <NotificationContext.Provider
      value={{notifications, setNotifications}}>
      { children }
    </NotificationContext.Provider>
  )
}

export {
  NotificationContext,
  NotificationProvider
}