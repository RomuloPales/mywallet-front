import FormSignUp from "../components/FormSignUp";
import Logo from "../components/Logo";
import styled from "styled-components";

export default function SignUp() {
  return (
    <PageSignUp>
      <Logo />
      <FormSignUp />
    </PageSignUp>
  );
}

const PageSignUp = styled.main`
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 303px;
  }
  margin: 0 auto;
`;
