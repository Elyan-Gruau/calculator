import './button.css';
import KeyUtils from "../../../utils/KeyUtils";
import {useEffect, useState} from 'react';
export default function Button(props){


    const [isActive, setIsActive] = useState(false);
    const code = props.keycode != null ? props.keycode : KeyUtils.showKeyCode(props.symbol);
    let keyCodes = []

    if (!Array.isArray(props.keycode)){
        keyCodes.push(props.keycode)
    }else{
        keyCodes = props.keycode;
    }

    function use(e) {
        props.action(props.symbol);
    }
    useEffect(() => {
        const keyDownHandler = (e) => {
            for (let i = 0; i < keyCodes.length; i++){
                if (keyCodes[i] === e.keyCode) {
                    setIsActive(true);
                    use();
                }
            }
        };

        const keyUpHandler = (e) => {
            for (let i = 0; i < keyCodes.length; i++){
                if (keyCodes[i] === e.keyCode) {
                    setIsActive(false);
                }
            }
        };

        document.addEventListener("keydown", keyDownHandler);
        document.addEventListener("keyup", keyUpHandler);

        // Nettoyage : supprimer les écouteurs d'événements lorsque le composant est démonté
        return () => {
            document.removeEventListener("keydown", keyDownHandler);
            document.removeEventListener("keyup", keyUpHandler);
        };
    }, [code]);

    function handleClick(e) {
        use();
    }

    return (
       <a onClick={handleClick} className={"calculatorButton "+(isActive ? "active" : "") }>{props.symbol}</a>
    );
}
