import React from 'react';

// import { Container } from './styles';

const Contact: React.FC = () => {
  return (
  <>
  <h3>Contato</h3>

  <div>
    <input type="text" placeholder='Seu nome' />
    <input type="text" placeholder='seu telefone' />
    <input type="text" placeholder='seu melor email' />
    <input type="text" placeholder='sua mensagem' />
    <input type="submit" value='Enviar' />
  
    </div>
  
  
  
  </>
    );
}

export default Contact;