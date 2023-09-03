import PhoneFrame from "./frame";
import { useState } from "react";
import LoginComponent from "./page/login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulasikan login berhasil
    setIsLoggedIn(true);
  };

  return (
    <PhoneFrame />
    // <div>
    //   {!isLoggedIn ? <LoginComponent onLogin={handleLogin} /> : <PhoneFrame />}
    // </div>
  );
}

export default App;
