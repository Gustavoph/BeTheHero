import React from 'react';
import { FiSkipBack } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button, Input } from '../../style/components';
import { Container, Content } from './style';

export function Register() {
  return (
    <Container>
      <Content>
        <section>
          <div>
            <img src="" alt="" />

            <article>
              <h1>Cadastro</h1>

              <p>
                Faça seu cadastro, entre na plataforma e ajude 
                pessoas a encontrarem os casos da sua ONG
              </p>


              <Link to="/">
                <FiSkipBack />
                Voltar para o logon
              </Link>
            </article>
          </div>

          <form action="">
            <Input placeholder="Nome da ONG" />
            <Input placeholder="E-mail" />
            <Input placeholder="WhatsApp" />
            <Input placeholder="Cidade" />

            <Button>Cadastrar</Button>
          </form>
        </section>
      </Content>
    </Container>
  );
}