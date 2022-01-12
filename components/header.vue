<template>
	<header>
        <div class="container-fluid">
            <h1  @click="closeMenu()"><NuxtLink to="/"><img src="~assets/img/logo.png" alt=""></NuxtLink></h1>
            <nav v-bind:class="{'active':isMenuOpen}">
                <ul>
                    <li><a href="#">스포츠 AI 데이터</a>
                        <ul>
                            <li @click="closeMenu()"><NuxtLink to="/sports/CD021">축구</NuxtLink></li>
                            <li @click="closeMenu()"><NuxtLink to="/sports/CD023">야구</NuxtLink></li>
                            <li @click="closeMenu()"><NuxtLink to="/sports/CD022">농구</NuxtLink></li>
                            <li @click="closeMenu()"><NuxtLink to="/sports/CD024">배구</NuxtLink></li>
                            <li @click="closeMenu()"><NuxtLink to="/sports/CD020">골프</NuxtLink></li>
                        </ul>
                    </li>
                    <li><a href="https://aihub.or.kr/" target="_new">데이터 신청 바로가기</a></li>
                    <!-- <li><a href="#">로그인</a></li> -->
                    <li  v-if="isNotLogin" @click="closeMenu()">
                      <NuxtLink to="/member/signIn">로그인</NuxtLink>
                    </li>
                      <li  v-else  @click="closeMenu()"><NuxtLink to="/member/myPage"><span>내 정보</span>{{email}} <i class="bi bi-caret-down-fill"></i></NuxtLink>
                        <ul>
                            <li><NuxtLink to="/member/myPage">내 정보</NuxtLink></li>
                            <li @click="logoutMethod"><NuxtLink to="/">로그아웃</NuxtLink></li>
                        </ul>
                      </li>
                </ul>
                <button type="button" id="toggle-close" class="btn"  v-on:click="closeMenu()"><i class="bi bi-x" aria-hidden="true"></i><span class="sr-only">메뉴닫기</span></button>
            </nav>
            <button type="button" id="toggle-open" class="btn" v-on:click="openMenu()"><i class="bi bi-list"></i><span class="sr-only">메뉴열기</span></button>
        </div>
    </header><!-- /header -->
</template>

<script>
import Cookie, { getJSON, remove } from 'js-cookie'
import jsCookie from 'js-cookie';

export default {
	data() {
		return {
			isNotLogin: true,
			name: '',
      email:'',
      isMenuOpen:false
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
				if(c != 'savedEmail' || c != 'notToday'){
					remove(c,{domain:'sportsaihub.com'});	
				}
			}
			this.checkLogin();
		},
		checkLogin() {
			this.name = Cookie.get('userName');
      this.email = Cookie.get('email');
			if(Cookie.get('userName') === undefined) {
				this.isNotLogin = true;
			} else {
				this.isNotLogin = false;
			}
		},
    openMenu: function () {

      this.isMenuOpen = true;
      //$('body, html').css('overflow','hidden');
       document.getElementsByTagName("body")[0].style.overflow='hidden';
       document.getElementsByTagName("html")[0].style.overflow='hidden';
    },
    closeMenu: function () {

      this.isMenuOpen = false;
      document.getElementsByTagName("body")[0].style.overflow='';
       document.getElementsByTagName("html")[0].style.overflow='';
    }
    
	},

}
</script>