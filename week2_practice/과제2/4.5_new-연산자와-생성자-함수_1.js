let obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}

let a = new A; // a -> obj
let b = new B; // b -> obj

alert(a == b); // true

/*
생성자에 return문이 있는 경우에는 객체를 return하면 this 대신 해당 객체가 반환됨
두 함수 모두 obj를 반환하므로 a==b가 성립함
*/