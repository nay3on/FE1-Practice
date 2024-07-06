function isEmpty(obj) {
    for (let key in obj) // for...in 반복문을 사용해 객체 obj에 프로머티가 있는지 확인
        return false; // 프로머티가 발견되면 바로 false 리턴
    return true; // 없으면 true 리턴
}

/* 테스트
let schedule = {};

alert( isEmpty(schedule) ); // true 출력

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false 출력
*/