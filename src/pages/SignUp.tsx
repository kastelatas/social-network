import React from 'react';
import AuthLayout from "../layouts/AuthLayout";
import SignUpForm from "../components/SignUpForm";
import {useAppSelector} from "../hooks/redux";

const SignUp = (props: { name: string; }) => {
  const {} = useAppSelector(state => state.AuthSlice)


  return (
    <AuthLayout>
      <div className="sign-up">
        <SignUpForm />
      </div>
    </AuthLayout>
  );
};

export default React.memo(SignUp);