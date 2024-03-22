export default class KeyUtils{
    static showKeyCode (character) {
        // var character = document.getElementById("character").value.substring(0, 1);
        var code = character.charCodeAt(0);
        // var msg = "The Key Code for the \"" + character + "\" character is " + code + ".";
        // alert(msg);
        return code;
    }
}