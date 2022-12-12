import React, { useState } from 'react';
import './css/NavComp.css';
import chess from './img/chess.png'
export default function NavComp() {
  const[user,setUser] = useState("no");
  const[tog,settog] = useState("")

  const handleLogin=()=>{
    if(user==='no')
  {
    setUser('yes');
    settog("visually-hidden");
  }
  }

  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand pe-3 brand" href="/UserHome">Work<span>It</span></a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item pe-3">
          <a class="nav-link active home" aria-current="page" href="/UserHome">Home</a>
        </li>
        <li class="nav-item pe-3">
          <a class="nav-link active" href="/UserHome">some</a>
        </li>
        <li class="nav-item pe-3">
          <a class="nav-link active" href="/UserHome">some</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-4" type="search" placeholder="Search" aria-label="Search"/>
      </form>
      <button class={`btn me-3 ${tog}`} type="submit" onClick={handleLogin}><span>Login</span></button>
      <button class={`btn btn-outline-secondary me-3 ${tog}`} type="submit"><span>SignUp</span></button>
      <button class="btn btn-outline-light me-3 bg-success" type="submit"><span>Hire Order</span></button>

    </div>
  </div>
</nav>
<div className='bottom-nav'>
<ul class="nav p-1 justify-content-center">
  <li class="nav-item p-2">
    <a class="nav-link active" aria-current="page" href="/UserHome">Active</a>
  </li>
  <li class="nav-item p-2">
    <a class="nav-link" href="/UserHome">Makeup</a>
  </li>
  <li class="nav-item p-2">
    <a class="nav-link" href="/UserHome">Design</a>
  </li>
  <li class="nav-item p-2">
    <a class="nav-link" href="/UserHome">Artist</a>
  </li>
  <li class="nav-item p-2">
    <a class="nav-link" href="/UserHome">Teacher</a>
  </li>
  <li class="nav-item p-2">
    <a class="nav-link" href="/UserHome">House Keeping</a>
  </li>
  <li class="nav-item p-2">
    <a class="nav-link" href="/UserHome">Electrician</a>
  </li>
  <li class="nav-item p-2">
    <a class="nav-link" href="/UserHome">Carpenter</a>
  </li>
  <li class="nav-item p-2">
    <a class="nav-link" href="/UserHome">Driver</a>
  </li>
</ul>
</div>
  </div>
  )
}
