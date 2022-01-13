import React from 'react'
import './Transaction.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Transaction = (props) => {
    return (
        <tr>
            <td>{props.vrsta}</td>
            <td>{props.datum}</td>
            <td>{props.opis}</td>
            <td>
                <button onClick={props.uredi} id="uredi">Uredi</button>
                <button onClick={props.brisi} id="brisi">Briši</button>
            </td>
            <td id="ispis" style={props.vrsta == 'Prihod' ? {backgroundColor:'lightgreen'} : {backgroundColor:'orangered'}}>{props.iznos}</td>
        </tr>
    )
}

export default Transaction
