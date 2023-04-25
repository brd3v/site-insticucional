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
        <Link className='link' to='/main'>Sobre nós</Link>
        <Link className='link' to='/main'>Portifolio</Link>
        <Link className='link' to='/main'>Contato</Link>
      </nav>


  </div>
    );
}

export default Header;