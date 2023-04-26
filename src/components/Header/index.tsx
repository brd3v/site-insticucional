import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
// import { Container } from './styles';

const Header: React.FC = () => {
  return (
  <div className='Header'>
      <div className='logo'><h2> Escola Saber</h2></div>
      <nav className='menu'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/sobre'>Sobre nós</Link>
      
        <Link className='link' to='/contato'>Contato</Link>
      </nav>


  </div>
    );
}

export default Header;