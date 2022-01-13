import React, { useState, useEffect } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormComponent from './components/Form'
import Elementkey from './components/Elementkey.js'
import Transaction from './components/Transaction.js'
import transactionActions from './services/transactions.js'

const App = () => {

    const [showForm, setShowForm] = useState(true);
    const setShowFormHandler = () => {
        setShowForm(!showForm);
    }
    const [transactions, setTransactions] = useState([]);
    
    useEffect(() => {
            transactionActions.dohvatiSve()
            .then(res => setTransactions(res.data))
    }, [])
    const deleteTransaction = (id) => {
      transactionActions.brisi(id)
            .then(response => {
                console.log(response);
                setTransactions(transactions.filter(t => t.id !== id))
            })
    }
    const editTransaction = (id) => {
        const transaction = transactions.find(t => t.id === id)
        let oldValue = transaction.iznos;
        let newValue = prompt(`Unesite novi iznos za ${transaction.opis}:`)

        const modTransaction = {
            ...transaction,
            iznos: newValue == null ? oldValue : newValue
        }

        transactionActions.osvjezi(id, modTransaction)
            .then(response => {
                console.log(response)
                setTransactions(transactions.map(t => t.id !== id ? t : response.data))
            })
    }
    const submit = (objekt) => {
        console.log(objekt)

        transactionActions.stvori(objekt)
            .then(res => {
                setTransactions(transactions.concat(res.data))
            })

        setShowFormHandler();
    }
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let sumIncome = 0;
        let sumOutcome = 0;
        let arrIncome = transactions.filter(t => t.vrsta == 'Prihod');
        let arrOutcome = transactions.filter(t => t.vrsta == 'Rashod');
        arrIncome.forEach(t => sumIncome += Number(t.iznos));
        arrOutcome.forEach(t => sumOutcome += Number(t.iznos));
        setTotal(sumIncome-sumOutcome)
    }, [transactions])

    return (
        <div>
            <Elementkey title="Nova transakcija" klik={setShowFormHandler} />
            {showForm ? <FormComponent odustani={setShowFormHandler} submit={submit} /> : null}
            <div>
            <Elementkey title="Samo prihodi"  />
            <Elementkey title="Samo rashodi"  />
            <Elementkey title="Sve transakcije"/>
            </div>
            <table>
                <thead>
                    <tr>
                        <th className="th">VRSTA</th>
                        <th className="th">DATUM</th>
                        <th className="th">OPIS</th>
                        <th className="th">OPCIJE</th>
                        <th className="th">IZNOS</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(t =>
                        <Transaction key={t.id} vrsta={t.vrsta} datum={t.datum} opis={t.opis} iznos={t.iznos + 'kn'}
                            uredi={() => editTransaction(t.id)}
                            brisi={() => deleteTransaction(t.id)}
                        />)}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td id="td">Ukupno:</td>
                        <td>{total + 'kn'}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default App
