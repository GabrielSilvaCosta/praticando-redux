// src/App.tsx
import { ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/actions";

function App() {
  type RootState = {
    password: ReactNode;
    email: ReactNode;
    rootState: {
      email: string;
      password: number;
    };
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const rootState = useSelector((state: RootState) => state);

  const handleLogin = () => {
    dispatch(login(email, Number(password)));
  };

  return (
    <div className="App">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      {/*leitura do estado global */}
      <div>
        <h1>Informação do usuario</h1>
        <p>Email: {rootState.email}</p>
        <p>Password: {rootState.password}</p>
      </div>
    </div>
  );
}

export default App;
