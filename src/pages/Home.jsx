import { useUserContext, useUserToggleContext } from "../contexts/userContext";

export const Home = () => {
  const user = useUserContext();
  console.log(user);
  const handleLogin = useUserToggleContext();
  if (user) {
    return (
      <>
        <button onClick={handleLogin}>Hola</button>
        <h1>{user && <p>Hola {user.name}</p>}</h1>
      </>
    );
  } else {
    return (
      <>
        <button onClick={handleLogin}>Hola</button>
        <h1>Usuario anónimo! Inicie sesión</h1>
      </>
    );
  }
};
