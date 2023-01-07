import React from 'react';
import Header from "../components/Header";

interface IAuthLayout {
  children: React.ReactNode
}

const AuthLayout = (props : IAuthLayout) => {
  return (
    <div className="auth-layout">
      <Header/>
      { props?.children }
    </div>
  );
};

export default AuthLayout;