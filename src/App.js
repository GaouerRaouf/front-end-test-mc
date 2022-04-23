import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LogInForm/form";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" });
  const [wrongPassword, setWrongPassword] = useState(false);
  useEffect(() => {
    fetch("https://www.mecallapi.com/api/users")
      .then((res) => res.json())
      .then((data) => setData(data));
      
  }, []);
  const loginHandler = (e) => {
    e.preventDefault();
    const logedUser = data.find(
      (e) =>
        e.username === user.email &&
        e.fname === user.firstName &&
        e.lname === user.lastName
    );
    if (user.lastName2 !== user.lastName) {
      setWrongPassword(true);
    }
    if (logedUser !== undefined && user.lastName2 === user.lastName) {
      setLogin(true);
      let loggedUserName = user.firstName+user.lastName
      console.log(logedUser);
      setTimeout(() => {setUser({ firstName: "", lastName: "", email: "" });}, "3000")
    }
  };
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const logOutHandler = () => {
    setLogin(false);
  };
  return (
    <div className="App">
      <ul>
        <li>Untitled UI</li>
      </ul>
      {!login ? (
        <LoginForm onLogin={loginHandler} onChanging={changeHandler} color={wrongPassword} />
      ) : (
        <div style={{ textAlign: "center", width: "50%", margin: "auto" }}>
          <h1>hello {loggedUserName}</h1> <button onClick={logOutHandler}>log out</button>
        </div>
      )}
    </div>
  );
}

export default App;
