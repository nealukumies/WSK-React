import {useUser} from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';
import TextInput from './ui/TextInput';

const RegisterForm = () => {
  const {postUser} = useUser();

  const initValues = {
    username: '',
    password: '',
    email: '',
  };

  const doRegister = async () => {
    console.log('Register function triggered');
    console.log(inputs);
    await postUser(inputs);
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    initValues,
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-sky-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg bg-sky-500 p-6 shadow-md"
      >
        <h1 className="mb-6 text-center text-2xl font-bold">Register</h1>

        <TextInput
          label="Username"
          name="username"
          type="text"
          id="registeruser"
          value={inputs.username}
          onChange={handleInputChange}
          autoComplete="username"
        />

        <TextInput
          label="Email"
          name="email"
          type="email"
          id="registeremail"
          value={inputs.email}
          onChange={handleInputChange}
          autoComplete="email"
        />

        <TextInput
          label="Password"
          name="password"
          type="password"
          id="registerpassword"
          value={inputs.password}
          onChange={handleInputChange}
          autoComplete="current-password"
        />

        <button
          type="submit"
          className="mt-4 w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
