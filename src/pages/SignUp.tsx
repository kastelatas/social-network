import React from 'react';
import AuthLayout from "../layouts/AuthLayout";
import SignUpForm from "../components/SignUpForm";

const SignUp = (props: { name: string; }) => {


  return (
    <AuthLayout>
      <div className="sign-up">
        <SignUpForm />
      </div>
    </AuthLayout>
  );
};

export default SignUp;