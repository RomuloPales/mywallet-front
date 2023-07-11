import styled from "styled-components";
import {
  logOutOutline,
  addCircleOutline,
  removeCircleOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <MainHome>
      <header>
        <h1>Olá, Rômulo</h1>
        <IonIcon icon={logOutOutline} />
      </header>
      <TransactionList>
        <ul>
          <li>
            <div>
              <span>30/08</span>
              <span>comida</span>
            </div>
            <Value> 25.0</Value>
          </li>
          <li>
            <div>
              <span>25/12</span>
              <span>viagem</span>
            </div>
            <Value> 2500.0</Value>
          </li>
          <li>
            <div>
              <span>01/01</span>
              <span>trabalho</span>
            </div>
            <Value> 1250.0</Value>
          </li>
        </ul>
        <article>
          <span>SALDO</span>
          <span>R$ 50000</span>
        </article>
      </TransactionList>
      <section>
        <StyledLinkButton to="/newentry">
          <IonIcon icon={addCircleOutline} />
          <span>Nova Entrada</span>
        </StyledLinkButton>
        <StyledLinkButton to="/newOut">
          <IonIcon icon={removeCircleOutline} />
          <span>Nova Saída</span>
        </StyledLinkButton>
      </section>
    </MainHome>
  );
}

const MainHome = styled.main`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  header {
    display: flex;
    justify-content: space-between;
    font-family: "Raleway", sans-serif;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  ion-icon {
    font-size: 2rem;
  }
  section {
    display: flex;
    justify-content: space-between;
  }
`;

const TransactionList = styled.article`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  height: 450px;
  line-height: 18.78px;
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  ul li div span {
    color: #c6c6c6;
    margin-right: 0.7rem;
  }
  ul li div span:nth-child(2) {
    color: #000000;
  }
  article {
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
  }
  article > span:nth-child(2) {
    color: green;
    font-weight: 400;
  }
`;

const Value = styled.div`
  color: green;
`;

const StyledLinkButton = styled(Link)`
  background-color: red;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  outline: none;
  border: none;
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #a328d6;
  padding: 0.5rem;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  width: 165px;
  height: 120px;
  span {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    white-space: pre-wrap;
  }
`;
