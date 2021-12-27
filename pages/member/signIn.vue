<template>
  <div class="form login-form">
     <h1><NuxtLink to="/"><img src="~assets/img/logo.png" alt=""></NuxtLink></h1>
      <h2>로그인</h2>
      <input
          type="email"
          name="login_email"
          placeholder="ID (이메일)"
          v-model="loginEmail"
          class="form-control"
        />
        <input type="password" 
          name="login_password" 
          placeholder="비밀번호"  
          @keydown.13="signInMethod" 
          v-model="loginPassword" 
          class="form-control"
        />
      <div class="btn-box">
          <button type="button" class="btn dark btn-block" @click="signInMethod">로그인하기</button>
      </div>
      <div class="save-id">
          <span class="checkbox inline">
              <input type="checkbox" name="myCheck" id="myCheck" v-model="saved"><label for="myCheck">아이디 저장</label>
          </span>
          <NuxtLink to="/member/findPass">비밀번호 찾기</NuxtLink>
      </div>
      <hr>
      <div class="text-center">
          <p class="my-3">계정이 없으신가요?</p>
          <NuxtLink to="/member/signUp" class="btn line blue btn-block">회원가입</NuxtLink>
      </div>
  </div><!-- /.form -->
</template>

<script>
import Cookie, { remove } from 'js-cookie'
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";
import { validate, extend } from 'vee-validate';
import { required, email, integer, is_not } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: '{_field_}을(를) 입력해 주세요.'
})

extend('email',  {
  ...email,
  message: '이메일 형식을 확인해 주세요.'
})

extend('integer',  {
  ...integer,
  message: '{_field_}은(는) 숫자만 입력 가능합니다.'
})

extend('is_not',  {
  ...is_not,
  message: '{_field_}를 선택해 주세요.'
})

extend('regex',  {
  validate(value) {
    if (/^[가-힣|a-z|A-Z\*]+$/.test(value)) {
      return true;
    }
    return '{_field_}은(는) 한글, 영문만 입력 가능합니다.'
  }
});

extend('min', {
  validate(value, { min }) {
    if (value.length >= min) {
      return true;
    }
    return '{_field_}는 최소 {min}자 이상이어야 합니다.';
  },
  params: ['min']
});

extend('checkPass', {
  validate(value, { checkVal }) {
    if (value == checkVal) {
      return true;
    }
    return '입력하신 비밀번호와 일치하지 않습니다.';
  },
  params: ['checkVal']
});

export default {
  layout: 'blank',
  data() {
    return {
      codeList: null,
      loginEmail: "",
      loginPassword: "",
      findPassEmail: "",
      email: "",
      userPassword: "",
      rePassword: "",
      userName: "",
      tel: "",
      agency: "",
      companyTypeCode: "",
      saved: false
    };
  },
  created() {
    // 뷰가 생성되고 데이터가 이미 감시 되고 있을 때 데이터를 가져온다.
    this.fetchData();
  },
  beforeMount() {
    this.isSaved();
  },
  watch: {
    // 라우트가 변경되면 메소드를 다시 호출됩니다.
    //'$route': 'fetchData'
  },
  methods: {
    // 배열 리터럴
    ...mapMutations([]), //<--store mutation 관리
    ...mapActions(["getCodeList"]), //<-- store Action 처리
    ...mapActions("member", ["signUp", "signIn", "findPass"]),//<--store member의 Action 관리
    async fetchData() {
      try {
        let param = {
          prtCode: "000",
          codeType: "",
        };

        await this.getCodeList(param).then(); //<--actions로 조회 및 state 등록
        this.codeList = this.getCommonCodeList; //<--getters로 가져오기
      } catch (e) {
        console.log(e.message);
        this.returnMsg = e.message;
      }
    },
    
    //로그인
    async signInMethod() {
      try {
        var errorChk = true;
        await validate(this.loginEmail, 'required|email',{
          name: '이메일'
        }).then(result => {
          if (!result.valid) {
            alert(result.errors[0]);
            errorChk = false;
          }
        });
        if(!errorChk){
          return;
        }
        await validate(this.loginPassword, 'required', {
          name: '비밀번호',
          values: {
          }
        }).then(result => {
          if (!result.valid) {
            alert(result.errors[0]);
            errorChk = false;
          }
        });
        if(!errorChk){
          return;
        }
        
        let userInfo = {
          email: this.loginEmail,
          password: this.loginPassword,
        };
        //store 호출
        await this.signIn(userInfo).then(() => {
          if(this.saved === true){
            Cookie.set('savedEmail', this.loginEmail);
          } else {
            Cookie.remove('savedEmail');
          }
          alert("로그인 되었습니다.")
          this.redirect()
        });
        //정상처리
      } catch (e) {
        alert(e.message);
        //에러처리
        this.returnMsg = e.message;
      }
    },
    
    redirect() {
      this.$router.push("/");
    },
    isSaved() {
      const savedEmail = Cookie.get('savedEmail')
      if(savedEmail == null) return;
      this.saved = true;
      this.loginEmail = savedEmail;
    }
  },
  computed: {
    ...mapGetters(["getCommonCodeList"]),//<--store Getter 관리
    ...mapGetters("member", ["getFindPwData"]),//<--store Getter 관리
    ...mapState({ code: (state) => state.commonCodeList }),//<--store state 관리
  },
};
</script>