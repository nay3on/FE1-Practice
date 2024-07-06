let ladder = {
    step: 0,
    up() {
        this.step++; // step 1 증가
        return this; // 메소드 호출 시 객체 자신(ladder) 리턴
    },
    down() {
        this.step--; // step 1 감소
        return this;
    },
    showStep: function() {
        alert(this.step); // 현재 step
        return this;
    }
};

ladder.up().up().down().showStep(); // 1