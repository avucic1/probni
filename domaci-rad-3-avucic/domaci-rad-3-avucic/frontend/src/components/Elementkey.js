import React from 'react'
import './ElementKey.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Elementkey = (props) => {
    return (
        <>
            <button onClick={props.klik}>{props.title}</button>
        </>
    )
}

export default Elementkey
