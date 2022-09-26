import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        switch (transaction.type) {
            case 'income':
                acc.income += transaction.amount;
                acc.balance += transaction.amount;
                break;
            default:
                acc.outcome += transaction.amount;
                acc.balance -= transaction.amount;
                break;
        }

        return acc;
    }, {
        outcome: 0,
        income: 0,
        balance: 0,
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="incomes" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-us', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(summary.income)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="outcomes" />
                </header>
                <strong>
                    -{new Intl.NumberFormat('en-us', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(summary.outcome)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-us', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(summary.balance)}
                 </strong>
            </div>
        </Container>
    );
}