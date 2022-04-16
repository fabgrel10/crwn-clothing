import { useState } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
