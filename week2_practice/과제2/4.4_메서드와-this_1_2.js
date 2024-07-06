function makeUser() {
    return {
        name: "John",
        ref() {
            return this; // user.ref() 메소드 호출 시 user 리턴
        }
    };
};

let user = makeUser();

// user.ref() 메소드 호출로 this == user
alert(user.ref().name); // "John"
console.log(user.ref().name); // "John"