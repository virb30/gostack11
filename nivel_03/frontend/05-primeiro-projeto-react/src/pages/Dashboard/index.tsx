import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/39314011?s=460&u=8108192c8de1909599bc482bf435acb756630003&v=4"
            alt="Vinícius Bôscoa"
          />
          <div>
            <strong>virb30/gostack11</strong>
            <p>Códigos das aulas - Bootcamp GoStack 11</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/39314011?s=460&u=8108192c8de1909599bc482bf435acb756630003&v=4"
            alt="Vinícius Bôscoa"
          />
          <div>
            <strong>virb30/gostack11</strong>
            <p>Códigos das aulas - Bootcamp GoStack 11</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/39314011?s=460&u=8108192c8de1909599bc482bf435acb756630003&v=4"
            alt="Vinícius Bôscoa"
          />
          <div>
            <strong>virb30/gostack11</strong>
            <p>Códigos das aulas - Bootcamp GoStack 11</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
