import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {useState} from 'react';

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div>
        <button onClick={() => setShowLogin(true)}>Login</button>
        <button onClick={() => setShowLogin(false)}>Register</button>
      </div>
      {showLogin ? <LoginForm /> : <RegisterForm />}
    </>
  );
};

export default Login;
