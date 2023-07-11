import Logo from "../components/Logo";
import FormSignIn from "../components/FormSignIn";
import styled from "styled-components";

export default function SignInPage() {
  return (
    <PageLogin>
      <Logo />
      <FormSignIn />
    </PageLogin>
  );
}

const PageLogin = styled.main`
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
