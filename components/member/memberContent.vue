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
          <select name="join_organization" v-model="companyTypeCode">
            <option value="CD001" selected disabled>기관분류</option>
            <option value="CD001001">대기업</option>
            <option value="CD001002">중소기업</option>
            <option value="CD001003">대학교</option>
            <option value="CD001004">연구기관</option>
            <option value="CD001005">공공기관</option>
            <option value="CD001006">개인사용자</option>
            <option value="CD001007">기타</option>
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
          v-model="findPassEmail"
        />

        <p class="warning">가입 시 입력하셨던 이메일 주소를 입력해 주세요.</p>
        <div class="btn_area">
          <button type="button" id="btnJoin" class="btn_type btn_primary" @click="findPassMethod">
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
  props: ["pageName"],
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
      companyTypeCode: ""
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
    ...mapActions("member", ["signUp", "signIn", "findPass"]),//<--store member의 Action 관리
    async fetchData() {
      try {
        let param = {
          prtCode: "000",
          codeType: "",
        };

        await this.getCodeList(param).then(); //<--actions로 조회 및 state 등록
        this.codeList = this.getCommonCodeList; //<--getters로 가져오기
        console.log("getter로 가져온 commonCode:", this.codeList); //<-- state로 가져 오기
        console.log("state가져온 commonCode:", this.code); //<-- state로 가져 오기
      } catch (e) {
        console.log(e.message);
        this.returnMsg = e.message;
      }
    },
    //회원가입
    async signUpMethod() {
      try {
        var errorChk = true;
        await validate(this.email, 'required|email',{
          name: '이메일'
        }).then(result => {console.log(result);
          if (!result.valid) {
            alert(result.errors[0]);
            errorChk = false;
          }
        });
        if(!errorChk){
          return;
        }
        await validate(this.userPassword, 'required|min:8|checkPass:'+this.rePassword, {
          name: '비밀번호',
          values: {
          }
        }).then(result => {
          console.log(result);
          if (!result.valid) {
            alert(result.errors[0]);
            errorChk = false;
          }
        });
        if(!errorChk){
          return;
        }
        await validate(this.rePassword, 'required|min:8', {
          name: 'rePassword',
          values: {
          }
        }).then(result => {
          console.log(result);
          if (!result.valid) {
            alert(result.errors[0]);
            errorChk = false;
          }
        });
        if(!errorChk){
          return;
        }
        await validate(this.userName, 'required|regex', {
          name: '이름',
        }).then(result => {
          console.log(result);
          if (!result.valid) {
            alert(result.errors[0]);
            errorChk = false;
          }
        })
        if(!errorChk){
          return;
        }
        await validate(this.tel, 'required|integer', {
          name: '전화번호',
        }).then(result => {
          if (!result.valid) {
            alert(result.errors[0]);
            errorChk = false;
          }
        })
        if(!errorChk){
          return;
        }
        await validate(this.agency, 'required', {
          name: '소속기관명',
        }).then(result => {
          if (!result.valid) {
            alert(result.errors[0]);
            errorChk = false;
          }
        })
        if(!errorChk){
          return;
        }
        await validate(this.companyTypeCode, 'required|is_not:CD001', {
          name: '기관분류',
        }).then(result => {
          if (!result.valid) {
            alert(result.errors[0]);
            errorChk = false;
          }
        })
        if(!errorChk){
          return;
        }

        let userInfo = {
          email: this.email,
          password: this.userPassword,
          rePassword: this.rePassword,
          userName: this.userName,
          tel: this.tel,
          agency: this.agency,
          companyTypeCode: this.companyTypeCode,
        };
        console.log(userInfo);
        await this.signUp({ userInfo: userInfo }).then(() => this.redirect());
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
        }).then(result => {console.log(result);
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
          console.log(result);
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
        await this.signIn(userInfo).then(() => this.redirect());
        //정상처리
      } catch (e) {
        alert(e.message);
        //에러처리
        this.returnMsg = e.message;
      }
    },
    //비밀번호 찾기
    async findPassMethod() {
      try {
        var errorChk = true;
        await validate(this.findPassEmail, 'required|email',{
          name: '이메일'
        }).then(result => {console.log(result);
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
        alert('비밀번호 찾기 메일이 발송되었습니다.\n이메일을 통해 비밀번호를 재설정 한 후 이용해주세요.')
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
    ...mapState({ code: (state) => state.commonCodeList }),//<--store state 관리
  },
};
</script>
