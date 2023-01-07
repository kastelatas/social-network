import React, {useEffect} from 'react';
import logging from "../config/logging";
import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/LoginForm";

const Login = (props: { name: string; }) => {

  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  return (
    <AuthLayout>
      <div className="login">
        <LoginForm />
      </div>
    </AuthLayout>
  );
};

export default Login;