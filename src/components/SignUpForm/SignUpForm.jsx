import { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = event => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

  };

  return (
    <form onSubmit={() => {}}>
      <label htmlFor="name">
        Display Name:
        <input
          type="text"
          name="displayName"
          required
          onChange={handleChange}
          value={displayName}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="text"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />
      </label>
      <label htmlFor="confirmPassword">
        Confirm Password:
        <input
          type="text"
          name="confirmPassword"
          required
          onChange={handleChange}
          value={confirmPassword}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
