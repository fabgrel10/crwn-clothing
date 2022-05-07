import SignInForm from '../components/SignInForm/SignInForm';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup
} from '../utils/firebase';
import './Authentication.scss';

const Authentication = () => (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );

export default Authentication;
