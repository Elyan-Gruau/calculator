export default class Expression {
    exp = [];


    constructor() {
        this.exp = [];
    }

    evaluate(){
        return "todo result";
    }



    addNumber(composedNumber) {
        this.exp.push(composedNumber);
    }

    toString(){
        let str = "";
        for (let i = 0; i < this.exp.length;i++){
            str += this.exp[i].toString();
        }
        return str;
    }


    addOperator(symbol) {
        this.exp.push(symbol);
    }
}