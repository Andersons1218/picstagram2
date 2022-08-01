import SignUpForm from "../../components/Signupform/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main>
      <div className="justify-center">
      </div>
      <div className="grid place-items-center mt-6">
        {showLogin ? (
          <LoginForm setUser={setUser} setShowLogin={setShowLogin} />
        ) : (
          <SignUpForm setUser={setUser} setShowLogin={setShowLogin} />
        )}
      </div>

      <button
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded display-font"
        onClick={() => setShowLogin(!showLogin)}
      >
        {" "}
        {showLogin ? "SIGN UP" : "LOG IN"}
      </button>
    </main>
  );
}

// <main>
//     <h1>AuthPage</h1>
//     <SignUpForm setUser={setUser} />
//     <LoginForm setUser={setUser} />
//   </main>
