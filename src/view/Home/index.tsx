import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content } from './style';
import LogoImg from '../../assets/imgs/logo.svg';
import HeroesImg from '../../assets/imgs/pessoas.svg';
import { Button, Input } from '../../style/components';

export function Home() {
  return (
    <Container>
      <Content>
        <section>
          <img src={LogoImg} alt="Be the Hero" />
          
          <form>
            <h1>Faça seu logon</h1>

            <Input type="text" placeholder="Sua ID" />

            <Button type="submit">Entrar</Button>

            <Link to="/register">
              <FiLogIn />
              Não tenho cadastro
            </Link>
          </form>
        </section>
        
        <img src={HeroesImg} alt="Heroes" />
      </Content>
    </Container>
  );
}

