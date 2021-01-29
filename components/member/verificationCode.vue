<template>
    <div class="container">
        <h1><a href=""><img src="~assets/images/m_logo.png" alt="logo"></a></h1>
    

        <div class="findpwd_wrap">
            <div class="member_form_wrap">
                <h2>인증번호입력</h2>
                <input type="email" name="adduction" placeholder="인증번호 입력" v-model="secCode">
                <p class="warning">메일로 발송된 인증번호를 입력해 주세요.</p>
                <div class="btn_area">
                    <button type="button" id="btnlogin" class="btn_type btn_primary" @click="verifyMethod"><span>확인</span></button>
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
})

export default {
    props: ["verifyEmail"],
    data() {
        return {
            email: this.verifyEmail,
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
                    email: this.email,
                    secCode: this.secCode
                };
                await this.verify(userInfo).then(() => this.changePwd());
                alert('인증이 정상적으로 처리되었습니다.')
            } catch(e) {
                alert(e.message);
            }
        },
        changePwd() {
            this.$router.push("/member/changePwd/" + this.verifyEmail);
        }
    }
}
</script>