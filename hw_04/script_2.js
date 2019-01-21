"use strict";

//2*. Для игры, реализованной на уроке (бродилка), добавить возможность ходить по диагонали
// цифрами 1, 3, 7, 9
// Также необходимо сделать так, чтобы пользователь не мог совершить шаг в стенку, т.е. при
// направлении в стенку игрок оставался на том же месте где стоял.

/**
 * Объект с настройками игры.
 * @property {int} rowsCount Количество строк в карте.
 * @property {int} colsCount Количество колонок в карте.
 * @property {int} startPositionX Начальная позиция игрока по X координате.
 * @property {int} startPositionY Начальная позиция игрока по Y координате.
 */
const settings = {
    rowsCount: 4,
    colsCount: 4,
    startPositionX: 0,
    startPositionY: 0,
};

/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {int} x Позиция по X-координате.
 * @property {int} y Позиция по Y-координате.
 */
const player = {
    x: null,
    y: null,

    /**
     * Инициализация игрока и его метоположения.
     */
    init(startX, startY) {
        this.x = startX;
        this.y = startY;
    },


    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: this.x,
            y: this.y,
        };

        switch (direction) {
            case 2:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }
        return nextPosition
    },

    /**
     * Двигает игрока по переданному направлению.
     * @param {{x: int, y: int}} nextPoint Следующая точка пользователя.
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },
};

/**
 * Объект игры, здесь будут все методы и свойства связанные с самой игрой в общем.
 * @property {settings} settings Настройки игры.
 * @property {player} player Игрок, участвующий в игре.
 */
const game = {
    settings,
    player,

    /**
     * Запускает игру.
     */
    run() {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);
        while (true) {
            this.render();

            const direction = this.getDirection();

            if (direction === -1) {
                alert('До свидания.');
                return;
            }
            const nextPoint = this.player.getNextPosition(direction);
            if (this.canPlayerMakeStep(nextPoint)) {
                this.player.move(nextPoint);
            }
        }
    },

    /**
     * Отображает игру в консоли.
     */
    render() {
        let map = "";

        for (let row = 0; row < this.settings.rowsCount; row++) {
            for (let col = 0; col < this.settings.colsCount; col++) {
                if (this.player.y === row && this.player.x === col) {
                    map += 'o ';
                } else {
                    map += 'x ';
                }
            }
            map += '\n';
        }

        console.clear();
        console.log(map);
    },

    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        const availableDirections = [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

        while (true) {
            const direction = parseInt(prompt('Введите число, куда вы хотите переместиться, -1 для выхода.'));

            if (!availableDirections.includes(direction)) {
                alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirections.join(', ')}.`);
                continue;
            }

            return direction;
        }
    },

    /**
     * Проверяет может ли пользователь перейти на точку.
     * @param {{x: int, y: int}} nextPoint Точка, которую проверяем.
     * @returns {boolean} true
     */
    canPlayerMakeStep(nextPoint) {
        return nextPoint.x >= 0 && nextPoint.x < this.settings.colsCount &&
            nextPoint.y >= 0 && nextPoint.y < this.settings.rowsCount;
    }
};

game.run();
