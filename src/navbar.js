import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [show, setShow] = useState(false);
  return (
    <>
    <section className='navbar-bg'>
        <nav  className="navbar navbar-expand-lg navbar-light ">
  <div  className="container">
    <NavLink  className="navbar-brand" to="/">DailyPay</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContenst" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick ={() => setShow(!show)}>
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className={`collapse navbar-collapse  ${show ? "show" : "" }` }>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li  className="nav-item">
          <NavLink  className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className="nav-link" to="/service">Services</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className="nav-link" to="/about">About</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className="nav-link" to="/contact">Contact</NavLink>
        </li> 
      </ul>
      <form  className="d-flex">
        <button  className="btn btn-style " type="submit">Sign Up</button>
        <button  className="btn btn-style btn-style-border" type="submit">Log in</button>

      </form>
    </div>
  </div>
</nav>
</section>
    </>
  )
}

export default Navbar;