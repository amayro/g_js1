"use strict";

/**
 * @property {object} settings Настройки корзины товаров.
 * @property {{price: number, name: string}[]} orders Список товаров что купил пользователь.
 * @property {HTMLElement} basketCountEl Место для показа количества товаров.
 * @property {HTMLElement} basketPriceEl Место для показа цены всех товаров.
 */
const basket = {
    settings: {
        containerSelector: '#container',
        countSelector: '#basket-count',
        priceSelector: '#basket-price',
    },

    orders: [],
    currentObj: {
        name: null,
        price: null,
        count: null,
    },

    /**
     * Инициализирует переменные для корзины и показывает эти значения.
     */
    init(settings = {}) {
        Object.assign(this.settings, settings);

        document
            .querySelector(this.settings.containerSelector)
            .addEventListener('click', event => this.containerClickHandler(event));
        this.render();
    },

    /** Обработчик события клика для покупки товара */
    containerClickHandler(event) {
        this.currentObj = {
            name: event.target.dataset.name,
            price: event.target.dataset.price,
            count: 1,
        };
        if (event.target.classList.contains('buy-btn')) {
            this.addOrder();
        } else if (event.target.classList.contains('reduce-order-btn')) {
            this.reduceOrder();
        } else if (event.target.classList.contains('delete-order-btn')) {
            this.deleteOrder();
        }
    },

    /**
     * Отображает количество всех товаров и их цену.
     */
    render() {
        document.querySelector(this.settings.countSelector).innerText = this.getOrdersCount();
        document.querySelector(this.settings.priceSelector).innerText = this.getOrdersPrice();
    },

    /**
     * Считает и возвращает количество всех купленных товаров из массива this.orders.
     * @returns {number} Число всех купленных товаров.
     */
    getOrdersCount() {
        let count = 0;
        this.orders.forEach((el) => count += el.count);
        return count
    },

    /**
     * Считает и возвращает цену всех купленных товаров из массива this.orders.
     * @returns {number} Число всех купленных товаров.
     */
    getOrdersPrice() {
        let price = 0;
        this.orders.forEach((el) => price += el.price * el.count);
        return price
    },

    /**
     * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех товаров.
     */
    addOrder() {
        if (this.orders.some(el => el.name === this.currentObj.name)) {
            this.orders.forEach((el) => el.name === this.currentObj.name ? el.count++ : el.count);
        } else {
            console.log('not');
            this.orders.push(this.currentObj)
        }
        this.render();
    },

    /**
     * Уменьшает число заказов товара из корзины и отображает количество и цену всех товаров.
     */
    reduceOrder(target) {
        for (let order of this.orders) {
            if (order.name === this.currentObj.name) {
                order.count--;
                if (order.count === 0) {
                    this.deleteOrder(target);
                }
            }
        }
        this.render();
    },

    /**
     * Удаляет товар из массива и отображает количество и цену всех товаров.
     */
    deleteOrder() {
        for (let order of this.orders) {
            if (order.name === this.currentObj.name) {
                const idx = this.orders.indexOf(order);
                this.orders.splice(idx);
            }
        }
        this.render();
    },

};

window.onload = () => basket.init();