
import './App.css';
import InputProvider from "./providers/InputProvider";
import History from './components/History';
import AdditionButton from './components/AdditionButton';
import ResultButton from './components/ResultButton';
import ClearHistoryButton from "./components/ClearHistoryButton";
import SubtractionButton from "./components/SubtractionButton";
import MultiplicationButton from "./components/MultiplicationButton";
import DivisionButton from "./components/DivisionButton";

function App() {
  return (
      <div id={"mainApp"}>
        <h1 className={"main-header"}>Welcome to the best calculator ever!</h1>
        <h2>How to use:</h2>
          <div className="instruction-list-container">
              <ol>
                  <li>Enter a number</li>
                  <li>Click on an operation button (for example: "Add")</li>
                  <li>Enter another number</li>
                  <li>Click on the "Result" button</li>
                  <li>If you wish, you can scroll down and find the "Clear history" button, to clear your calculator's history</li>
              </ol>
          </div>

          <h2>Enjoy!</h2>
          <div id={"calculatorContainer"}>
              <InputProvider>
                  <div className={"buttons-container"}>
                      <AdditionButton/>
                      <SubtractionButton/>
                    <MultiplicationButton/>
                    <DivisionButton/>
                    <ResultButton/>

                </div>
                <div className="history-container-container">
                    <h2 className={"history-header"}>Calculator history</h2>
                    <History />
                    <ClearHistoryButton/>
                </div>

            </InputProvider>
        </div>
      </div>

  );
}

export default App;
