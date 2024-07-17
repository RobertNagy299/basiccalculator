import {useState, createContext} from "react";
import React from 'react'

const myContext = createContext('');

const InputProvider = ({children}) => {

    const [history  , setHistory] = useState([]);
    const [input, setInput] = useState("");

    const isInt = (value) => {
        return !isNaN(value) &&
            parseInt(Number(value)) == value &&
            !isNaN(parseInt(value, 10));
    }

    const addInputToHistory = (...newInput) => {
        setHistory([...history , ...newInput]);
        //console.log(history)
    }

    return (
        <myContext.Provider value={{history, input, addInputToHistory, setInput, isInt, setHistory}}>
            <input type="text"
                   id={"userInput"}
            placeholder={"Enter a number"}
            value={input}
            onChange={(e) => setInput(e.target.value)}/>
            {children}
        </myContext.Provider>
    )
}
export const useInputContext = () => React.useContext(myContext);
export default InputProvider;