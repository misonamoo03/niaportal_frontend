<template>
  <div class="container">
    <h1>
      <NuxtLink to="/"><img src="~assets/images/m_logo.png" alt="logo" /></NuxtLink>
    </h1>
    <ul class="tab">
      <li :class="{ current: pageName === 'signIn' }" data-tab="tab1" ><NuxtLink to="/member/signIn">로그인</NuxtLink></li>
      <li :class="{ current: pageName === 'signUp' }" data-tab="tab2">
        <NuxtLink to="/member/signUp">가입하기</NuxtLink>
      </li>
      <li :class="{ current: pageName === 'findPass' }" data-tab="tab3"><NuxtLink to="/member/findPass">비밀번호 찾기</NuxtLink></li>
    </ul>

    <!-- tab1[S] -->
    <div id="tab1" :class="{ tabcontent: true, current: pageName === 'signIn' }">
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
          <button type="button" id="btnlogin" class="btn_type btn_primary" @click="signInMethod">
            <span>로그인</span>
          </button>
        </div>
      </div>
    </div>
    <!-- tab1[E] -->

    <!-- tab2[S] -->
    <div id="tab2" :class="{ tabcontent: true, current: pageName === 'signUp' }">
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
          <button type="button" id="btnJoin" class="btn_type btn_primary" @click="signUpMethod">
            <span >가입하기</span>
          </button>
        </div>
      </div>
    </div>
    <!-- tab2[E] -->

    <!-- tab3[S] -->
    <div id="tab3" :class="{ tabcontent: true, current: pageName === 'findPass' }">
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
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";

export default {
  props: ["pageName"],
  data() {
    return {
      codeList: null,
      loginEmail: "",
      loginPassword: "",
      email: "",
      userPassword: "",
      rePassword: "",
      userName: "",
      tel: "",
      agency: "",
    };
  },
  created() {
    // 뷰가 생성되고 데이터가 이미 감시 되고 있을 때 데이터를 가져온다.
    this.fetchData();
  },
  watch: {
    // 라우트가 변경되면 메소드를 다시 호출됩니다.
    //'$route': 'fetchData'
  },
  methods: {
    // 배열 리터럴
    ...mapMutations([]), //<--store mutation 관리
    ...mapActions(["getCodeList"]), //<-- store Action 처리
    ...mapActions("member", ["signUp", "signIn"]),//<--store member의 Action 관리
    async fetchData() {
      try {
        let param = {
          prtCode: "000",
          codeType: "",
        };

        await this.getCodeList(param).then(); //<--actions로 조회 및 state 등록
        this.codeList = this.getCommonCodeList; //<--getters로 가져오기
        console.log("12345678", this.code); //<-- state로 가져 오기
      } catch (e) {
        console.log(e.message);
        this.returnMsg = e.message;
      }
    },
    //회원가입
    async signUpMethod() {
      try {
        let userInfo = {
          email: this.email,
          password: this.userPassword,
          rePassword: this.rePassword,
          userName: this.userName,
          tel: this.tel,
          agency: this.agency,
          companyTypeCode: "CDC001",
        };
        await this.signUp({ userInfo: userInfo }).then(() => this.redirect());
      } catch (e) {
        console.log(e.message);
        this.returnMsg = e.message;
      }
    },
    //로그인
    async signInMethod() {
      try {
        let userInfo = {
          email: this.loginEmail,
          password: this.loginPassword,
        };

        await this.signIn(userInfo).then(() => this.redirect());
      } catch (e) {
        console.log(e.message);
        this.returnMsg = e.message;
      }
    },
    redirect() {
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["getCommonCodeList"]),//<--store Getter 관리
    ...mapState({ code: (state) => state.commonCodeList }),//<--store state 관리
  },
};
</script>
