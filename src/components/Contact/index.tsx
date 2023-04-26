import React from 'react';

// import { Container } from './styles';

const Contact: React.FC = () => {
  console.log('hello world')
  const name = document.getElementById('name')
  const msg = document.getElementById('msg')
  const tel = document.getElementById('tel')
  const email = document.getElementById('email')

  function click(){
    event.preventDefault();
    const msg = document.getElementById('msg').value
    console.log(msg)
    const name = document.getElementById('name').value
    console.log(name)
    const tel = document.getElementById('tel').value
    console.log(tel)
    const email = document.getElementById('email').value
    console.log(email)





  }




  return (
  <>
  <h3>Contato</h3>

  <div>
    <input id='name' type="text" placeholder='Seu nome' />
    <input id='tel' type="number" placeholder='seu telefone' />
    <input id='email' type="email" placeholder='seu melor email' />
    <input id='msg' type="text" placeholder='sua mensagem' />
    <input type="submit" onClick={click} value='Enviar' />
  
    </div>
  
  
  
  </>
    );
}

export default Contact;