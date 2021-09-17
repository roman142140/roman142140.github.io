jQuery(function ($) {
    $(document).ready(function () {
        setCharts();
    })
    function setCharts() {
        setMainChart()
        setNewsChart();
    }
    function setMainChart() {
        var ctx = document.getElementById('mainChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [
                    // 'ЯНВ',
                    // 'ФЕВ',
                    // 'МАР',
                    // 'АПР',
                    // 'МАЙ',
                    // 'ИЮН',
                    // 'ИЮЛ',
                    // 'АВГ',
                    // 'СЕН',
                    // 'ОКТ',
                    // 'НОЯ',
                    // 'ДЕК',
                    'январь 2019',
                    'февраль 2019',
                    'март 2019',
                    'апрель 2019',
                    'май 2019',
                    'июнь 2019',
                    'июль 2019',
                    'август 2019',
                    'сентябрь 2019',
                    'октябрь 2019',
                    'ноябрь 2019',
                    'декабрь 2019',
                    'январь 2020',
                    'февраль 2020',
                    'март 2020',
                    'апрель 2020',
                    'май 2020',
                    'июнь 2020',
                    'июль 2020',
                    'август 2020',
                    'сентябрь 2020',
                    'октябрь 2020',
                    'ноябрь 2020',
                    'декабрь 2020',
                    'январь 2021',
                    'февраль 2021',
                    'март 2021',
                    'апрель 2021',
                    'май 2021',
                    'июнь 2021',
                    'июль 2021',
                    'август 2021',
                ],
                datasets: [
                    {
                        label: 'Москва и МО',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'СЗФО',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'СКФО',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'СПБ и ЛО',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Весь Озон',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'ДВФО и СФО',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Архангельск',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Астрахань',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Владимир',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Волгоград',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Воронеж',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Екатеринбург',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Иркутск',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Казань',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Краснодар',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Красноярск',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Москва',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Мурманск',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Набережные Челны',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Нижний Новгород',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Новосибирск',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Омск',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Пермь',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Ростов-на-Дону',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Самара',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Санкт-Петербург',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Сочи',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Тверь',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Уфа',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Челябинск',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                    {
                        label: 'Ярославль',
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 3,
                        pointRadius: 5,
                        backgroundColor: ['#005BFF'],
                        borderColor: ['#005BFF'],
                        data: [
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),

                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                            getRandomInRange(-20, 20),
                        ]
                    },
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    // title: {
                    // display: true,
                    // text: 'Chart.js Line Chart - Cubic interpolation mode'
                    // },
                    htmlLegend: {
                        // ID of the container to put the legend in
                        containerID: 'legend-container',
                    },

                    legend: {
                        display: false,
                        labels: {
                            usePointStyle: true,
                        },
                    },
                    tooltip: {
                        enabled: false,
                        usePointStyle: true,
                        position: 'nearest',
                        external: externalTooltipHandler
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Value'
                        },
                        suggestedMin: -10,
                        suggestedMax: 20
                    }
                }
            },
            plugins: [htmlLegendPlugin],
        });
    }
    function setNewsChart() {
        var ctx = document.getElementById('newsChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [
                    'ЯНВ',
                    'ФЕВ',
                    'МАР',
                    'АПР',
                    'МАЙ',
                    'ИЮН',
                    'ИЮЛ',
                    'АВГ',
                    'СЕН',
                    'ОКТ',
                    'НОЯ',
                    'ДЕК',],
                datasets: [{
                    label: '# of Votes',
                    data: [15, 19, 3, 5, 2, 3, 15, 19, 3, 5, 2, 3],
                    cubicInterpolationMode: 'monotone',
                    color: "red",
                    borderColor: [
                        '#005BFF',
                    ],
                    //     'rgba(54, 162, 235, 0.2)',
                    //     'rgba(255, 206, 86, 0.2)',
                    //     'rgba(75, 192, 192, 0.2)',
                    //     'rgba(153, 102, 255, 0.2)',
                    //     'rgba(255, 159, 64, 0.2)'
                    // ],
                    borderWidth: 3,
                    // pointStyle: 'rectRot',
                    pointRadius: 5,
                    pointBorderColor: '#005BFF',
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    // title: {
                    //     display: true,
                    //     text: 'Chart.js Line Chart - Cubic interpolation mode'
                    // },
                    legend: {
                        display: false,
                        labels: {
                            usePointStyle: true,
                        },
                    },
                    tooltip: {
                        enabled: false,
                        usePointStyle: true,
                        position: 'nearest',
                        external: externalTooltipHandler
                    }
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Value'
                        },
                        suggestedMin: -10,
                        suggestedMax: 20
                    }
                }
            },
        });
    }



})

