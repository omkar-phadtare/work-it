import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import authContext from '../context/AuthContext';
import "./css/Login.css";


export default function Login() {
  const user = useContext(authContext);

  const[username,setuserName] = useState();
  const[signEmail,setSignEmail] = useState();
  const[newpass,setnewPass] = useState();


  const[tog,setTog] = useState("is-hidden");
  const[togBtn,setTogBtn] = useState("SignUp");
  const[togLogin,setTogLogin] = useState("");

  const handleToggle = () =>{
    if(tog==="is-hidden")
    {
      setTog("");
      setTogBtn("Login");
      setTogLogin("is-hidden");
    }
    else
    {
      setTog("is-hidden");
      setTogBtn("SignUp");
      setTogLogin("");
    }
  }

  const Signup=()=>{

    user.Create();
  }

  //Handle Chang of User SignUp Input Field
  const handleChangeName =(e)=>{
    setuserName(e.target.value);
  }
  const handleChangeEmail =(e)=>{
    setSignEmail(e.target.value);
  }
  const handleChangePass =(e)=>{
    setnewPass(e.target.value);
  }
  return (
    <div className='back'>
      <div className='main-log'>
      {/* <div className='tog-btn-div'>
        <button className='tog-btn' onClick={handleToggle}>{togBtn}</button>
      </div> */}
      <div id="login" className={`${togLogin}`}>
        <h2 className='heading-title'>Login</h2>
      <form action="https://httpbin.org/post" method="POST" className="form login">

<div className="form__field">
  <label for="login__username"><svg className="icon">
    </svg><span className="hidden">Email</span></label>
  <input id="login__username" type="text" name="username" className="form__input" placeholder="Username" required/>
</div>

<div className="form__field">
  <label for="login__password"><svg className="icon">
    </svg><span className="hidden">Password</span></label>
  <input id="login__password" type="password" name="password" className="form__input" placeholder="Password" required/>
</div>

<div className="form__field">
  <input type="submit" value="Log In"/>
</div>

</form>
<p className="para text--center">Not a member? <a href="#" onClick={handleToggle}>Sign up now</a> <svg className="icon">
      </svg></p>

      </div>
      <div className={`sign ${tog}`}>

        <h2 className='heading-title'>SignUp</h2>
        <form action="https://httpbin.org/post" method="POST" className="form login">

        <div className="form__field">
  <label for="login__username"><svg className="icon">
    </svg><span className="hidden">Name</span></label>
  <input onChange={handleChangeName} value={username} id="login__username" type="text" name="username" className="form__input" placeholder="Username" required/>
</div>

<div className="form__field">
  <label for="login__username"><svg className="icon">
    </svg><span className="hidden">Email</span></label>
  <input onChange={handleChangeEmail} value={signEmail} id="login__username" type="text" name="username" className="form__input" placeholder="Email" required/>
</div>

<div className="form__field">
  <label for="login__password"><svg className="icon">
    </svg><span className="hidden">Password</span></label>
  <input onChange={handleChangePass} value={newpass} id="login__password" type="password" name="password" className="form__input" placeholder="Password" required/>
</div>

<div className="form__field">
  <input type="submit" value="Sign Up"/>
</div>

</form>
<p className="para text--center">Back to <a href="#" onClick={handleToggle}>Login</a> <svg className="icon">
      </svg></p>
      </div>
      </div>
    </div>
  )
}
