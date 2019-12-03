<template>
    <div class="calculator">
        <div class="display">{{ current || '0' }}</div>
        <div @click="clear" class="btn">C</div>
        <div @click="sign" class="btn">+/-</div>
        <div @click="percent" class="btn">%</div>
        <div @click="divide" class="btn operator">&divide;</div>
        <div @click="append(7)" class="btn">7</div>
        <div @click="append(8)" class="btn">8</div>
        <div @click="append(9)" class="btn">9</div>
        <div @click="multiply" class="btn operator">x</div>
        <div @click="append(4)" class="btn">4</div>
        <div @click="append(5)" class="btn">5</div>
        <div @click="append(6)" class="btn">6</div>
        <div @click="subtract" class="btn operator">-</div>
        <div @click="append(1)" class="btn">1</div>
        <div @click="append(2)" class="btn">2</div>
        <div @click="append(3)" class="btn">3</div>
        <div @click="addition" class="btn operator">+</div>
        <div @click="append(0)" class="btn zero">0</div>
        <div @click="dot" class="btn">.</div>
        <div @click="equal" class="btn operator">=</div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            current: '1234',
            previous: null,
            operator: null,
            operatorClicked: false
        };
    },
    methods: {
        clear() {
            this.current = '';
        },
        setPrevious () {
            this.previous = this.current;
            this.operatorClicked = true;
        },
        sign () {
            this.current = this.current.charAt(0) === '-' ?
            this.current.slice(1) : `-${this.current}`;
        },
        percent () {
            this.current = `${parseFloat(this.current)/100}`;
        },
        multiply () {
            this.current = this.current.charAt(0) === '*' ?
            this.current.slice(1) : `${this.current} *`;
            this.operator = (a, b) => a * b;
            this.setPrevious();
        },
        subtract () {
            this.operator = (a, b) => a - b;
            this.setPrevious();
        },
        divide () {
            this.current = this.current.charAt(0) === '*' ?
            this.current.slice(1) : `${this.current} <span>&divide;</span>`;
            this.operator = (a, b) => a / b;
            this.setPrevious();
        },
        addition () {
            this.current = this.current.charAt(0) === '*' ?
            this.current.slice(1) : `${this.current} +`;
            this.operator = (a, b) => a + b;
            this.setPrevious();
        },
        append (number) {
            if (this.operatorClicked) {
                this.current = '';
                this.operatorClicked = false;
            }
            if (number === 0 && this.current === '') {
                //
            } else {
                this.current = `${this.current}${number}`;
            }
        },
        dot () {
            if (this.current.indexOf('.') === -1) {
                this.append('.')
            }
        },
        equal() {
            this.current = `${this.operator(
                parseFloat(this.current),
                parseFloat(this.previous)
            )}`;
            this.previous = null;
        }
    },
};
</script>

<style lang="css" scoped>
.calculator {
    width: 400px;
    margin: 0 auto;
    font-size: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
    text-align: center;
}
.display {
    grid-column: 1 / 5;
    background-color:#333;
    text-align: right;
    color: white;
}
.zero {
    grid-column: 1/ 3;
}
.btn {
    background-color: #f2f2f2;
    border: 1px solid #999;
}
.operator {
    background-color: orange;
    color: white;
}
</style>
