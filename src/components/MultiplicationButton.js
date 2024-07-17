import {useInputContext} from "../providers/InputProvider";

const MultiplicationButton = () => {

    const {isInt, input,addInputToHistory, setInput} = useInputContext();

    const handleNewInput = () => {
        const trimmedInput =input.trim();

        if(isInt(trimmedInput)){
            // console.log(trimmedInput)
            addInputToHistory(trimmedInput, " * ");

        } else {
            alert("Please enter a number");
            setInput("0");
        }
    }

    return (
        <div>
            <button
                onClick={handleNewInput}
                className={"operation-button"}>Multiply</button>
        </div>
    )
}

export default MultiplicationButton;