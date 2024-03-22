import './calculator.css';
import Button from "./button/Button";
export default function Calculator(props){
    return (
        <div className="calculator">
            <div className="result">
                <p id="number"> 24</p>
                <p id="expression">12+8+79+</p>
            </div>
            <div className="buttons">
                <Button symbol="AC"   special={true}/>
                <Button symbol="<-"  keycode={8} special={true}/>
                <Button symbol="^"  keycode={221} special={true}/>
                <Button symbol="/" keycode={111} special={true}/>
                <Button symbol="7"  keycode={103}/>
                <Button symbol="8"  keycode={104}/>
                <Button symbol="9"  keycode={105}/>
                <Button symbol="x" keycode={106}/>
                <Button symbol="4" keycode={100}/>
                <Button symbol="5" keycode={101}/>
                <Button symbol="6" keycode={102}/>
                <Button symbol="-" keycode={109}/>
                <Button symbol="1" keycode={97}/>
                <Button symbol="2"  keycode={98}/>
                <Button symbol="3"  keycode={99}/>
                <Button symbol="+"  keycode={107}  special={true}/>
                <Button symbol="+/-"/>
                <Button symbol="0" keycode={96}/>
                <Button symbol="." keycode={[188,110]}/>
                <Button symbol="="  keycode={[187,13]}/>
            </div>
        </div>
    )
}