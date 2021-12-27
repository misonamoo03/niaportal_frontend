/* global $ */

// LAYER POPUP
function openLayer(el) {
    var temp = $('#' + el); //레이어의 id를 temp변수에 저장

    if(!$('.popup:visible').length) {
        $("<div/>", {
            "id": "overlay",
        }).appendTo('body').fadeIn(200);
    }
    $('.popup').hide();
    temp.show();
    //setModalMaxHeight(temp);
    temp.css({
        'left': ($(window).scrollLeft() + ($(window).width() - $(this).outerWidth())/2) + 'px',
        'top': (($(window).height() - temp.outerHeight())/2) + 'px'
    });
    popupPosInit();
    console.log($(window).width() - temp.outerWidth());
    //$('body, html').css('overflow','hidden');
}
function hideLayer(el) {
    var temp = $('#' + el); //레이어의 id를 temp변수에 저장

    if(!$('.popup:visible').length) {
        $("<div/>", {
            "id": "overlay",
        }).appendTo('body').fadeIn(200);
    }
    temp.hide();
}

// RESPONSIVE TABLE SCROLL
function hscrollInit(){
    if($('.scrollable.horizontal').length) {
        $('.scrollable.horizontal').each(function() {
            $(this).wrap("<div class='scrollable-container'></div>");
            $(this).append(
            '<div class="slide-control">' +
            '   <button type="button" class="btn prev"><i>이전</i></button>'+
            '   <button type="button" class="btn next"><i>다음</i></button>'+
            '</div>');
            var $scrollx = $(this),
                $sPrev = $scrollx.find('.prev'),
                $sNext = $scrollx.find('.next');

            $sPrev.hide();
            $scrollx.scroll(function() {
                if($scrollx.scrollLeft() > $scrollx.find('table').width()-$scrollx.width() - 30){
                    $sNext.fadeOut();
                    $sPrev.fadeIn();
                }
                if($scrollx.scrollLeft() <= 30){
                    $sPrev.fadeOut();
                    $sNext.fadeIn();
                }

            });
            $sNext.on('touchstart click', function(e){
                e.preventDefault();
                $scrollx.animate({scrollLeft:"+=100px"},600);
                if($scrollx.scrollLeft()> $scrollx.find('table').width()-$scrollx.width() - 30){
                    $sNext.hide();
                }
            });

            $sPrev.on('touchstart click', function(e){
                e.preventDefault();
                $scrollx.animate({scrollLeft:"-=100px"},600);
                if($scrollx.scrollLeft()<= 30){
                    $sPrev.hide();
                }

            });
        });
    }
}

function popupPosInit(){
    if($('.popup').length) {
        $('.popup').each(function() {
            $(this).css({
                'left': ($(window).scrollLeft() + ($(window).width() - $(this).outerWidth())/2) + 'px',
                'top': (($(window).height() - $(this).outerHeight())/2) + 'px'
            });
        });

    }
}

$(function() {

    var $window = $(window);

    $('body').on('click', '.popup .btn-x, .popup .close', function() {
        $(this).parent().parent('.popup').hide();
        $('#overlay').fadeOut(200, function() {
            $(this).remove();
        });
        return false;
        $('body, html').css('overflow','');
    });

    function tabContent(selecter, contents) {
        $(selecter).click(function() {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active').siblings(this).removeClass('active');
                $($(this).find('a').attr('href')).addClass('active').siblings(contents).removeClass('active');
            }

            return false;
        });
    }

    tabContent('.tab-nav.use-tab li', 'div.tab-item');

    // FAQ
    $('.faq-list.use-faq dt a').click(function() {

        var myList = $(this).closest('dt').next('dd');

        if(!$(this).hasClass('active')) {
            $('.faq-list dt').removeClass('active');
            $(this).addClass('active');
            $('.faq-list dd').hide();
            myList.show();
        } else {
            $(this).removeClass('active');
            myList.hide();
        }
        return false;
    });

    // UPLOAD FILE

    var fileTarget = $('.file-upload .upload-hidden');

    fileTarget.on('change', function () { // 값이 변경되면
        if (window.FileReader) { // modern browser
            var filename = $(this)[0].files[0].name;
        } else { // old IE
            var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
        }

        // 추출한 파일명 삽입
        $(this).siblings('.upload-name').val(filename);
    });

     //preview image
    var imgTarget = $('.preview-image .upload-hidden');
    var imgDelete = imgTarget.parent().find('.del-file');

    imgDelete.on('click', function(e) {
        $(this).parent().find('.thumb>img, .upload-display').remove();
        $(this).parent().find('.mod-file').hide();
        $(this).hide();
        e.preventDefault();
    });

    imgTarget.on('change', function () {
        var parent = $(this).parent();
        var imgDelete = parent.find('.del-file');
        var imgModify = parent.find('.mod-file');
        parent.children('.upload-display').remove();
        imgDelete.show();
        imgModify.show();
        if (window.FileReader) {
            //image 파일만
            if (!$(this)[0].files[0].type.match(/image\//)) return;

            var reader = new FileReader();
            reader.onload = function (e) {
                var src = e.target.result;
                parent.find('.thumb').html('<div class="upload-display"><div class="upload-thumb-wrap"><img src="' + src + '" class="upload-thumb"></div></div>');
            }
            reader.readAsDataURL($(this)[0].files[0]);
        } else {
            $(this)[0].select();
            $(this)[0].blur();
            var imgSrc = document.selection.createRange().text;
            parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img class="upload-thumb"></div></div>');

            var img = $(this).siblings('.upload-display').find('img');
            img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\"" + imgSrc + "\")";
        }
    });
    // SCROLL EVENT
    $window.scroll(function() {
        var wScroll = $(this).scrollTop();

        if(wScroll > 100) {
            $('.scroll-top').addClass('is-showing');
        } else {
            $('.scroll-top').removeClass('is-showing');
        }
        if(wScroll > $('header').outerHeight()) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

    // SCROLL TOP BUTTON

    $('.scroll-top').on('click', function() {
        $('html, body').animate({scrollTop:0}, '2000', function() {
            $('.scroll-top').removeClass('is-showing');
        });
        return false;

    });

    $('#toggle-open').click(function() {
        $('header nav').addClass('active');
        $('body').on('click', '#toggle-close', function() {
            $('header nav').removeClass('active');
            $('body, html').css('overflow','');
        });
        $('body, html').css('overflow','hidden');
        return false;
    });




    $window.resize(function() {
        //setModalMaxHeight('.popup');
        popupPosInit();
    }).resize();
    checkClass();
    checkPaddingTop();

});
function checkClass() {
    if($('#content').length != 0) {
        var wClass = $('#content').attr('class');
        $('body').addClass('body-'+wClass);
        console.log(wClass);
    }
}

function checkPaddingTop() {
    if($('header').length != 0) {
        $('#content').css({
            'padding-top': $('header').outerHeight(),
        });
    }
}


