<template>
	<div id="header">
		<div class="container">
			<h1>
				<NuxtLink to="/"><img src="~assets/images/m_logo.png" alt="logo"/></NuxtLink>
			</h1>
			<nav role="navigation">
				<ul id="main-menu">
					<li>
						<a href="#">AI데이터</a>
						<ul id="sub-menu">
							<li><NuxtLink to="/sports/CD004001">골프데이터</NuxtLink></li>
							<li><NuxtLink to="/sports/CD004002">축구데이터</NuxtLink></li>
							<li><NuxtLink to="/sports/CD004003">농구데이터</NuxtLink></li>
						</ul>
					</li>
					<li>
						<a href="#">AI게시판</a>
						<ul id="sub-menu">
							<li><NuxtLink to="/board/faq/100">고객문의</NuxtLink></li>
							<li><NuxtLink to="/board/qna/200">FAQ</NuxtLink></li>
						</ul>
					</li>
				</ul>
			</nav>
			<div class="util">
				<ul v-if="isLogin">
					<li class="util_search">
						<NuxtLink to="/search"><img src="~assets/images/search.png" alt="search"/></NuxtLink>
					</li>
					<li><NuxtLink to="/member/signUp">회원가입</NuxtLink></li>
					<li class="util_bar">|</li>
					<li><NuxtLink to="/member/signIn">로그인</NuxtLink></li>
				</ul>
				<!-- 로그인 후 -->
				<ul id="main-menu" v-else>
					<li class="util_search"><a href="#"><img src="~assets/images/search.png" alt="search"></a></li>
					<li class="util_login"><a href="#">닉네임님 <span class="util_arrow"><img src="~assets/images/login_arrow.png" alt="util_arrow"></span></a>
						<ul id="sub-menu" class="util_2depth">
							<li><a href="#" aria-label="subemnu">정보수정</a></li>
							<li><a href="#" aria-label="subemnu">로그아웃</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

export default {
	data() {
		return {
			isLogin: true,
			cookie: this.$cookies.get(name)
		};
	},
	beforeMount() {
		this.checkLogin();
	},
	methods: {
		...mapMutations([]), //<--store mutation 관리
		checkLogin() {
			console.log(cookie);
		}
	}
}
</script>