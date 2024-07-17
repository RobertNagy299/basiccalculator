import {useInputContext} from "../providers/InputProvider";


const ResultButton = () => {

    const {input, history, addInputToHistory, setInput} = useInputContext();

    const handleResultClick = () => {

       // console.log(history + " from result")
        if (history.length >= 2) {
            let historySize = history.length;
            let firstNum = history[historySize - 2];
            let operation = history[historySize - 1];
            let secondNum = input;
         //   let equalSign = history[historySize - 1];

            let result;
            switch (operation) {
                case " + ": {
                    result = parseInt(firstNum, 10) + parseInt(secondNum, 10);
                }break;
                case " - ": {
                    result = parseInt(firstNum, 10) - parseInt(secondNum, 10);
                }break;
                case " * ": {
                    result = parseInt(firstNum, 10) * parseInt(secondNum, 10);
                }break;
                case " / ": {
                    result = parseInt(firstNum, 10) / parseInt(secondNum, 10);
                }break;
                default: {
                    break;
                }

            }
            addInputToHistory(input, " = ", result);
            setInput("");

        } else {
            alert("Please enter at least two numbers! (enter one, then click on an operation, then enter another number and click on the result button)");
        }
    }
    return (
        <button onClick={handleResultClick}
        className={"operation-button result-button"}>Result</button>
    )



}

export default ResultButton;