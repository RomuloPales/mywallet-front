import styled from "styled-components";
import {
  logOutOutline,
  addCircleOutline,
  removeCircleOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import { userContext } from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import transactionsApi from "../services/transactionsApi";

export default function Home() {
  const { user } = useContext(userContext);
  const [transactions, setTransactions] = useState([]);
  // const [tipo, setTipo] = useState("entrada");

  useEffect(() => {
    getTransactionsList();
  });
  

  function getTransactionsList() {
    transactionsApi
      .getTransactions(user.token)
      .then((res) => {
        const transactions = res.data;
        setTransactions(transactions.transactions);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  function ListTransactions({ transaction, value, date, description }) {
    const formattedDate = date ? date.split("/").slice(0, 2).join("/") : "";
    return (
      <ul>
        <li>
          <div>
            <span>{formattedDate}</span>
            <span>{description} </span>
          </div>
          <Value transaction={transaction}> {value}</Value>
        </li>
      </ul>
    );
  }
  function somaTransactions() {
    let soma = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === "entrada") {
        soma += parseFloat(transaction.value);
      } else {
        soma -= parseFloat(transaction.value);
      }
    });
    return soma.toFixed(2);
  }
  const saldo = somaTransactions();
  const reversedTransactions = [...transactions].reverse();
  return (
    <MainHome>
      <header>
        <h1>Olá, {user.name}</h1>
        <Link to="/">
          <IonIcon icon={logOutOutline} />
        </Link>
      </header>
      <TransactionList>
        {reversedTransactions.map((transaction) => (
          <ListTransactions
            key={transaction.id}
            transaction={transaction.type}
            value={transaction.value}
            date={transaction.createAt}
            description={transaction.description}
          />
        ))}
        <ListTransactions />
        <article>
          <span>SALDO</span>
          <Saldo saldo={saldo}>R$ {saldo}</Saldo>
        </article>
      </TransactionList>

      <section>
        <StyledLinkButton to="/newentry">
          <IonIcon icon={addCircleOutline} />
          <span>Nova Entrada</span>
        </StyledLinkButton>
        <StyledLinkButton to="/newOutPut">
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  padding-bottom: 3rem;
  height: 100%;
  position: relative;
  overflow: scroll;
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
  ul {
  }
  ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  ul li div span {
    color: #c6c6c6;
    margin-right: 0.7rem;
    font-size: 16px;
  }
  ul li div span:nth-child(2) {
    color: #000000;
  }
  article {
    margin-top: auto;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 17px;
    margin-top: auto;
    top: 0;
    z-index: 1;
  }
`;
const Saldo = styled.span`
  font-weight: 400;
  color: ${(props) => (props.saldo >= 0 ? "#008000" : "	#FF0000")};
  font-weight: 700;
`;

const Value = styled.div`
  color: ${(props) =>
    props.transaction === "entrada" ? "#008000" : "	#FF0000"};
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
