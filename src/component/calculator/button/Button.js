import './button.css';
import KeyUtils from "../../../utils/KeyUtils";
import {useEffect, useState} from 'react';
export default function Button(props){


    const [isActive, setIsActive] = useState(false);
    const code = props.keycode != null ? props.keycode : KeyUtils.showKeyCode(props.symbol);

    useEffect(() => {
        const keyDownHandler = (e) => {
            if (code === e.keyCode) {
                setIsActive(true);
            }
        };

        const keyUpHandler = (e) => {
            if (code === e.keyCode) {
                setIsActive(false);
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
        if (code === e.keyCode) {
            setIsActive(current => !current);
        }
    }

    return (
       <a onClick={handleClick} className={"calculatorButton "+(isActive ? "active" : "") }>{props.symbol}</a>
    );
}
