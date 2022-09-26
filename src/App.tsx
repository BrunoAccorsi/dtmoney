import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global"
import { TransactionsProvider } from './hooks/useTransactions';

export function App() {
  const [modalNewTransactionIsOpen, setModalNewTransactionIsOpen] = useState(false);

  function handleOpenNewTransaction() {
      setModalNewTransactionIsOpen(true);
  }

  function handleCloseNewTransaction() {
      setModalNewTransactionIsOpen(false);
  }


  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransaction}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={modalNewTransactionIsOpen}
        onRequestClose={handleCloseNewTransaction}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}