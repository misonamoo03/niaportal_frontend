<template>

  <div class="form login-form">
      <h1><NuxtLink to="/"><img src="~assets/img/logo.png" alt=""></NuxtLink></h1>
      <h2>비밀번호 재설정</h2>
      <input  type="password" 
        name="changepwd" 
        placeholder="재설정할 비밀번호" 
        v-model="password"
        class="form-control"
        />
        <input  type="password" 
          name="changepwd" 
          placeholder="비밀번호 확인" 
          v-model="rePassword"
          class="form-control"
        />
      <p class="help-block text-center">재설정할 새로운 비밀번호를 입력해 주세요.</p>
      <div class="btn-box">
          <button type="button" class="btn dark btn-block" @click="changePwdMethod">비밀번호 재설정 요청</button>
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
    props: ["changePwdUserNo"],
    data() {
        return {
            userNo: this.changePwdUserNo,
            password: "",
            rePassword: "",
            errorChk: true
        };
    },
    methods: {
        ...mapMutations([]), //<--store mutation 관리
        ...mapActions("member", ["changePwd"]),//<--store member의 Action 관리
        async changePwdMethod() {
            try{
              this.errorChk = true;
                await validate(this.password, 'required|min:8|checkPass:'+this.rePassword, {
                name: '비밀번호',
                values: {
                }
            }).then(result => {
                if (!result.valid) {
                    alert(result.errors[0]);
                     this.errorChk = false;
                }
            });
            if(!this.errorChk){
                return;
            }

                let userInfo = {
                    userNo: this.userNo,
                    password: this.password,
                    rePassword: this.rePassword
                };
                console.log(userInfo);
                await this.changePwd(userInfo).then(() => this.redirect());
                alert('비밀번호가 정상적으로 변경되었습니다.')
            } catch(e) {
                alert(e.message);
            }
        },
        redirect() {
            this.$router.push("/");
        }
    }
}
</script>