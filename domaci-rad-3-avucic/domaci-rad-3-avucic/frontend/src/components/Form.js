import React, { useState } from 'react'
import './Forma.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Form = (props) => {
    const [vrsta, setVrsta] = useState();
    const [opis, setOpis] = useState('');
    const [iznos, setIznos] = useState('');

    const onVrstaChange = (e) => {setVrsta((e.target.value).toString()); console.log(vrsta)}
    const onOpisChange = (e) => { setOpis((e.target.value).toString()); console.log(opis) }
    const onIznosChange = (e) => { setIznos((e.target.value).toString()); console.log(iznos) }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const noviObjekt = {
            vrsta:vrsta,
            opis:opis,
            iznos:iznos
        }

        props.submit(noviObjekt);
    }

    return (
        <div className="okvir">
            <form onSubmit={onFormSubmit}>
                <p>Vrsta transakcije:</p>
                <div className="radios">
                    <div className="odabir">
                        <input id="prihod" type="radio" name="transakcija" value="Prihod" onChange={onVrstaChange}></input>
                        <label for="prihod">Prihod</label>
                    </div>
                    <div className="odabir">
                        <input id="rashod" type="radio" name="transakcija" value="Rashod" onChange={onVrstaChange}></input>
                        <label for="rashod">Rashod</label>
                    </div>
                </div>
                <div className="unos">
                    <div className="odabir">
                        <label for="opis">Opis:</label>
                        <input id="opis" type="text" id="opis" value={opis} onChange={onOpisChange}></input>
                    </div>
                    <div className="odabir">
                        <label for="iznos">Iznos:</label>
                        <input id="iznos" type="text" id="iznos" value={iznos} onChange={onIznosChange}></input>
                    </div>
                </div>
                <div className="tipke">
                    <button id="ok" type="submit">Pohrani</button>
                    <button id="odustani" onClick={props.odustani}>Odustani</button>
                </div>
            </form>
        </div>
    )
}

export default Form
