import React, {useEffect} from 'react';
import AuthLayout from "../layouts/AuthLayout";
import logging from "../config/logging";
import SignUpForm from "../components/SignUpForm";

const SignUp = (props: { name: string; }) => {

  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  return (
    <AuthLayout>
      <div className="sign-up">
        <SignUpForm />
      </div>
    </AuthLayout>
  );
};

export default SignUp;