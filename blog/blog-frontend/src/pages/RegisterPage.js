import AuthTemplate from '../components/auth/AuthTemplate';
// import AuthForm from '../components/auth/AuthForm';
import RegisterForm from '../containers/auth/RegisterForm';
import React from 'react';

const RegisterPage = () => {
  return(
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  )
};

export default RegisterPage;
