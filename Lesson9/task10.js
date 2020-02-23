// Написать игру в пятнашки...
// 1  2  3  4
// 5  6  15 7
// 0  10 9  12
// 13 14 11 8

const game = {
    _inited: false,
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
            .sort(() => Math.random() - 0.5)
            .map(str => +str);
    },
    move(number) {
        const numberIdx = this.getIndexByNumber(number),
            zeroIdx = this.getIndexByNumber(0),
            canMoveNumber = this.canMove(numberIdx, zeroIdx);

        if (canMoveNumber) {
            this.board[numberIdx] = 0;
            this.board[zeroIdx] = number;
        }

        // this.render();
        this.changeItemsPosition();

        if (this.isWin()) {
            console.log('Win game!');
        }
    },
    startGame($board) {
        this.$board = $board;
        this.board = this.createRandomBoard();
        this.render();

        if (!this._inited) {
            $board.addEventListener('click', this.clickByItem.bind(this));
        }
    },
    render() {
        const zeroIdx = this.getIndexByNumber(0);

        this.$items = this.board
            .map(
                (num, idx) => num !== 0 &&
                    renderItem(
                        num,
                        this.indexToPosition(idx),
                        this.canMove(idx, zeroIdx)
                    )
            )
            .filter(Boolean);

        $board.innerText = '';
        $board.append(...this.$items);
    },
    indexToPosition(idx) {
        const row = Math.floor(idx / 4),
            col = idx % 4;

        return `left: ${col*25}%; top: ${row*25}%`;
    },
    getIndexByNumber(number) {
        return this.board.findIndex(el => el === number);
    },
    canMove(numberIdx, zeroIdx) {
        return (numberIdx === zeroIdx - 1 && zeroIdx % 4 !== 0) ||
        (numberIdx === zeroIdx + 1 && zeroIdx % 4 !== 3) ||
        (numberIdx === zeroIdx - 4) ||
        (numberIdx === zeroIdx + 4);
    },
    clickByItem(event) {
        const $item = event.target,
            isMoved = $item.classList.contains('board__item--active');

        if (isMoved) {
            this.move(+$item.innerText);
        }
    },
    changeItemsPosition() {
        const zeroIdx = this.getIndexByNumber(0);

        this.$items.forEach(
            $item => {
                const num = +$item.innerText,
                    numberIdx = this.getIndexByNumber(num),
                    position = this.indexToPosition(numberIdx),
                    canMove = this.canMove(numberIdx, zeroIdx);

                $item.setAttribute('style', position);

                if (canMove) {
                    $item.classList.add('board__item--active');
                } else {
                    $item.classList.remove('board__item--active');
                }
            }
        )
    }
},
    $board = document.querySelector('.board');

game.startGame($board);

// Рисование элемента
function renderItem(num, position, canMove) {
    // Создаем элемент
    const $el = document.createElement('div');

    // Присваиваем базовый класс
    $el.classList.add('board__item');

    // Рисуем номер
    $el.innerText = num;

    // Размещаем на доске
    $el.setAttribute('style', position);

    // Подсвечиваем те элементы, которые могут двигаться
    if (canMove) {
        $el.classList.add('board__item--active');
    }

    // Возвращаем верстку элемента
    return $el;
}


// 1. Модель. Объект game.
// 2. Научились рисовать элементы
// 3. Определили, что изменяется в элементе после его смещения
//      Написали функцию changeItemsPosition, которая вносит эти изменения в элемент
