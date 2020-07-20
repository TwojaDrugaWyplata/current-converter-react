import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import FormContainer from "./FormContainer";
import Form from "./Form";
import Result from "./Result";

const App = () => {
    const [result, setResult] = useState("");
    const calculateResult = (amount, firstCurrency, secondCurrency) => {
        const eur = 4.48;
        const usd = 3.92;
        const hpc = 0.01580432;
        let valueInPLN;
        let resultValue;
        switch (firstCurrency) {
            case "PLN":
                valueInPLN = amount;
                break;
            case "USD":
                valueInPLN = amount * usd;
                break;
            case "EUR":
                valueInPLN = amount * eur;
                break;
            case "HPC":
                valueInPLN = amount * hpc;
                break;
            default:
        }
        switch (secondCurrency) {
            case "PLN":
                resultValue = valueInPLN;
                break;
            case "USD":
                resultValue = valueInPLN / usd;
                break;
            case "EUR":
                resultValue = valueInPLN / eur;
                break;
            case "HPC":
                resultValue = valueInPLN / hpc;
                break;
            default:
        }
        setResult(
            `Otrzymujesz 
            ${resultValue.toFixed(2)} 
            ${secondCurrency}. 
            Nie wydawaj za dużo :)`
        );
    }

    return (
        <>
            <Header />
            <FormContainer>
                <Form calculateResult={calculateResult} />
                <Result result={result} />
            </FormContainer>
            <Footer />
        </>
    );
}

export default App;
