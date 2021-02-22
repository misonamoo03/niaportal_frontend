<template>
	<div id="header">
		<div class="container">
			<h1>
				<NuxtLink to="/"
					><img src="~assets/images/m_logo.png" alt="logo"
				/></NuxtLink>
			</h1>
			<nav role="navigation">
				<ul id="main-menu">
					<li>
						<a href="#">AI데이터</a>
						<ul id="sub-menu">
							<li><NuxtLink to="/sports/CD020">골프데이터</NuxtLink></li>
							<li><NuxtLink to="/sports/CD021">축구데이터</NuxtLink></li>
							<li><NuxtLink to="/sports/CD022">농구데이터</NuxtLink></li>
						</ul>
					</li>
					<li>
						<a href="#">AI게시판</a>
						<ul id="sub-menu">
							<li><NuxtLink to="/board/qna/qna">고객문의</NuxtLink></li>
							<li><NuxtLink to="/board/faq/faq">FAQ</NuxtLink></li>
						</ul>
					</li>
				</ul>
			</nav>
			<div class="util">
				<ul v-if="isNotLogin">
					<li class="util_search">
						<NuxtLink to="/board/search"
							><img src="~assets/images/search.png" alt="search"
						/></NuxtLink>
					</li>
					<li><NuxtLink to="/member/signUp">회원가입</NuxtLink></li>
					<li class="util_bar">|</li>
					<li><NuxtLink to="/member/signIn">로그인</NuxtLink></li>
				</ul>
				<!-- 로그인 후 -->
				<ul id="main-menu" v-else>
					<li class="util_search"><NuxtLink to="/board/search"><img src="~assets/images/search.png" alt="search"></NuxtLink></li>
					<li class="util_login"><a href="#">{{name}}님 <span class="util_arrow"><img src="~assets/images/login_arrow.png" alt="util_arrow"></span></a>
						<ul id="sub-menu" class="util_2depth">
							<li><NuxtLink to="/member/myPage" aria-label="submenu">정보수정</NuxtLink></li>
							<li @click="logoutMethod"><NuxtLink to="/" aria-label="submenu">로그아웃</NuxtLink></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Cookie, { getJSON, remove } from 'js-cookie'
import jsCookie from 'js-cookie';

export default {
	data() {
		return {
			isNotLogin: true,
			name: ''
		};
	},
	beforeMount() {
		this.checkLogin();
	},
	methods: {
		logoutMethod() {
			const cookie = Cookie.get();
      jsCookie.do
			for(let c in cookie) {
				if(c != 'savedEmail'){
					remove(c,{domain:'sportsaihub.com'});	
				}
			}
			this.checkLogin();
		},
		checkLogin() {
			this.name = Cookie.get('userName');
			if(Cookie.get('userName') === undefined) {
				this.isNotLogin = true;
			} else {
				this.isNotLogin = false;
			}
		},
	}
}
</script>