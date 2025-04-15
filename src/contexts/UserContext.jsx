import {createContext, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {postLogin} = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();

  // login, logout and autologin functions are here instead of components
  const handleLogin = async (credentials) => {
    try {
      console.log('Login funktiota kutsuttu');
      console.log(credentials);
      const loginResult = await postLogin(credentials);
      localStorage.setItem('token', loginResult.token);
      navigate('/');
      console.log('User: ' + loginResult.user);
      setUser(loginResult.user);
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const handleLogout = () => {
    try {
      console.log('Logout funktiota kutsuttu');
      localStorage.removeItem('token');
      setUser(null);
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
  const handleAutoLogin = async () => {
    try {
      console.log('AutoLogin funktiota kutsuttu');
      const token = window.localStorage.getItem('token');
      if (!token) {
        return;
      }
      const userResult = await getUserByToken(token);
      console.log('userResult: ', userResult);
      if (!userResult) {
        return;
      }
      setUser(userResult);
      console.log('User: ' + userResult);
      navigate('/');
    } catch (e) {
      //if token not valid
      handleLogout();
      console.log(e.message);
    }
  };

  return (
    <UserContext.Provider
      value={{user, handleLogin, handleLogout, handleAutoLogin}}
    >
      {children}
    </UserContext.Provider>
  );
};
export {UserProvider, UserContext};
