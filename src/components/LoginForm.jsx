import {useUserContext} from '../hooks/contextHooks';
import useForm from '../hooks/formHooks';

const LoginForm = () => {
  const initValues = {
    username: '',
    password: '',
  };

  const {handleLogin} = useUserContext();

  const doLogin = async () => {
    try {
      await handleLogin(inputs);
    } catch (e) {
      alert(e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues,
  );

  console.log(inputs);

  return (
    <div className="flex min-h-screen items-center justify-center bg-sky-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg bg-sky-500 p-6 shadow-md"
      >
        <h1 className="mb-4 text-center text-2xl font-bold">Login</h1>

        <div className="mb-4">
          <label htmlFor="loginuser" className="block text-gray-700">
            Username
          </label>
          <input
            id="loginuser"
            name="username"
            type="text"
            className="mt-2 w-full rounded border border-gray-300 p-2"
            value={inputs.username}
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="loginpassword" className="block text-gray-700">
            Password
          </label>
          <input
            id="loginpassword"
            name="password"
            type="password"
            className="mt-2 w-full rounded border border-gray-300 p-2"
            value={inputs.password}
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
