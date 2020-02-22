const ladder = {
    step: 0,
    up() {
        this.step++;

        return this;
    },
    down() {
        this.step--;

        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        console.log('steps:', this.step);
    }
};

// Test
ladder
    .up()
    .up()
    .down()
    .showStep(); // 1
