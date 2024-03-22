import './calculator.css';
import Button from "./button/Button";
import Expression from "../../model/Expression";
import {useState} from "react";
export default function Calculator(props){


    const [displayedNumber, setDisplayedNumber] = useState("");
    const [displayedExp, setDisplayedExp] = useState("");
    let expression = new Expression();

    let composedNumber = 0;
    const write = (number) => {
        number = parseInt(number);
        if (composedNumber === 0) {
            composedNumber = number;
        }else{
            composedNumber *= 10
            composedNumber += number
        }
        setDisplayedNumber(composedNumber);
    }

    const writeOperand = (symbol ) => {
        expression.addNumber(composedNumber);
        expression.addOperator(symbol);
        composedNumber = 0;
        setDisplayedExp(expression.toString())
        setDisplayedNumber("")
    }

    const evaluate = (symbol ) => {
        expression.addNumber(composedNumber);
        composedNumber = 0;
        setDisplayedExp(expression.toString())
        setDisplayedNumber(expression.evaluate())

    }

    const reset = () => {
        expression = new Expression();
        composedNumber = 0;
        setDisplayedExp("")
        setDisplayedNumber("")
    }

    return (
        <div className="calculator">
            <div className="result">
                <p id="number"> {displayedNumber}</p>
                <p id="expression">{displayedExp}</p>
            </div>
            <div className="buttons">
                <Button symbol="AC"
                        special={true}
                        action={reset}/>
                <Button symbol="<-"
                        keycode={8}
                        special={true}/>
                <Button symbol="^"
                        keycode={221}
                        special={true}
                        action={writeOperand}/>
                <Button symbol="/"
                        keycode={111}
                        special={true}
                        action={writeOperand}/>
                <Button symbol="7"
                        keycode={103}
                        action={write}/>
                <Button symbol="8"
                        keycode={104}
                        action={write}/>
                <Button symbol="9"
                        keycode={105}
                        action={write}/>
                <Button symbol="x"
                        keycode={106}
                        action={writeOperand}/>
                <Button symbol="4"
                        keycode={100}
                        action={write}/>
                <Button symbol="5"
                        keycode={101}
                        action={write}/>
                <Button symbol="6"
                        keycode={102}
                        action={write}/>
                <Button symbol="-"
                        keycode={109}
                        action={writeOperand}/>
                <Button symbol="1"
                        keycode={97}
                        action={write}/>
                <Button symbol="2"
                        keycode={98}
                        action={write}/>
                <Button symbol="3"
                        keycode={99}
                        action={write}/>
                <Button symbol="+"
                        keycode={107}
                        special={true}
                        action={writeOperand}/>
                <Button symbol="+/-"/>
                <Button symbol="0"
                        keycode={96}
                        action={write}/>
                <Button symbol="."
                        keycode={[188,110]}/>
                <Button symbol="="
                        keycode={[187,13]}
                        action={evaluate}/>
            </div>
        </div>
    )
}