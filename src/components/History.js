import React, {useState} from "react"
import {useInputContext} from "../providers/InputProvider";

const History = () => {

    const {history} = useInputContext();
    let rowsToReturn;
    if(!history.isEmpty) {
        rowsToReturn = history.map((item, i) => {
            if(i % 5 === 4) {
                return (
                    <span key={i} className={"list-item"}>{item} <br/></span>
                )
            }
            return <span key={i} className={"list-item"}>{item + " "}</span>
        })
    }
    else {rowsToReturn = ""}

    return (
       <div id={"historyContainer"}>
           {
                rowsToReturn
           }
       </div>
    )
}

export default History;