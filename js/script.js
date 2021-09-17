_IS_MOBILE = false;
_IS_TABLET = false;

jQuery(function ($) {
    $(document).ready(function () {
        if ($(window).width() < 768) {
            _IS_TABLET = true;
        }
        if ($(window).width() < 540) {
            _IS_MOBILE = true;
        }

        setHeaderMenu();
        setTab();
        setSmoothAnchorScrolling();
        setOwls();

    })
})

function setHeaderMenu(){
    let menu = $('.header__menu')
    let burger = $('.header__burger')
    let close = $('.header__menu-close')

    burger.click(()=>menu.addClass('--active'))
    close.click(()=>menu.removeClass('--active'))

    let isNoTransition = false

    $(window).resize(()=>{
        isNoTransition = true
        menu.css('transition','all 0s ease 0s')
        setTimeout(()=>{
            if(isNoTransition){
                menu.css('transition','')
                isNoTransition = false
            }
        },50)
    })
}

function setSmoothAnchorScrolling(){
     
	$('.header__menu').on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 500 мс
		$('body,html').animate({scrollTop: top - 50}, 500);
	});
}

function setTab(){
    let handler = $('.tab__handler')
    let inner = $('.tab__inner')

    let isActive = false
    handler.removeClass('--active')
    inner.hide()


    handler.click(()=>{
        // handler.toggleClass('--active')
        isActive = !isActive
        if(isActive){
            handler.addClass('--active')
            inner.stop().slideDown()
        }else{
            inner.stop().slideUp(()=>{
                handler.removeClass('--active')
            })
        }
    })
    // handler.click(()=>handler.removeClass('--active'))

}

function setOwls(){
    let goods = setGoodsOwl();
    let insight = setInsightsOwl();
    let news = setNewsOwl();

    $(window).resize(()=>{
        if(innerWidth<750){
            setGoodsOwl()
        }else{
            goods.owlCarousel().destroy()
        }
    })
}

    function setGoodsOwl(){
        let item = $('.goods .goods__cards').owlCarousel({
            items: 1,
            // margin: 10,
            // loop: true,
            nav: true,
            autoWidth:true,
            navElement:'div',
            navContainer: '.goods__owl-nav',
            dotsContainer: '.goods__owl-dots',
            navText:''
          })
        return item
    }
    function setInsightsOwl(){
        let item = $('.insights .insights__cards-inner').owlCarousel({
            items: 1,
            // margin: 10,
            // loop: true,
            nav: true,
            autoWidth:true,
            navElement:'div',
            navContainer: '.insights__owl-nav',
            dotsContainer: '.insights__owl-dots',
            navText:''
          })
        return item
    }
    function setNewsOwl(){
        let item = $('.news .news__cards-inner').owlCarousel({
            items: 1,
            // margin: 10,
            // loop: true,
            nav: true,
            autoWidth:true,
            navElement:'div',
            navContainer: '.news__owl-nav',
            dotsContainer: '.news__owl-dots',
            navText:''
          })
        return item
    }

function fixWindow(type) {
    if (type) {
        setTimeout(function () {
            /* Ставим необходимую задержку, чтобы не было «конфликта» в случае, если функция фиксации вызывается сразу после расфиксации (расфиксация отменяет действия расфиксации из-за одновременного действия) */
            if (!document.body.hasAttribute('data-body-scroll-fix')) {
                // Получаем позицию прокрутки
                let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                // Ставим нужные стили
                document.body.setAttribute('data-body-scroll-fix', scrollPosition); // Cтавим атрибут со значением прокрутки
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.top = '-' + scrollPosition + 'px';
                document.body.style.left = '0';
                document.body.style.width = '100%';
            }
        }, 15);
    } else {
        if (document.body.hasAttribute('data-body-scroll-fix')) {
            // Получаем позицию прокрутки из атрибута
            let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
            // Удаляем атрибут
            document.body.removeAttribute('data-body-scroll-fix');
            // Удаляем ненужные стили
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.width = '';
            // Прокручиваем страницу на полученное из атрибута значение
            window.scroll(0, scrollPosition);
        }
    }
}