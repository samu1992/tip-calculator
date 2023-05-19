import React, { useState ,useRef } from 'react';
const MyForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const [result ,setResult] = useState('');
    const activeInput = useRef(null);


    const calculator = () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];
        return nums.map((item) => {
            return (
                <button key={item} type="button" onClick={() => handleNumButtonClick(item)} className='button_cal'>
                    {item}
                </button>
            );
        });
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleInput2Change = (event) => {
        setInput2Value(event.target.value);
    };
    const handleResultClick = (event) => {
        event.preventDefault();
        const result = (parseFloat(inputValue) * parseFloat(input2Value)) / 100;
        setResult(result);
    };

    const handleNumButtonClick = (num) => {
        if (activeInput.current === 'input1') {
            setInputValue((prevValue) => prevValue + num);
        } else if (activeInput.current === 'input2') {
            setInput2Value((prevValue) => prevValue + num);
        }
    };

    const handleInputFocus = (inputName) => {
        activeInput.current = inputName;
    };

    const resetInput = (event) =>{
        event.preventDefault();
        setInputValue('');
        setInput2Value('');
        setResult('');
    }
    return (
        <main>
            <form className='container_form'>
            <h1>TIP CALCULATOR</h1>
                <input placeholder='Enter Account' type="number" value={inputValue} onChange={handleInputChange} onFocus={() => handleInputFocus('input1')} />
                <input placeholder='Enter Percentage' type="number" value={input2Value} onChange={handleInput2Change} onFocus={() => handleInputFocus('input2')} />
                <div className='nums_container'>
                {calculator()}
                </div>
                <button className='b_result' onClick={handleResultClick}>RESULT</button>
                <button className='b_result' onClick={resetInput}>RESET</button>
            </form>
            <section className='result'><strong>{result}</strong></section>
        </main>
    );
};

export default MyForm;
