import SignUpForm from '../../components/Signupform/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage(props) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm setUser={props.setUser} />
      <LoginForm setUser={props.setUser} />
    </main> 
  );
}