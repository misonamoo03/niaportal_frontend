<template>
	<footer>
            <div class="container">
                <h1><img src="~assets/img/logo_foot.png" alt=""></h1>
                <nav>
                    <span class="logo"><a href="https://www.nia.or.kr/site/nia_kor/main.do" target="_nia"><img src="~assets/img/logo-nia.png" alt=""></a></span>
                    <ul>
                        <li><a href="#">서비스 이용약관</a></li>
                        <li><a href="#">개인정보처리방침</a></li>
                    </ul>
                </nav>
                <address>서울특별시 강남구 테헤란로10길 15 ㈜아이온커뮤니케이션즈 <br>&copy; 2021 I-ON Communications. All rights reserved.</address>
                <span class="scroll-top" @click="scrollTop()"><i class="la la-angle-up" aria-hidden="true"><span class="sr-only">맨위로</span></i></span>
            </div>
        </footer><!-- /footer -->
</template>
<script>

export default {
   head: {
    script: [
      {type:"text/javascript", src:"//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"},
      {type:"text/javascript", src:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"}
    ]
  },
	data() {
		return {
			
		};
	},
	methods: {
		scrollTop() {
				jQuery('html, body').animate({scrollTop:0}, '2000', function() {
            $('.scroll-top').removeClass('is-showing');
        });
        return false;
		},
    
	},

}
</script>