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
							<li><NuxtLink to="/board/qna/1">고객문의</NuxtLink></li>
							<li><NuxtLink to="/board/faq/2">FAQ</NuxtLink></li>
						</ul>
					</li>
				</ul>
			</nav>
			<div class="util">
				<ul v-if="isNotLogin">
					<li class="util_search">
						<NuxtLink to="/search"
							><img src="~assets/images/search.png" alt="search"
						/></NuxtLink>
					</li>
					<li><NuxtLink to="/member/signUp">회원가입</NuxtLink></li>
					<li class="util_bar">|</li>
					<li><NuxtLink to="/member/signIn">로그인</NuxtLink></li>
				</ul>
				<!-- 로그인 후 -->
				<ul id="main-menu" v-else>
					<li class="util_search"><a href="#"><img src="~assets/images/search.png" alt="search"></a></li>
					<li class="util_login"><a href="#">{{name}}님 <span class="util_arrow"><img src="~assets/images/login_arrow.png" alt="util_arrow"></span></a>
						<ul id="sub-menu" class="util_2depth">
							<li><a href="#" aria-label="subemnu">정보수정</a></li>
							<li><a href="/" aria-label="subemnu" @click="logoutMethod">로그아웃</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Cookie, { remove } from 'js-cookie'

export default {
	data() {
		return {
			isNotLogin: true,
			name: Cookie.get('userName')
		};
	},
	beforeMount() {
		this.checkLogin();
	},
	methods: {
		logoutMethod() {
			const cookie = Cookie.get();
			for(let c in cookie) {
				remove(c);
			}
		},
		checkLogin() {
			console.log(1);
			console.log(this.name);
			if(this.name === undefined) {
				this.isNotLogin = true;
			} else {
				this.isNotLogin = false;
			}
		},
	}
}
</script>