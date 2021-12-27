<template>
    <div class="form login-form">
      <h1><NuxtLink to="/"><img src="~assets/img/logo.png" alt=""></NuxtLink></h1>
      <h2>인증번호 입력</h2>
      <input type="email"
        name="adduction" 
        placeholder="인증번호 입력" 
        v-model="secCode"
         class="form-control"
        />
      <p class="help-block text-center">이메일로 발송된 인증번호를 입력해 주세요</p>
      <div class="btn-box">
          <button type="button" class="btn dark btn-block" @click="verifyMethod">확인</button>
      </div>
  </div><!-- /.form -->
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";
import { validate, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: '{_field_}을(를) 입력해 주세요.'
})

export default {
    props: ["verifyUserNo"],
    data() {
        return {
            userNo: this.verifyUserNo,
            secCode: "",
        };
    },
    methods: {
        ...mapMutations([]), //<--store mutation 관리
        ...mapActions("member", ["verify"]),//<--store member의 Action 관리
        async verifyMethod() {
            try{
                var errorChk = true;
                await validate(this.secCode, 'required',{
                name: '인증번호'
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
                    userNo: this.userNo,
                    secCode: this.secCode
                };
                await this.verify(userInfo).then(() => this.changePwd());
                alert('인증이 정상적으로 처리되었습니다.')
            } catch(e) {
                alert(e.message);
            }
        },
        changePwd() {
            this.$router.push("/member/changePwd/" + this.verifyUserNo);
        }
    }
}
</script>