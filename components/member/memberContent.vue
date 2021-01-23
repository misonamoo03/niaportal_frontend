<template>
  <div class="container">
    <h1>
      <a href="/"><img src="~assets/images/m_logo.png" alt="logo" /></a>
    </h1>
    <ul class="tab">
      <li :class="{ current: name === 'signIn' }" data-tab="tab1" ><NuxtLink to="/member/signIn">로그인</NuxtLink></li>
      <li :class="{ current: name === 'signUp' }" data-tab="tab2">
        <NuxtLink to="/member/signUp">가입하기</NuxtLink>
      </li>
      <li :class="{ current: name === 'findPass' }" data-tab="tab3"><NuxtLink to="/member/findPass">비밀번호 찾기</NuxtLink></li>
    </ul>

    <!-- tab1[S] -->
    <div id="tab1" :class="{ tabcontent: true, current: name === 'signIn' }">
      <div class="member_form_wrap">
        <input
          type="email"
          name="login_email"
          placeholder="ID (이메일을 입력 하세요.)"
          v-model="loginEmail"
        />
        <input type="password" name="login_password" placeholder="비밀번호" v-model="loginPassword" />

        <input type="checkbox" id="myCheck" />
        <label for="myCheck">아이디 저장</label>

        <div class="btn_area">
          <button type="button" id="btnlogin" class="btn_type btn_primary" @click="signIn">
            <span>로그인</span>
          </button>
        </div>
      </div>
    </div>
    <!-- tab1[E] -->

    <!-- tab2[S] -->
    <div id="tab2" :class="{ tabcontent: true, current: name === 'signUp' }">
      <div class="member_form_wrap">
        <input
          type="email"
          name="join_email"
          placeholder="ID (이메일을 입력 하세요.)"
          v-model="email"
        />
        <input type="password" name="join_password" placeholder="비밀번호"  v-model="userPassword"/>
        <input
          type="password"
          name="join_password"
          placeholder="비밀번호 확인"
          v-model="rePassword"
        />
        <input type="text" name="join_name" placeholder="이름"  v-model="userName" />
        <input type="tel" name="join_tel" placeholder="전화번호"  v-model="tel"/>
        <input type="text" name="join_aff" placeholder="소속기관명" v-model="agency"/>
        <form>
          <select name="join_organization">
            <option value="organization">기관분류</option>
          </select>
        </form>

        <div class="btn_area clear">
          <button type="button" id="btnJoin" class="btn_type btn_primary" @click="signUp">
            <span >가입하기</span>
          </button>
        </div>
      </div>
    </div>
    <!-- tab2[E] -->

    <!-- tab3[S] -->
    <div id="tab3" :class="{ tabcontent: true, current: name === 'findPass' }">
      <div class="member_form_wrap">
        <input
          type="email"
          name="login_email"
          placeholder="ID (이메일을 입력 하세요.)"
        />

        <p class="warning">가입 시 입력하셨던 이메일 주소를 입력해 주세요.</p>
        <div class="btn_area">
          <button type="button" id="btnJoin" class="btn_type btn_primary">
            <span>비밀번호 찾기 메일 발송</span>
          </button>
        </div>
      </div>
    </div>
    <!-- tab3[E] -->
  </div>
</template>
<script>

export default {
  props: ['name'],
  data () {
    return {
      loginEmail: '',
      loginPassword: '',
      email: '',
      userPassword: '',
      rePassword: '',
      userName: '',
      tel: '',
      agency:'',

    }
  },
  methods: {
    async signUp () {
      try {
        console.log("email",this.email);
        let userInfo = {
          "email": this.email,
          "password":this.userPassword,
          "rePassword":this.rePassword,
          "userName":this.userName,
          "tel":this.tel,
          "agency":this.agency,
          "companyTypeCode":"CDC001"
        };
        await this.$store.dispatch('signUp', {
           userInfo: userInfo
         }).then(() => this.redirect())
      } catch (e) {
        console.log(e.message);
        this.returnMsg = e.message
      }
    },
    async signIn () {
      try {
        let userInfo = {
          "email": this.loginEmail,
          "password":this.loginPassword
        };
        await this.$store.dispatch('signIn', {
           email: this.loginEmail, password:this.loginPassword
         }).then(() => this.redirect())
      } catch (e) {
        console.log(e.message);
        this.returnMsg = e.message
      }
    },
    redirect () {
      this.$router.push('/')
    }
  }
};
</script>
