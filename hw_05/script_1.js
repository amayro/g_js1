"use strict";

// 1 Создать функцию, генерирующую шахматную доску. При этом можно использовать любые
// html-теги по своему желанию.
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые
// ячейки.
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F,
// G, H.


/**
 * @property {HTMLElement} gameContainerEl Контейнер игры (DOM элемент).
 */
const chess = {
    gameContainerEl: document.getElementById('game'),
    digArr: [1, 2, 3, 4, 5, 6, 7, 8],
    charArr: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],

    /**
     * Метод отображения карты (игрового поля).
     */
    renderMap() {


        for (let row = 0; row < this.digArr.length + 2; row++) {
            const trEl = document.createElement('tr');
            this.gameContainerEl.appendChild(trEl);

            for (let col = 0; col < this.charArr.length + 2; col++) {
                const tdEl = document.createElement('td');
                trEl.appendChild(tdEl);

                if (row === 0 || row === this.digArr.length + 1) {
                    if (col !== 0 && col !== this.charArr.length + 1) {
                        tdEl.innerText = this.charArr[col - 1];
                    }
                } else if (col === 0 || col === this.charArr.length + 1) {
                    tdEl.innerText = this.digArr[this.digArr.length - row];
                }

                if (this.isCellIsBlack(row, col)) {
                    tdEl.setAttribute('class', 'td_black');
                }
            }
        }
    },

    /**
     * Определяет является ли ячейка черной.
     * @param {int} rowNum Номер в строке.
     * @param {int} colNum Номер в колонке.
     * @returns {boolean} true, если ячейка должна быть черной, иначе false.
     */

    isCellIsBlack(rowNum, colNum) {
        if (rowNum !== 0 && rowNum !== this.digArr.length + 1 &&
            colNum !== 0 && colNum !== this.charArr.length + 1) {
            return (rowNum % 2 === 0 && colNum % 2 !== 0) || (rowNum % 2 !== 0 && colNum % 2 === 0);
        }
    },
};

// Запускаем метод отображения карты.
chess.renderMap();