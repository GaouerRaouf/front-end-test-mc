import "./form.css";
import {useState}from 'react'
function LoginForm({onLogin,onChanging,color}) {
  const [showPassword, setShowPassword]=useState(false)
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
       type={showPassword? "text":"password"}
        name="lastName"
        placeholder="last name"
        className="text-input"
        onChange={onChanging}
        style={!color? {backgroundColor: "#fff"} : {backgroundColor: "red"}} 
      />     
      <p>confirm last name:</p>
      <input
       type={showPassword? "test":"password"}
        name="lastName2"
        placeholder="last name"
        className="text-input"
        onChange={onChanging}  
        style={!color? {backgroundColor: "#fff"} : {backgroundColor: "red"}}    
      />  {showPassword? <p style={{color:"purple",fontWeight: "bold"}} onClick={()=> setShowPassword(!showPassword)}>hide Password</p> : <p style={{color:"purple",fontWeight: "bold"}} onClick={()=> setShowPassword(!showPassword)}>Show Password</p>  }   
      <button type="submit" onClick={onLogin}>Log in</button>
    </form>
  );
}
export default LoginForm;