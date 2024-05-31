let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) { // obj 객체의 모든 키를 순회
        if (typeof(obj[key]) === 'number') // 프로퍼티 값이 숫자인 경우 그 값에 2배
            obj[key] *= 2;
    }
}

multiplyNumeric(menu);

// 테스트
console.log(menu.width); // 400
console.log(menu.height); // 600
console.log(menu.title); // "My menu"