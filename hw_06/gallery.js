"use strict";

/**
 * @property {Object} settings Объект с настройками галереи.
 * @property {string} settings.previewSelector Селектор обертки для миниатюр галереи.
 * @property {string} settings.openedImageWrapperClass Класс для обертки открытой картинки.
 * @property {string} settings.openedImageClass Класс открытой картинки.
 * @property {string} settings.openedImageScreenClass Класс для ширмы открытой картинки.
 * @property {string} settings.openedImageCloseBtnClass Класс для картинки кнопки закрыть.
 * @property {string} settings.openedImageCloseBtnSrc Путь до картинки кнопки открыть.
 * @property {array} imageArray Массив картинок для показа
 * @property {number} idxOpenedImageArr Индекс открытой картинки в массиве imageArray .
 */
const gallery = {
    settings: {
        previewSelector: '.galleryPreviewsContainer',
        openedImageWrapperClass: 'galleryWrapper',
        openedImageClass: 'galleryWrapper__image',
        openedImageScreenClass: 'galleryWrapper__screen',
        openedImageCloseBtnClass: 'galleryWrapper__close',
        openedImageBackBtnClass: 'galleryWrapper__back',
        openedImageNextBtnClass: 'galleryWrapper__next',
    },
    imageArray: [],
    idxOpenedImageArr: null,

    /**
     * Инициализирует галерею, ставит обработчик события.
     * @param {Object} userSettings Объект настроек для галереи.
     */
    init(userSettings = {}) {
        Object.assign(this.settings, userSettings);
        const imgContainer = document.querySelector(this.settings.previewSelector);

        imgContainer.addEventListener('click', event => this.containerClickHandler(event));
        this.imageArray = imgContainer.querySelectorAll('img');
    },

    /** Обработчик события клика для открытия картинки. */
    containerClickHandler(event) {
        if (event.target.tagName !== 'IMG') {
            return;
        }
        this.openImage(event.target);
    },

    /**
     * Открывает картинку.
     * @param {target} target Картинка, на которую нажали.
     */
    openImage(target) {
        for (let i = 0; i < this.imageArray.length; i++) {
            if (this.imageArray[i].src === target.src) {
                this.idxOpenedImageArr = i;
                break;
            }
        }

        const img = new Image();
        let insertImage = this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`);

        img.onload = () => insertImage.src = target.dataset.full_image_url;
        img.onerror = () => insertImage.src = target.src;
        img.src = target.dataset.full_image_url;
    },

    /**
     * Возвращает контейнер для открытой картинки, либо создает такой контейнер, если его еще нет.
     * @returns {Element}
     */
    getScreenContainer() {
        const galleryWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);
        if (galleryWrapperElement) {
            if (galleryWrapperElement.getAttribute('hidden')) {
                galleryWrapperElement.removeAttribute('hidden')
            }
            return galleryWrapperElement;
        }

        return this.createScreenContainer();
    },

    /**
     * Создает контейнер для открытой картинки.
     * @returns {HTMLElement}
     */
    createScreenContainer() {
        const galleryWrapperElement = document.createElement('div');
        galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);

        const backImageElement = document.createElement('div');
        backImageElement.classList.add(this.settings.openedImageBackBtnClass);
        backImageElement.addEventListener('click', () => this.getPrevImage());
        galleryWrapperElement.appendChild(backImageElement);

        const nextImageElement = document.createElement('div');
        nextImageElement.classList.add(this.settings.openedImageNextBtnClass);
        nextImageElement.addEventListener('click', () => this.getNextImage());
        galleryWrapperElement.appendChild(nextImageElement);

        const closeImageElement = document.createElement('div');
        closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
        closeImageElement.addEventListener('click', () => this.close());
        galleryWrapperElement.appendChild(closeImageElement);

        const galleryScreenElement = document.createElement('div');
        galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
        galleryWrapperElement.appendChild(galleryScreenElement);

        const image = new Image();
        image.classList.add(this.settings.openedImageClass);
        image.addEventListener('click', () => this.getNextImage());
        galleryWrapperElement.appendChild(image);

        document.body.appendChild(galleryWrapperElement);

        return galleryWrapperElement;
    },

    /**
     * Возвращает следующий элемент (картинку) от открытой или первую картинку в контейнере,
     * если текущая открытая картинка последняя.
     * @returns {Element} Следующую картинку от текущей открытой.
     */
    getNextImage() {
        const nextImage = this.idxOpenedImageArr !== this.imageArray.length-1
            ? this.imageArray[this.idxOpenedImageArr+1]
            : this.imageArray[0];

        this.openImage(nextImage)
    },

    /**
     * Возвращает предыдущий элемент (картинку) от открытой или последнюю картинку в контейнере,
     * если текущая открытая картинка первая.
     * @returns {Element} Предыдущую картинку от текущей открытой.
     */
    getPrevImage() {
        const prevImage = this.idxOpenedImageArr !== 0
            ? this.imageArray[this.idxOpenedImageArr-1]
            : this.imageArray[this.imageArray.length-1];

        this.openImage(prevImage)
    },

    /**
     * Закрывает (прячет) контейнер для открытой картинки.
     */
    close() {
        document.querySelector(`.${this.settings.openedImageWrapperClass}`).setAttribute('hidden', 'hidden');
    }
};

window.onload = () => gallery.init();