// 계산기 만들기

function Calculator() {

    this.read = function() {
        this.a = Number(prompt("첫 번째 값", 0)); // 숫자 a 입력 받기
        this.b = Number(prompt("두 번째 값", 0)); // 숫자 b 입력 받기
    };

    this.sum = function() {
        return this.a + this.b; // 두 값의 합 리턴
    };

    this.mul = function() {
        return this.a * this.b; // 두 값의 곱 리턴
    };
}

let calculator = new Calculator(); // Calculator 생성자 호출
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

/*
new Calculator() 실행 시
1. 빈 객체를 만들어 this에 할당 -> this = {}
2. Calculator() 함수 본문을 실행, 새로운 프로퍼티를 this에 추가
3. this를 반환
*/