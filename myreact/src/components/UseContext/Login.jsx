import React, { useContext } from 'react';
import { AuthContext } from '../UseContext/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
