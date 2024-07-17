import {useInputContext} from "../providers/InputProvider";


const DivisionButton = () => {

    const {isInt, input,addInputToHistory, setInput} = useInputContext();

    const handleClick = () => {
        const trimmedInput =input.trim();

        if(isInt(trimmedInput)){
            // console.log(trimmedInput)
            addInputToHistory(trimmedInput, " / ");

        } else {
            alert("Please enter a number");
            setInput("0");
        }
    }
    return (
        <div>
            <button
                onClick={handleClick}
                className={"operation-button"}>Divide</button>
        </div>
    )



}

export default DivisionButton;