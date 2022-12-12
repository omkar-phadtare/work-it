import React from 'react'
import NavComp from './NavComp'

import Cards from './Cards';
import HeaderC from './HeaderC';
import Footer from './Footer';
import "./css/UserHome.css"

export default function UserHome() {
  return (
    <div>
      <div className="carosel-div">
      <NavComp/>
      </div>
      
      <HeaderC/>
<div class="cards text-center">
  <div class="row gx-5 ">
    <div class="col-md-4">
     <div class="border space bg-light"><Cards/></div>
    </div>
    <div class="col-md-4">
      <div class="border space bg-light"><Cards/></div>
    </div>
    <div class="col-md-4">
     <div class=" border space bg-light"><Cards/></div>
    </div>
    <div class="col-md-4">
     <div class=" border space bg-light"><Cards/></div>
    </div>
  </div>
</div>

<div className='footer'>
<Footer/>
</div>
</div>
    
  )
}
