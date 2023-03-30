(function () {
    // Функция setIMaskToJQuery добавляет метод IMask для объекта jQuery, который позволяет создавать экземпляры маски IMask для выбранных элементов.
    /**
     * Для каждого элемента, на котором вызывается метод IMask, создается экземпляр маски IMask с переданными в параметрах настройками. Если на элементе уже существует экземпляр маски IMask, то он уничтожается, а затем создается новый экземпляр с переданными настройками.
     *
     * Созданный экземпляр маски IMask сохраняется в свойстве data текущего элемента с ключом 'IMask'.
     *
     * Функция возвращает первый созданный экземпляр маски IMask для выбранных элементов.
     *
     *
     * Пример использования:
     *
     * html
     * <!-- HTML-разметка -->
     * <input type="text" class="js-mask-phone" data-mask="+{7} (000) 000-00-00">
     *
     * javascript
     * // JavaScript-код
     * setIMaskToJQuery();
     *
     * // Создание экземпляра маски IMask для всех элементов с классом js-mask-phone
     * $('.js-mask-phone').IMask({
     *     mask: $('.js-mask-phone').data('mask')
     * });
     *
     *
     * Пример получения экземпляра маски:
     *
     * const maskInstance = $('.js-mask-phone').first().data('IMask');
     *
     */
    function setIMaskToJQuery() {
        // определяется метод IMask для объекта jQuery.
        $.fn.IMask = function (options) {
            // создается переменная `firstInst`, которая будет хранить первый экземпляр `IMask`.
            let firstInst;
            this.each((idx, el) => {
                // проверяется, есть ли у текущего элемента уже экземпляр `IMask`.
                // если экземпляр уже существует, то он уничтожается.
                // создается новый экземпляр `IMask` для текущего элемента.
                let instance = $(el).data('IMask');
                if (instance) {
                    instance.destroy();
                }
                instance = IMask(el, options);

                if (!firstInst) {
                    firstInst = instance;
                }

                // сохраняем экземпляр `IMask` в `data` текущего элемента.
                $(el).data('IMask', instance);
            });
            // возвращается первый экземпляр `IMask`, созданный для элемента.
            return firstInst;
        };
    }

    // Функция `setPhoneMask` добавляет маску для ввода телефонного номера для всех полей ввода с атрибутом `data-imask-phone`.
    /**
     * Для каждого поля ввода создается экземпляр маски `IMask` с настройками, которые берутся из атрибута `data-imask-phone`. Если атрибут не задан, то используется значение по умолчанию `'+{7} 000 000-00-00'`.
     *
     * Также для каждого поля ввода устанавливается `inputmode="tel"`, что позволяет отображать соответствующую клавиатуру на мобильных устройствах.
     *
     * Функция также добавляет метод `updateMask` для каждого экземпляра маски, который позволяет изменять маску для поля ввода. Для этого необходимо вызвать метод `updateMask` и передать новую маску в качестве параметра.
     *
     *
     * Пример использования:
     *
     * html
     * <input type="text" data-imask-phone>
     * <input type="text" data-imask-phone="+{1} (000) 000-00-00">
     *
     * javascript
     * // Изменение маски для первого поля ввода
     * $('input[data-imask-phone]').first().data('IMask').updateMask('+{7} 000-000-00-00');
     *
     */
    function setPhoneMask() {
        // Получаем все поля ввода с атрибутом data-imask-phone
        const selector = 'data-imask-phone';
        const inputs = $(`[${selector}]`);

        const DEFAULT_MASK = '+{7} 000 000-00-00';

        // Для каждого поля ввода создаем маску и настраиваем ее
        inputs.each((index, element) => {
            // Получаем маску из атрибута или устанавливаем значение по умолчанию
            let mask = $(element).attr(selector) || DEFAULT_MASK;
            // Проверяем, нужно ли устанавливать placeholder
            const isNeedPlaceholder = !$(element).attr('placeholder');

            // Настраиваем опции для маски
            let options = {
                mask,
                // Функция, которая вызывается при изменении и создании маски
                commit() {
                    mask = this.mask;
                    // Если placeholder не был изначально установлен, устанавливаем его
                    if (isNeedPlaceholder) {
                        $(element).attr('placeholder', mask.replace(/[\{\}\[\]]/g, ''));
                    }
                },
            };

            // Создаем экземпляр маски
            let instance = $(element).IMask(options);

            // Добавляем метод для изменения маски
            instance.updateMask = (value) => {
                value = value.replace(/\D/g, '') ? value : DEFAULT_MASK;
                // Получаем введенный телефонный номер
                const phoneNumber = instance.unmaskedValue;

                // unmaskedValue возвращает номер телефона с кодом страны из за этого некоректно меняется маска исправим это заменив код страны
                // Получаем код страны (то что в фигурных скобках) из масок
                const oldCountryСode = mask.match(/\{(\d+)\}/)[1];
                const newCountryСode = value.match(/\{(\d+)\}/)[1];

                // заменим старый код страны на новый
                const actualPhoneNumber = phoneNumber.length ? newCountryСode + phoneNumber.slice(oldCountryСode.length) : '';

                // Устанавливаем новую маску и актуальный телефонный номер
                options.mask = value;
                instance.masked.updateOptions(options);
                instance.value = actualPhoneNumber;
            };

            // Устанавливаем inputmode для поля ввода
            $(element).attr('inputmode', 'tel');
        });
    }

    // Функция setNumberMask добавляет маску для ввода чисел для всех полей ввода с атрибутом data-imask-num.
    /**
     * Для каждого поля ввода создается экземпляр маски IMask.
     *
     * Для разделения тысяч используется разделитель, который берется из атрибута data-imask-num. Если атрибут не задан, то разделитель не используется.
     *
     * Для каждого поля ввода также задаются атрибуты data-prefix и data-suffix, которые определяют префикс и суффикс для введенного числа.
     *
     * Если суффикс задан как массив, то он будет склоняться в зависимости от числа. Для этого используется функция declOfNum, которая принимает число и массив слов для склонения. Для составления склонений удобно использовать числа 1 2 5. К примеру 1 рубль 2 рубля 5 рублей
     *
     * Функция также добавляет методы updateSeparator, updatePrefixValue и updateSuffixValue для каждого экземпляра маски, которые позволяют изменять разделитель тысяч, префикс и суффикс для поля ввода соответственно.
     *
     * Для каждого поля ввода устанавливается атрибут inputmode="decimal", что позволяет отображать соответствующую клавиатуру на мобильных устройствах.
     *
     *
     * Пример использования:
     *
     * html
     * <!-- HTML-разметка -->
     * <input type="text" data-imask-num data-prefix="Сумма: " data-suffix="руб.">
     * <input type="text" data-imask-num="." data-prefix="$" data-suffix=" доллар| доллара| долларов"> <!-- 1 2 5 -->
     *
     * javascript
     * // JavaScript-код
     * setNumberMask();
     *
     * // Изменение разделителя тысяч для первого поля ввода
     * $('input[data-imask-num]').first().data('IMask').updateSeparator(' ');
     *
     * // Изменение префикса для первого поля ввода
     * $('input[data-imask-num]').first().data('IMask').updatePrefixValue('£');
     *
     * // Изменение суффикса для первого поля ввода
     * $('input[data-imask-num]').first().data('IMask').updateSuffixValue('$');
     *
     */
    function setNumberMask() {
        // Получаем все поля ввода с атрибутом data-imask-num
        const selector = 'data-imask-num';
        const inputs = $(`[${selector}]`);

        // Задаем константы для атрибутов префикса и суффикса
        const PREFIX_ATTR = 'data-prefix';
        const SUFFIX_ATTR = 'data-suffix';

        // Функция для склонения слов в зависимости от числа
        const declOfNum = (value, titles) => {
            const cases = [2, 0, 1, 1, 1, 2];
            return titles[value % 100 > 4 && value % 100 < 20 ? 2 : cases[value % 10 < 5 ? value % 10 : 5]];
        };

        // Проходимся по всем полям ввода и устанавливаем маску
        inputs.each((index, element) => {
            // Получаем разделитель тысяч, префикс и суффикс из атрибутов
            let separator = $(element).attr(selector) || '';
            let prefixValue = $(element).attr(PREFIX_ATTR) || '';
            let suffixValue = $(element).attr(SUFFIX_ATTR) || '';

            // Функция для проверки, является ли суффикс массивом
            const isArraySuffix = () => {
                return suffixValue.split('|').length === 3;
            };

            // Функция для получения актуального значения суффикса в зависимости от числа
            const actualSuffixValue = (num = 0) => {
                if (isArraySuffix()) {
                    return declOfNum(num, suffixValue.split('|'));
                } else {
                    return suffixValue;
                }
            };

            // Задаем опции для маски
            const options = {
                mask: 'prefixnumsuffix',
                eager: true,
                blocks: {
                    prefix: {
                        mask: prefixValue,
                    },
                    num: {
                        mask: Number,
                        thousandsSeparator: separator,
                    },
                    suffix: {
                        mask: actualSuffixValue(),
                    },
                },
            };

            // Устанавливаем маску на поле ввода
            const instance = $(element).IMask(options);

            // Функции для обновления опций маски
            const updateOptions = (newOptions) => {
                instance.masked.updateOptions(newOptions);
                // для того что бы отображался суффикс после нажатия backspace немного меняем значение unmaskedValue что бы произошёл ререндер input
                instance.value = instance.unmaskedValue ? instance.unmaskedValue + ' ' : '';
            };

            instance.updateSeparator = (value) => {
                options.blocks.num.thousandsSeparator = value;
                updateOptions(options);
            };

            instance.updatePrefixValue = (value) => {
                options.blocks.prefix.mask = value;
                updateOptions(options);
            };

            instance.updateSuffixValue = (value) => {
                suffixValue = value;
                options.blocks.suffix.mask = actualSuffixValue(instance.unmaskedValue);
                updateOptions(options);
            };

            // Обновляем суффикс при вводе нового числа
            instance.on('accept', () => {
                options.blocks.suffix.mask = actualSuffixValue(instance.unmaskedValue);
                updateOptions(options);
            });

            // Устанавливаем атрибут inputmode для корректного отображения клавиатуры на мобильных устройствах
            $(element).attr('inputmode', 'decimal');
        });
    }

    // Функция setIrsBindMethods добавляет методы bindValue, bindFromValue и bindToValue для экземпляров ionRangeSlider.
    /**
     * Метод bindValue связывает значения слайдера с элементами формы, переданными в качестве аргумента. Метод принимает два аргумента: prop - свойство слайдера, которое необходимо связать с элементами формы (например, 'min' или 'max'), и elements - элементы формы, с которыми необходимо связать значение слайдера.
     *
     * Метод bindFromValue связывает значение "from" слайдера с элементами формы, переданными в качестве аргумента. Метод принимает один аргумент - элементы формы, с которыми необходимо связать значение "from" слайдера.
     *
     * Метод bindToValue связывает значение "to" слайдера с элементами формы, переданными в качестве аргумента. Метод принимает один аргумент - элементы формы, с которыми необходимо связать значение "to" слайдера.
     *
     * При изменении значения слайдера обновляется значение элемента формы, а при изменении значения элемента формы обновляется значение слайдера.
     *
     * Если значение элемента формы больше максимально возможного значения слайдера, то значение элемента формы устанавливается в максимально возможное значение слайдера.
     *
     *
     * Пример использования:
     *
     * html
     * <!-- HTML-разметка -->
     * <input type="text" id="irs"> <!-- слайдер -->
     * <input type="text" id="irs-from" data-imask-num=" " data-prefix="От " data-suffix=" рубля| рублей| рублей" > <!-- маскированое поле ввода связанное с значением from слайдера -->
     * <input type="text" id="irs-to"  data-imask-num=" " data-prefix=До " data-suffix=" рубля| рублей| рублей" > <!-- маскированое поле ввода связанное с значением to слайдера -->
     * <input type="text" id="irs-max"> <!-- Поле ввода без маски связанное с значением max слайдера -->
     *
     * javascript
     * // JavaScript-код
     * setIrsBindMethods();
     *
     * // Создаем экземпляр ionRangeSlider
     * $('#irs').ionRangeSlider({
     *     type: 'double',
     *     min: 0,
     *     max: 100,
     *     from: 20,
     *     to: 80,
     * });
     *
     * // Связываем значения слайдера с элементами формы
     * $('#irs').data('ionRangeSlider').bindValue('max','#irs-max');
     * $('#irs').data('ionRangeSlider').bindFromValue('#irs-from');
     * $('#irs').data('ionRangeSlider').bindToValue('#irs-to');
     *
     */
    function setIrsBindMethods() {
        const irsTemp = $.fn.ionRangeSlider;
        $.fn.ionRangeSlider = function (...args) {
            const currentIrs = irsTemp.call(this, ...args);
            const instance = currentIrs.data('ionRangeSlider');

            const bindValue = (prop, elements) => {
                elements = $(elements);

                elements.each((idx, el) => {
                    // возьмем элемент формы и маску связанную с ним(если существует)
                    let $el = $(el);
                    let iMaskInstance = $el.data('IMask');

                    // подготовим сеттер и геттер для дальнейшего использования
                    let updateValue;
                    let getValue;

                    // Проверка наличия iMaskInstance
                    if (iMaskInstance) {
                        // Если iMaskInstance существует, то функция обновления значения будет присваиваться методу value объекта iMaskInstance,
                        // а функция получения значения будет возвращать значение свойства unmaskedValue объекта iMaskInstance
                        updateValue = (value) => {
                            return (iMaskInstance.value = value.toString());
                        };
                        getValue = () => {
                            return iMaskInstance.unmaskedValue;
                        };
                    } else {
                        // Если iMaskInstance не существует, то функция обновления значения будет присваиваться методу val объекта $el,
                        // а функция получения значения будет возвращать значение метода val объекта $el
                        updateValue = (value) => {
                            return $el.val(value);
                        };
                        getValue = () => {
                            return $el.val();
                        };
                    }

                    // начальная инициализация
                    updateValue(instance.result[prop]);

                    // меняем значение input при изменении слайдера(флаг is_active означет что изменение произошло изнутри rangeSlider)
                    currentIrs.on('change', () => {
                        if (instance.is_active) {
                            updateValue(instance.result[prop]);
                        }
                    });

                    // при вводе в input применим значение к rangeSlider
                    $el.on('input', () => {
                        instance.update({ [prop]: getValue() });

                        // если вычисленное значение rangeSlider больше значения в input поставим в input максимально возможное значение
                        if (getValue() > instance.result[prop]) {
                            updateValue(instance.result[prop]);
                        }
                    });

                    // при переводе каретки с input поставим в него значение rangeSlider
                    $el.on('blur', () => {
                        updateValue(instance.result[prop]);
                    });
                });
            };

            // Метод bindValue() связывает значения слайдера с элементами формы, переданными в качестве аргумента.
            instance.bindValue = bindValue;
            // Метод bindFromValue() связывает значение "from" слайдера с элементами формы, переданными в качестве аргумента.
            instance.bindFromValue = (element) => bindValue('from', element);
            // Метод bindToValue() связывает значение "to" слайдера с элементами формы, переданными в качестве аргумента.
            instance.bindToValue = (element) => bindValue('to', element);

            return currentIrs;
        };
    }

    return {
        init() {
            // первая проверка на jquery если библиотека не подключена завершаем выполнение программы
            if (!('$' in window)) return console.warn('jQuery is not defined');
            // проверка на imask если библиотека не подключена не исполняем функции связанные с маскированием полей ввода
            if ('IMask' in window) {
                setIMaskToJQuery();
                setPhoneMask();
                setNumberMask();
            } else {
                console.warn('IMask is not defined');
            }
            // проверка на ionRangeSlider если библиотека не подключена не исполняем функцию добавления методов для биндинга значений к элементам формы
            if ($.fn.ionRangeSlider) {
                setIrsBindMethods();
            } else {
                console.warn('ionRangeSlider is not defined');
            }
        },
    };
})().init();
