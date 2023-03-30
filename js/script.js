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
        skin: 'custom',
        type: 'double',
        grid: false,
        min: 10_000,
        max: 100_000,
        drag_interval: true,
        step: 1_000,
    });

    let irsInstance = irs.data('ionRangeSlider');
    irsInstance.bindFromValue('.js-range-bind-from');
    irsInstance.bindToValue('.js-range-bind-to');
    irsInstance.bindValue('max', '.js-range-bind-max');
}
