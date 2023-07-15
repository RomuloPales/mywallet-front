import { useContext } from "react";
import styled from "styled-components";
import { userContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import transactionsApi from "../services/transactionsApi";

export default function OutsValue() {
  const [form, setForm] = useState({
    value: "",
    description: "",
    type: "saida",
  });
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handreCreateTransaction(e) {
    e.preventDefault();
    const body = { ...form };
    transactionsApi
      .postTransactions(body, user.token)
      .then((res) => {
        setForm({ value: "", description: "" });
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  return (
    <NewEntryTransaction>
      <Form onSubmit={handreCreateTransaction} type="saida">
        <Title> Nova Saída</Title>
        <Input
          name="value"
          type="value"
          placeholder="valor"
          value={form.value}
          onChange={handleForm}
        ></Input>
        <Input
          name="description"
          type="text"
          placeholder="descrição"
          value={form.description}
          onChange={handleForm}
        ></Input>
        <Button name="saida" type="submit">
          Salvar Saída
        </Button>
      </Form>
    </NewEntryTransaction>
  );
}

const NewEntryTransaction = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
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
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  padding-bottom: 1rem;
`;
