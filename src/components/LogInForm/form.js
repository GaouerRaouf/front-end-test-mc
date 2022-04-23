import "./form.css";
function LoginForm({onLogin,onChanging,color}) {
    return (
    <form>
      <h1>Welcome back</h1>
      <p className="welcome-text">Welcome back! Please enter your details.</p>
      <p className="label">Email:</p>
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        className="text-input"
        onChange={onChanging}
      />
      <p className="label">first name:</p>
      <input
        name="firstName"
        type="text"
        placeholder="first name"
        className="text-input"
        onChange={onChanging}
      />
      <p>last name:</p>
      <input
        // type={showPassword? "password":"text"}
        name="lastName"
        placeholder="last name"
        className="text-input"
        onChange={onChanging}
        style={!color? {backgroundColor: "#fff"} : {backgroundColor: "red"}} 
      />     
      <p>confirm last name:</p>
      <input
        // type={showPassword? "password":"text"}
        name="lastName2"
        placeholder="last name"
        className="text-input"
        onChange={onChanging}  
        style={!color? {backgroundColor: "#fff"} : {backgroundColor: "red"}}    
      />     
      <button type="submit" onClick={onLogin}>Log in</button>
    </form>
  );
}
export default LoginForm;