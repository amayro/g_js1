"use strict";

//3**. Реализовать игру «Кто хочет стать миллионером?».
// Т.е. у вас должен быть главный объект содержащий всю логику игры, который будет иметь
// методы, например метод run, возможно метод init и т.д.
// В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
// Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и
// предлагать варианты ответов в виде теста, например: Сколько букв в слове "привет":
// a. Пять.
// b. Шесть.
// c. Семь.
// d. Куда я попал?
// Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
// По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и
// предложить сыграть снова.
// Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.


/**
 * @type {object[]} Массив с объектами вопросов.
 */
const questions = [
    {
        text: 'Сколько букв в слове привет?',
        answers: {
            'a': 'Пять',
            'b': 'Шесть',
            'c': 'Семь',
            'd': 'Одна'
        },
        correctAnswerIndex: 'b',
    },
    {
        text: 'Сколько будет 1+1?',
        answers: {
            'a': '2',
            'b': '7',
            'c': '1',
            'd': '4'
        },
        correctAnswerIndex: 'a',
    },
    {
        text: 'Сколько будет 2+3?',
        answers: {
            'a': '2',
            'b': '1',
            'c': '8',
            'd': '5'
        },
        correctAnswerIndex: 'd',
    },
    {
        text: 'Сколько будет 1+2?',
        answers: {
            'a': '2',
            'b': '5',
            'c': '3',
            'd': '1'
        },
        correctAnswerIndex: 'c',
    },
];
const availableAnswer = ['a', 'b', 'c', 'd', 'q'];

const game = {
        questions,
        scoreCount: 0,

        /**
         * Инициализация игры.
         */
        init() {
            this.scoreCount = 0;
            alert(`Добро пожаловать!\nДля ответа используйте: ${availableAnswer.join(', ')}`);
        },

        /**
         * Запуск игры.
         */
        run() {
            let goToPlay = true;
            while (goToPlay) {
                this.init();

                for (let i = 0; i < questions.length; i++) {
                    let question = this.getCurrentQuestionString(i);
                    let answer = this.getAnswer(question);

                    if (this.userWantExit(answer)) {
                        alert('До свидания!');
                        return;
                    }
                    if (this.isAnswerCorrect(answer, i)) {
                        this.scoreCount++;
                    }
                }
                alert(`Игра закончена. Количество правильных ответов: ${this.scoreCount}`);
                goToPlay = confirm('Хотите сыграть еще раз?');
            }
        },

        /**
         * Получаем ответ от пользователя.
         * @returns {string} Строка ответа пользователя.
         */
        getAnswer(currentQuestion) {
            while (true) {
                let answerUser = prompt(currentQuestion);
                if (this.validateAnswer(answerUser)) {
                    return answerUser;
                } else {
                    alert(`Допустимые ответы: ${availableAnswer.join(', ')}`);
                }
            }
        },

        /**
         * Возвращает строку с текущим вопросом и вариантами ответов.
         * @returns {string} Строку с текущим вопросом и вариантами ответов.
         */
        getCurrentQuestionString(i) {
            let currentQuestion = questions[i].text;
            for (const key in questions[i].answers) {
                currentQuestion += `\n${key} - ${questions[i].answers[key]}`;
            }
            return currentQuestion
        },

        /**
         * Проверяем ответ пользователя на корректность ввода.
         * @param {string} userAnswer Ответ пользователя.
         * @returns {boolean} true если пользователь ввел корректные данные, иначе false.
         */
        validateAnswer(userAnswer) {
            return availableAnswer.includes(userAnswer);
        },

        /**
         * Проверяет ввел ли пользователь вместо ответа информацию для выхода из игры.
         * @param {string} userAnswer Ответ пользователя.
         * @returns {boolean} true, если пользователь хотел выйти, false если нет.
         */
        userWantExit(userAnswer) {
            return userAnswer === 'q';
        },

        /**
         * Проверяет является ли ответ, переданный в функцию верным.
         * @param {string} userAnswer Ответ пользователя.
         * @param {int} i Индекс вопроса в массиве вопросов.
         * @returns {boolean} true, если ответ пользователя верный, false если нет.
         */
        isAnswerCorrect(userAnswer, i) {
            return userAnswer === questions[i].correctAnswerIndex;
        },
    }
;

// Запускаем игру.
game.run();