import {useInputContext} from "../providers/InputProvider";


const SubtractionButton = () => {

    const {isInt, input,addInputToHistory, setInput} = useInputContext();

    const handleClick = () => {
        const trimmedInput =input.trim();

        if(isInt(trimmedInput)){
            // console.log(trimmedInput)
            addInputToHistory(trimmedInput, " - ");

        } else {
            alert("Please enter a whole number");
            setInput("0");
        }
    }
    return (
        <div>
            <button
                onClick={handleClick}
                className={"operation-button"}>Subtract</button>
        </div>
    )



}

export default SubtractionButton;