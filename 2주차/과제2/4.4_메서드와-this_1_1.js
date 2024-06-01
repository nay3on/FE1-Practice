function makeUser() {
    return {
        name: "John",
        ref: this // this는 'obj.method()'와 같이 메소드 형태로 호출하는 시점에서 obj를 참조할 값으로 정함
    };
};

let user = makeUser();
/*
makeUser()는 메소드 형태로 호출되지 않고 일반 함수 형태로 호출됨
-> 'ref: this'에서 this는 undefined
-> user = {name: "John", ref: undefined}
*/

alert(user.ref.name); // 에러 발생
console.log(user.ref.name); // undefined