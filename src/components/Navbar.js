import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
      <nav className='navbar'></nav>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TRVLR <i class="fa-solid fa-plane"/>
        </Link>
        <div className='menu-icon'>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
