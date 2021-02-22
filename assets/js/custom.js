// tab
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

$(function() {
	$('ul.tab li').click(function() {
		var activeTab = $(this).attr('data-tab');
		$('ul.tab li').removeClass('current');
		$('.tabcontent').removeClass('current');
		$(this).addClass('current');
		$('#' + activeTab).addClass('current');
	})
});

// video

$(".pop_video a").click(function() {
	$(".video-popup").addClass("reveal"),
	$(".video-popup .video-wrapper").remove(),
	$(".video-popup").append("<div class='video-wrapper'><video src='video/" + $(this).data("video") + ".mp4' controls autoplay encrypted-media allowfullscreen></video></div>")
}),
	$(".video-popup-closer").click(function() {
	$(".video-popup .video-wrapper").remove(),
	$(".video-popup").removeClass("reveal")
});

// img

$(".pop_img a").click(function() {
	$(".img-popup").addClass("reveal"),
	$(".img-popup .img-wrapper").remove(),
	$(".img-popup").append("<div class='img-wrapper'><img src='images/" + $(this).data("img") + ".jpg'></div>")
}),
	$(".img-popup-closer").click(function() {
	$(".img-popup .img-wrapper").remove(),
	$(".img-popup").removeClass("reveal")
});

// accordion

$(document).ready(function(){
	$(".accordion p").hide();

	// $("ul > li:first-child a").next().show();
	$(".accordion ul li a").click(function(){
	$(this).next().slideToggle(300);
	
	// $(this).next().slideDown(300);
	$(".accordion ul li a").not(this).next().slideUp(300);

	$(".accordion ul li a").css('background','#f1f2f7'),
	$(".accordion ul li a").not(this).css('background','#fff');

	// $(this).find(".arrow").toggleClass("up")
	$(this).find(".arrow").addClass("up"),
	$(".accordion ul li a").not(this).find(".arrow").removeClass("up")
	
	return false;
});
	$(".accordion ul li a").eq(0).trigger("click");
});


// pop


$(function(){
    setPop();
});

// 팝업 세팅
function setPop() {
  var popOpenBtn = $('.popOpenBtnCmmn');
  
  //팝업 열기
  popOpenBtn.on('click',function(){
    var clickNum = $(this).attr('data-num');
    
    $('#popUp_'+clickNum).fadeIn(200);
  })
  
  //팝업 닫기
  $('.popBg, .popCloseBtnCmmn').on('click',function(){
    var clickNum = $(this).attr('data-num');
    
    $('#popUp_'+clickNum).fadeOut(200);
  })
}

// 메인 팝업 쿠키

 if(getCookie("notToday")!="Y"){
        $("#main_popup").show('fade');
}

function closePopupNotToday(){               
        setCookie('notToday','Y', 1);
        $("#main_popup").hide();
}
function setCookie(name, value, expiredays) {
    var today = new Date();
        today.setDate(today.getDate() + expiredays);

        document.cookie = name + '=' + escape(value) + '; path=/; expires=' + today.toGMTString() + ';'
}

function getCookie(name) 
{ 
    var cName = name + "="; 
    var x = 0; 
    while ( x <= document.cookie.length ) 
    { 
        var y = (x+cName.length); 
        if ( document.cookie.substring( x, y ) == cName ) 
        { 
            if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 ) 
                endOfCookie = document.cookie.length;
            return unescape( document.cookie.substring( y, endOfCookie ) ); 
        } 
        x = document.cookie.indexOf( " ", x ) + 1; 
        if ( x == 0 ) 
            break; 
    } 
    return ""; 
}
function closeMainPopup(){
    // $("#main_popup").hide('fade');
    $("#main_popup").hide();
}