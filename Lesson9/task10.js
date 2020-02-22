// Написать игру в пятнашки...
// 1  2  3  4
// 5  6  15 7
// 0  10 9  12
// 13 14 11 8

const game = {
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 13, 14, 15],
    winBoard: '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0',
    boardToString() {
        return this.board.join(',');
    },
    isWin() {
        return this.boardToString() === this.winBoard;
    },
    createRandomBoard() {
        return this.winBoard
            .split(',')
            .sort(() => Math.random() - 0.5);
    },
    move(number) {
        const numberIdx = this.board.findIndex(el => el === number),
            zeroIdx = this.board.findIndex(el => el === 0),
            canMoveNumber = (numberIdx === zeroIdx - 1 && zeroIdx % 4 !== 0) ||
                (numberIdx === zeroIdx + 1 && zeroIdx % 4 !== 3) ||
                (numberIdx === zeroIdx - 4) ||
                (numberIdx === zeroIdx + 4);

        if (canMoveNumber) {
            this.board[numberIdx] = 0;
            this.board[zeroIdx] = number;
        }

        if (this.isWin()) {
            console.log('Win game!');
        }
    }
}

game.move(13);
game.move(14);
game.move(15);
