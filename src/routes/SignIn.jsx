import { signInWithGooglePopup } from '../utils/firebase';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button type="button" onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
    </div>
  );
};

export default SignIn;
