import React from 'react';
import Header from "../components/Header";

interface IAuthLayout {
  children: React.ReactNode
}

const AuthLayout = (props : IAuthLayout) => {
  const {children} = props
  return (
    <div className="auth-layout">
      <Header/>
      { children }
    </div>
  );
};

export default AuthLayout;