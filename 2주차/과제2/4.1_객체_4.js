let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let key in salaries) { // salaries 객체의 모든 키를 순회
    sum += salaries[key]; // 키에 대응하는 값 100, 160, 130
}

console.log(sum); // 390