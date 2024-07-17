import {useInputContext} from "../providers/InputProvider";
import React from "react";

const ClearHistoryButton = () => {

    const {setHistory} = useInputContext();
    const handleClick = () => {
        setHistory([]);
    }

    return (
        <div>
            <button
                onClick={handleClick}
                className={"operation-button clear-button"}>Clear History
            </button>
        </div>
    )
}

export default ClearHistoryButton;