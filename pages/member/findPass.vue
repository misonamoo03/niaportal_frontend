<template>
  <div class="form login-form">
      <h1><NuxtLink to="/"><img src="~assets/img/logo.png" alt=""></NuxtLink></h1>
      <h2>비밀번호 찾기</h2>
      <input type="text" class="form-control" placeholder="ID (이메일)" v-model="findPassEmail">
      <p class="help-block text-center">가입 시 입력하셨던 이메일 주소를 입력해 주세요</p>
      <div class="btn-box">
          <button type="button" class="btn dark btn-block" @click="findPassMethod">비밀번호 찾기 메일보내기</button>
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
      companyNo:"",
      saved: false
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
    ...mapActions("member", ["signUp", "findPass"]),//<--store member의 Action 관리
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
    //비밀번호 찾기
    async findPassMethod() {
      try {
        var errorChk = true;
        await validate(this.findPassEmail, 'required|email',{
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

        let userInfo = {
            email: this.findPassEmail
          };
        //store 호출
        await this.findPass(userInfo).then(() => this.redirect());
        this.findPwData = this.getFindPwData;
        
        alert('비밀번호 찾기 메일이 발송되었습니다.\n이메일을 통해 비밀번호를 재설정 한 후 이용해주세요.')
        this.$router.push("/member/verification/" + this.findPwData.userNo);
      } catch(e) {
        //에러처리
        alert(e.message);
        this.returnMsg = e.message;
    }
  },
    redirect() {
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["getCommonCodeList"]),//<--store Getter 관리
    ...mapGetters("member", ["getFindPwData"]),//<--store Getter 관리
    ...mapState({ code: (state) => state.commonCodeList }),//<--store state 관리
  },
};
</script>