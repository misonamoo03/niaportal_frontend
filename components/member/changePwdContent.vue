<template>
    <div class="container">
        <h1><a href=""><img src="~assets/images/m_logo.png" alt="logo"></a></h1>

        <div class="findpwd_wrap">
            <div class="member_form_wrap">
                <h2>비밀번호 재설정</h2>
                <input type="password" name="changepwd" placeholder="재설정할 비밀번호" v-model="password">
                <input type="password" name="changepwd" placeholder="비밀번호 확인" v-model="rePassword">
                <p class="warning">재설정할 새로운 비밀번호를 입력해 주세요.</p>
                <div class="btn_area">
                    <button type="button" id="btnlogin" class="btn_type btn_primary" @click="changePwdMethod"><span>비밀번호 재설정 요청</span></button>
                </div>
            </div>
        </div>
	</div> 
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
    props: ["changePwdEmail"],
    data() {
        return {
            email: this.changePwdEmail,
            password: "",
            rePassword: ""
        };
    },
    methods: {
        ...mapMutations([]), //<--store mutation 관리
        ...mapActions("member", ["changePwd"]),//<--store member의 Action 관리
        async changePwdMethod() {
            try{
                const errorChk = true;
                await validate(this.password, 'required|min:8|checkPass:'+this.rePassword, {
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
                    email: this.email,
                    password: this.password,
                    rePassword: this.rePassword
                };
                await this.changePwd(userInfo).then(() => this.redirect());
                alert('비밀번호가 정상적으로 변경되었습니다.')
            } catch(e) {
                console.log(e.message);
            }
        },
        redirect() {
            this.$router.push("/");
        }
    }
}
</script>