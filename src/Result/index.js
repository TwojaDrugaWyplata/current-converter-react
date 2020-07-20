import React from 'react';
import "./style.css"

const Result = ({ result }) => {
    return result && <p className="result">{result}</p>
}
export default Result;