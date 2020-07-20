import React, { useState } from 'react';
import "./style.css"

const Form = ({ calculateResult }) => {
    const [amount, setAmount] = useState("");
    const [firstCurrency, setFirstCurrency] = useState("");
    const [secondCurrency, setSecondCurrency] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, firstCurrency, secondCurrency);
    }
    return (
        <form onSubmit={onFormSubmit} className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Wymień walutę</legend>
                <label className="form__label">
                    <span className="form__labelText">Kwota:</span>
                    <input
                        required
                        type="number"
                        step="0.01"
                        min="1"
                        max="999999"
                        className="form__input"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </label>
                <label className="form__label">
                    <span className="form__labelText">Posiadana waluta:</span>
                    <select
                        className="form__select"
                        value={firstCurrency}
                        onChange={({ target }) => setFirstCurrency(target.value)}
                    >
                        <option></option>
                        <option>PLN</option>
                        <option>EUR</option>
                        <option>USD</option>
                        <option>HPC</option>
                    </select>
                </label>
                <label className="form__label">
                    <span className="form__labelText">Oczekiwana waluta:</span>
                    <select
                        className="form__select"
                        value={secondCurrency}
                        onChange={({ target }) => setSecondCurrency(target.value)}
                    >
                        <option></option>
                        <option>PLN</option>
                        <option>EUR</option>
                        <option>USD</option>
                        <option>HPC</option>
                    </select>
                </label>
                <button className="form__button">Wymień</button>
            </fieldset>
        </form>
    )
}
export default Form;