import styled from "styled-components";

export default function Logo() {
  return (
    <div>
      <LogoPage>
        <header>
            MyWallet
        </header>
        
      </LogoPage>
    </div>
  );
}

const LogoPage = styled.main`
    justify-content: center;

    display: flex;
    header{
    color: #ffffff;
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 27px;
    }
    `;