import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, ButtonCreateAccount } from './style';

import LogoImg from '../assets/imgs/logo.svg';
import HeroesImg from '../assets/imgs/pessoas.svg';
import { Button, Input } from '../style/components';

function App() {
  return (
    <Container>
      <Content>
        <section>
          <img src={LogoImg} alt="Be the Hero" />
          
          <form>
            <h1>Faça seu logon</h1>

            <Input type="text" placeholder="Sua ID" />

            <Button type="submit">Entrar</Button>

            <ButtonCreateAccount>
              <i><FiLogIn /></i>
              <p>Não tenho cadastro</p>
            </ButtonCreateAccount>
          </form>
        </section>
        
        <img src={HeroesImg} alt="Heroes" />
      </Content>
    </Container>
  );
}

export default App;
