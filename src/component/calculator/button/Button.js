import './button.css';
import KeyUtils from "../../../utils/KeyUtils";
import {useEffect, useRef, useState} from 'react';

export default function Button(props){


    const [isActive, setIsActive] = useState(false);
    const code = props.keycode != null ? props.keycode : KeyUtils.showKeyCode(props.symbol);
    let keyCodes = [];
    const ref = useRef(null);

    if (!Array.isArray(props.keycode)){
        keyCodes.push(props.keycode)
    }else{
        keyCodes = props.keycode;
    }


    useEffect(() => {
        const element = ref.current;
        function use(e) {
            props.action(props.symbol);
        }
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

        const clickHandler = (e) => {
            use();
        }


        document.addEventListener("keydown", keyDownHandler);
        document.addEventListener("keyup", keyUpHandler);
        element.addEventListener("click", clickHandler);


        // Nettoyage : supprimer les écouteurs d'événements lorsque le composant est démonté
        return () => {
            document.removeEventListener("keydown", keyDownHandler);
            document.removeEventListener("keyup", keyUpHandler);
            element.removeEventListener("click", clickHandler);
        };
    }, [code]);



    return (
       <a ref={ref}
          className={"calculatorButton "+(isActive ? "active" : "") }>
           {props.symbol}
       </a>
    );


}
