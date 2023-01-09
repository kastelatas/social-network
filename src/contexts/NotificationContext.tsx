import React, {useState} from "react";

interface Props {
  children: React.ReactNode;
}

export interface INotifications {
  notifications: any,
  setNotifications: any
}


const NotificationContext = React.createContext<Partial<INotifications>>({})

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