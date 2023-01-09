import React, {FC} from 'react';
import Header from "../components/Header";

interface IAuthLayout {
  children: React.ReactNode
}

const AuthLayout: FC<IAuthLayout> = (props) => {
  const {children} = props

  return (
    <div className="auth-layout">
      <Header/>
      { children }
    </div>
  );
};

export default AuthLayout;