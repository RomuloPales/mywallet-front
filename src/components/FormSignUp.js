import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import apiAuth from "../services/apiAuth";

export default function FormSignUp() {
  const [form, setForm] = useState({email: "", password: ""});
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    apiAuth
      .login(form)
      .then((res) => {
        console.log(res.data );
        // navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });

  }

  return (
    <Form onSubmit={handleSignUp}>
      <Input 
      type="text"
      placeholder="Nome" 
      />
      <Input type="email" placeholder="E-mail" />
      <Input type="password" placeholder="Senha"/>
      <Input type="password" placeholder="Confirme a senha"/>
      <Button>Cadastrar</Button>
      <span>Já tem uma conta? 
              <Link to="/"> Entre agora!</Link>
      </span>
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
