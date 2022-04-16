import SignUpForm from '../components/SignUpForm/SignUpForm';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../utils/firebase';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button type="button" onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
