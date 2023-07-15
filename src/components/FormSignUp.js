import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import apiAuth from "../services/apiAuth";

export default function FormSignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });
  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSignUp = (e) => {
    e.preventDefault();

    const { passwordConfirmation, ...formData } = form;

    if (form.password === form.passwordConfirmation) {
      apiAuth
        .signUp(formData)
        .then((res) => {
          alert("Cadastro realizado com sucesso!")
          navigate("/");
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } else {
     alert("Senhas não correspondem!");
    }
  };

  return (
    <Form onSubmit={handleSignUp}>
      <Input
        name="name"
        type="text"
        placeholder="Nome"
        value={form.name}
        onChange={handleForm}
      />
      <Input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleForm}
      />
      <Input
        name="password"
        type="password"
        placeholder="Senha"
        value={form.password}
        onChange={handleForm}
      />
      <Input
        name="passwordConfirmation"
        type="password"
        placeholder="Confirme a senha"
        value={form.passwordConfirmation}
        onChange={handleForm}
      />
      <Button type="submit">Cadastrar</Button>
      <span>
        Já tem uma conta?
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