const getOrCreateTooltip = (chart) => {
    let tooltipEl = chart.canvas.parentNode.querySelector('.tip');

    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.classList.add('tip')
        const table = document.createElement('table');
        table.classList.add('tip__body')
        table.style.margin = '0px';

        tooltipEl.appendChild(table);
        chart.canvas.parentNode.appendChild(tooltipEl);
    }

    return tooltipEl;
};

const externalTooltipHandler = (context) => {
    // Tooltip Element
    const { chart, tooltip } = context;
    const tooltipEl = getOrCreateTooltip(chart);

    // Hide if no tooltip
    tooltipEl.style.transitionDelay = '0s'
    if (tooltip.opacity === 0) {
        tooltipEl.style.transitionDelay = '0.2s'
        tooltipEl.style.opacity = 0;

        return;
    }

    // Set Text
    if (tooltip.body) {
        const titleLines = tooltip.title || [];
        const bodyLines = tooltip.body.map(b => b.lines);

        const tableHead = document.createElement('thead');

        titleLines.forEach(title => {
            const tr = document.createElement('tr');
            tr.style.borderWidth = 0;

            const th = document.createElement('th');
            th.style.borderWidth = 0;
            const text = document.createTextNode(title);

            th.appendChild(text);
            tr.appendChild(th);
            tableHead.appendChild(tr);
        });

        const tableBody = document.createElement('tbody');
        bodyLines.forEach((body, i) => {
            const colors = tooltip.labelColors[i];

            const span = document.createElement('span');
            span.style.background = colors.borderColor;
            span.style.borderColor = colors.borderColor;
            span.style.borderWidth = '2px';
            span.style.marginRight = '10px';
            span.style.height = '10px';
            span.style.width = '10px';
            span.style.display = 'inline-block';

            const tr = document.createElement('tr');
            tr.style.backgroundColor = 'inherit';
            tr.style.borderWidth = 0;

            const td = document.createElement('td');
            td.style.borderWidth = 0;

            const text = document.createTextNode(body);

            td.appendChild(span);
            td.appendChild(text);
            tr.appendChild(td);
            tableBody.appendChild(tr);
        });

        const tableRoot = tooltipEl.querySelector('.tip__body');

        // Remove old children
        while (tableRoot.firstChild) {
            tableRoot.firstChild.remove();
        }

        // Add new children
        tableRoot.appendChild(tableHead);
        tableRoot.appendChild(tableBody);
    }

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';

    // debugger
    console.log(tooltip.caretX)
    if ($(tooltipEl).outerWidth() + tooltip.caretX + positionX > window.innerWidth) {
        tooltipEl.style.transform = 'translateX(-100%)';
    } else {
        tooltipEl.style.transform = 'none';
        console.log('321')
    }
};

const getOrCreateLegendList = (chart, id) => {
    const legendContainer = document.getElementById(id);
    let listContainer = legendContainer.querySelector('ul');

    if (!listContainer) {
        listContainer = document.createElement('ul');
        listContainer.style.display = 'flex';
        listContainer.style.flexDirection = 'row';
        listContainer.style.margin = 0;
        listContainer.style.padding = 0;

        legendContainer.appendChild(listContainer);
    }

    return listContainer;
};

const htmlLegendPlugin = {
    id: 'htmlLegend',
    afterUpdate(chart, args, options) {
        const ul = getOrCreateLegendList(chart, options.containerID);

        // Remove old legend items
        while (ul.firstChild) {
            ul.firstChild.remove();
        }

        // Reuse the built-in legendItems generator
        const items = chart.options.plugins.legend.labels.generateLabels(chart);

        items.forEach(item => {
            const li = document.createElement('li');
            li.style.alignItems = 'center';
            li.style.cursor = 'pointer';
            li.style.display = 'flex';
            li.style.flexDirection = 'row';
            li.style.marginLeft = '10px';

            li.onclick = () => {
                const { type } = chart.config;
                if (type === 'pie' || type === 'doughnut') {
                    // Pie and doughnut charts only have a single dataset and visibility is per item
                    chart.toggleDataVisibility(item.index);
                } else {
                    chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
                }
                chart.update();
            };

            // Color box
            const boxSpan = document.createElement('span');
            boxSpan.style.background = item.fillStyle;
            boxSpan.style.borderColor = item.strokeStyle;
            boxSpan.style.borderWidth = item.lineWidth + 'px';
            boxSpan.style.display = 'inline-block';
            boxSpan.style.height = '20px';
            boxSpan.style.marginRight = '10px';
            boxSpan.style.width = '20px';

            // Text
            const textContainer = document.createElement('p');
            textContainer.style.color = item.fontColor;
            textContainer.style.margin = 0;
            textContainer.style.padding = 0;
            textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

            const text = document.createTextNode(item.text);
            textContainer.appendChild(text);

            li.appendChild(boxSpan);
            li.appendChild(textContainer);
            ul.appendChild(li);
        });
    }
};

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}