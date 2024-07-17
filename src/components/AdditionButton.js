
import {useInputContext} from "../providers/InputProvider";



const AdditionButton = () => {

    const {isInt, input,addInputToHistory, setInput} = useInputContext();

    const handleNewInput = () => {
        const trimmedInput =input.trim();

        if(isInt(trimmedInput)){
           // console.log(trimmedInput)
            addInputToHistory(trimmedInput, " + ");

        } else {
            alert("Please enter a whole number");
            setInput("0");
        }
    };

    return (
        <div>
            <button
            onClick={handleNewInput}
            className={"operation-button"}>Add</button>
        </div>
    )
}

export default AdditionButton;