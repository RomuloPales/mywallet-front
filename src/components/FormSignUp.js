import { Link } from "react-router-dom";
import styled from "styled-components";
export default function FormSignUp() {
  return (
    <Form>
      <Input type="text" placeholder="Nome"></Input>
      <Input type="email" placeholder="E-mail"></Input>
      <Input type="password" placeholder="Senha"></Input>
      <Input type="password" placeholder="Confirme a senha"></Input>
      <Button>Entrar</Button>
      <Link to="/">Já tem uma conta ? Entre agora!</Link>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  gap: 0.7rem;
  padding: 1rem;
  border-radius: 0.5rem;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
  border: 1px solid #d5d5d5;
  border-radius: 0.3rem;
`;

const Button = styled.button`
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem;
  background-color: #a328d6;
  color: #fff;
  border: none;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
`;
