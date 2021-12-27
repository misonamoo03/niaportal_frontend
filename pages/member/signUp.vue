<template>
  <div class="form">
   <h1><NuxtLink to="/"><img src="~assets/img/logo.png" alt=""></NuxtLink></h1>
    <h2>회원가입</h2>
    <input
          type="email"
          name="join_email"
          placeholder="ID (이메일을 입력 하세요.)"
          v-model="email"
          class="form-control"
        />
    <input type="password" 
      name="join_password" 
      placeholder="비밀번호"  
      v-model="userPassword"
      class="form-control"
      />
    <input
          type="password"
          name="join_password"
          placeholder="비밀번호 확인"
          v-model="rePassword"
          class="form-control"
        />
    <input type="text" name="join_name" placeholder="이름"  v-model="userName" class="form-control"/>
    <input type="tel" name="join_tel" placeholder="전화번호"  v-model="tel" class="form-control"/>
    <input type="text" name="join_aff" placeholder="소속기관명" v-model="agency" class="form-control"/>
    <select name="join_organization" v-model="companyTypeCode" class="form-control">
            <option value="" disabled>소속기관분류</option>
            <option value="CD001001">대기업</option>
            <option value="CD001002">중소기업</option>
            <option value="CD001003">대학교</option>
            <option value="CD001004">연구기관</option>
            <option value="CD001005">공공기관</option>
            <option value="CD001006">개인사용자</option>
            <option value="CD001007">기타</option>
          </select>
    <input type="text" class="form-control" name="company_no" placeholder="사업자등록번호" v-model="companyNo">
    <div class="btn-box">
        <button type="button" class="btn dark btn-block" @click="signUpMethod">회원가입하기</button>
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
    //회원가입
    async signUpMethod() {
      try {
        var errorChk = true;
        await validate(this.email, 'required|email',{
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
        await validate(this.userPassword, 'required|min:8|checkPass:' + this.rePassword, {
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
        await validate(this.rePassword, 'required|min:8', {
          name: 'rePassword',
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
        await validate(this.userName, 'required|regex', {
          name: '이름',
        }).then(result => {
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
        await validate(this.companyNo, 'required', {
          name: '사업자등록번호',
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
          companyNo: this.companyNo,
        };
        await this.signUp({ userInfo: userInfo }).then(() => this.redirect());
      } catch (e) {
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