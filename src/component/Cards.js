import React from 'react'
import gift from './img/3Wft.gif'
import './css/Cards.css'
import { useContext } from 'react'
import authContext  from '../context/AuthContext'
import { useEffect } from 'react'

export default function Cards() {

  const a = useContext(authContext);
  const val = "omkar"
  useEffect(()=>{
    a.update();
    //eslint-disable-next-line
  },[])

  return (
    <div>
        <div class="card card-hover bg-light" style={{Width:"18rem"}}>
  <img src={gift} class="card-img-top" alt="img" style={{height:"18rem"}}/>
  <div class="card-body">
    <p class="card-text">{a.state.uname}Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
  )
}
