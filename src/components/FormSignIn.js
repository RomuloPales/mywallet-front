import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import apiAuth from "../services/apiAuth";
import { useContext, useState } from "react";
import { userContext } from "../context/userContext";

export default function FormSignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setUser } = useContext(userContext);
  
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    apiAuth
      .login(form)
      .then((res) => {
        const { token, name } = res.data;
        
        setUser({ token, name });
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <Form onSubmit={handleLogin}>
      <Input
        name="email"
        type="email"
        placeholder="email"
        value={form.email}
        onChange={handleForm}
      ></Input>
      <Input
        name="password"
        type="password"
        placeholder="Senha"
        value={form.password}
        onChange={handleForm}
      ></Input>
      <Button type="submit">Entrar</Button>
      <span>
        Primeira vez?
        <Link to="/sign-up"> Cadastre-se!</Link>
      </span>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
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
