import SignUpForm from '../../components/Signupform/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({setUser}) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </main> 
  );
}