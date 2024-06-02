let calculator = {
    read() {
        this.a = Number(prompt("첫 번째 값", 0)); // 숫자 a 입력 받기
        this.b = Number(prompt("두 번째 값", 0)); // 숫자 b 입력 받기
    },

    sum() {
        return this.a + this.b; // 두 값의 합 리턴
    },

    mul() {
        return this.a * this.b; // 두 값의 곱 리턴
    }
};

// calculator.method() 메소드 형태로 호출했으므로 this == calculator
calculator.read();
alert(calculator.sum());
alert(calculator.mul());


/*
※ prompt()로 입력 받은 값은 string이기 때문에 number로 형 변환하지 않으면 덧셈 결과에 오류 발생

let calculator = {
    read() {
        this.a = prompt("첫 번째 값", 0); // '1' 입력
        this.b = prompt("두 번째 값", 0); // '2' 입력
    },
  // ...
};

calculator.read();
alert(calculator.sum()); // 12 -> 오류
alert(calculator.mul()); // 2

alert("sum: " + typeof(calculator.sum())); // sum: string -> number여야 함
alert("mul: " + typeof(calculator.mul())); // mul: number

방법1) Number() 사용
    this.a = Number(prompt("첫 번째 값", 0));
    this.b = Number(prompt("두 번째 값", 0));

방법2) +prompt 사용
    this.a = +prompt("첫 번째 값", 0);
    this.b = +prompt(prompt("두 번째 값", 0);
*/