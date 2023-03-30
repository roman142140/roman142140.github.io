{
    $('#ex_1').IMask({
        mask: [
            {
                mask: '0000-00000-0 ',
                type: 'ИНН юридического лица',
            },
            {
                mask: '0000-000000-00',
                type: 'ИНН физического лица',
            },
        ],
    });

    let element = $('#ex_1');
    let description = element.next();
    let mask = element.data('IMask');

    element.on('input', () => {
        let current_mask = mask.masked.currentMask;
        let is_complete = current_mask.isComplete;
        let current_mask_type = current_mask.type;
        if (is_complete) {
            description.text(current_mask_type);
        } else {
            description.text('');
        }
    });
}
{
    let element = $('#ex_2_input');
    let select = $('#ex_2_select');
    let mask = element.data('IMask');

    select.on('change', function () {
        let indexSelected = this.selectedIndex,
            currentOptionValue = this.querySelectorAll('option')[indexSelected].value;

        mask.updateMask(currentOptionValue);
    });
}
{
    let element = $('#ex_3_input');
    let select = $('#ex_3_select');
    let mask = element.data('IMask');

    select.on('change', function () {
        let indexSelected = this.selectedIndex;
        let data = this.querySelectorAll('option')[indexSelected].dataset;

        // console.log(data);
        let { placeholder, separator, prefix, suffix } = data;

        element.attr('placeholder', placeholder);
        mask.updateSeparator(separator);
        mask.updatePrefixValue(prefix);
        mask.updateSuffixValue(suffix);
    });
    select.trigger('change');
}
{
    let irs = $('.js-range').ionRangeSlider({
        type: 'double',
        grid: true,
    });
}
{
    let irs = $('.js-range-bind').ionRangeSlider({
        type: 'double',
        grid: true,
    });

    let irsInstance = irs.data('ionRangeSlider');
    irsInstance.bindFromValue('.js-range-bind-from');
    irsInstance.bindToValue('.js-range-bind-to');
    irsInstance.bindValue('max', '.js-range-bind-max');
}

// // let irs_custom = $('.js-range-slider-custom').ionRangeSlider({
// //     skin: 'custom',
// //     type: 'double',
// //     grid: true,

// //     min: 1_000,
// //     max: 10_000,

// //     from_min: 0,
// //     from_max: 5000,
// //     min_interval: 2000,
// //     drag_interval: true,

// //     step: 500,
// // });

// // irs_custom.bindValue('min', '.binded_element_min');
// // irs_custom.bindFromValue('.binded_element_from');
// // irs_custom.bindToValue('.binded_element_to');

// function ex_1() {
//     let el1 = $('#input-jqueryimask-example-1');
//     let mask1 = el1.IMask({ mask: [{ mask: '000 000' }, { mask: '00 00 00 00' }] });

//     function setMask() {
//         let el2 = $('#input-jqueryimask-example-2');
//         el2.IMask({
//             mask: 'num руб.',
//             eager: true,
//             blocks: {
//                 num: {
//                     mask: Number,
//                     thousandsSeparator: ' ',
//                 },
//             },
//         });
//     }
//     function setActionForMask() {
//         let el2 = $('#input-jqueryimask-example-2');
//         let el2desk = $('#input-jqueryimask-example-2-desk');
//         let mask2 = el2.data('IMask');
//         mask2.on('accept', function (e) {
//             let val = mask2.unmaskedValue;
//             if (!val) {
//                 el2desk.text('');
//             } else if (val < 100_000) {
//                 el2desk.text('Мало');
//             } else if (val < 500_000) {
//                 el2desk.text('Норм');
//             } else {
//                 el2desk.text('Идеально');
//             }
//         });
//         console.log();
//     }
//     setMask();
//     setActionForMask();
// }
// ex_1();

// function ex_2() {
//     let irs = $('#input-irsstyles-example-1').ionRangeSlider({
//         type: 'double',
//         grid: true,
//     });

//     let irs_custom = $('#input-irsstyles-example-2').ionRangeSlider({
//         skin: 'custom',
//         type: 'double',

//         min: 1_000,
//         max: 10_000,

//         from_min: 0,
//         from_max: 5000,
//         min_interval: 2000,
//         drag_interval: true,

//         step: 500,
//     });
// }
// ex_2();

// let masksArray = ['+{7} 000 000-00-00', '+{375} 00 000-00-00'];
// function changeMask() {
//     let el = $('#input-phonemask-example-changeMask');
//     let mask = el.data('IMask');
//     let currentMaskValue = mask.masked.currentMask.mask;
//     let nextIndex = (masksArray.indexOf(currentMaskValue) + 1) % masksArray.length;

//     mask.updateMask(masksArray[nextIndex]);
// }

// function ex_3() {
//     let irs_custom = $('#input-irsstyles-example-bind').ionRangeSlider({
//         skin: 'custom',
//         type: 'double',
//         min: 1_000,
//         max: 10_000,
//         min_interval: 2_000,
//         drag_interval: true,
//         step: 500,
//     });

//     instance = irs_custom.data('ionRangeSlider');

//     instance.bindFromValue('#input-irsstyles-example-bind-from');
//     instance.bindToValue($('#input-irsstyles-example-bind-to'));
// }
// ex_3();
