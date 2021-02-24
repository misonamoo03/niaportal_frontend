<template>
    <div id="sub_contents"> 
        <div class="container">
            <ol class="location">
                <li class="home"><img src="~assets/images/location_home.png" alt="location_home"></li>
                <li>마이페이지</li>
            </ol>

            <h2>정보수정</h2>

            <table class="tb_write">
                <colgroup>
                    <col width="15%">						
                    <col width="">
                </colgroup>
                <tbody>
                    <tr>
                        <th>ID(이메일)</th>
                        <td>{{email}}</td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td>{{userName}}</td>
                    </tr>
                    <tr>
                        <th  rowspan="3">비밀번호변경</th>
                        <td><input type="password" name="modify_password1" placeholder="현재 비밀번호를 입력해 주세요." v-model="password"></td>	
                    </tr>
                    <tr>
                        <td><input type="password" name="modify_password2" placeholder="새로운 비밀번호를 입력해 주세요." v-model="newPassword"></td>	
                    </tr>
                    <tr>
                        <td><input type="password" name="modify_password3" placeholder="새로운 비밀번호를 한번 더 입력해 주세요." v-model="rePassword"></td>	
                    </tr>
                    <tr>
                        <th>전화번호</th>
                        <td><input type="tel" name="modify_tel" v-model="tel"></td>
                    </tr>
                    <tr>
                        <th>소속기관명</th>
                        <td><input type="text" name="modify_aff" v-model="agency"></td>
                    </tr>
                    <tr>
                        <th>소속기관분류</th>
                        <td>
                            <form>
                                <select name="join_organization" v-model="companyTypeCode">
                                    <option value="CD001001">대기업</option>
                                    <option value="CD001002">중소기업</option>
                                    <option value="CD001003">대학교</option>
                                    <option value="CD001004">연구기관</option>
                                    <option value="CD001005">공공기관</option>
                                    <option value="CD001006">개인사용자</option>
                                    <option value="CD001007">기타</option>
                                </select>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="btn_area clear">
                <button type="button" id="btnJoin" class="btn_type btn_w480 btn_primary" @click="memberUpdateMethod"><span>수정완료</span></button>
            </div>
        </div> 
    </div> 
</template>

<script>
import Cookie, { remove } from 'js-cookie'
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";
import { validate, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: '{_field_}을(를) 입력해 주세요.'
})

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
    data()  {
        return {
            info: '',
            email: Cookie.get('email'),
            userName: Cookie.get('userName'),
            password: '',
            newPassword: '',
            rePassword: '',
            tel: '',
            agency: '',
            companyTypeCode: ''
        };
    },
    beforeMount() {
		this.memberInquiryMethod();
	},
    methods: {
            ...mapMutations([]), //<--store mutation 관
            ...mapActions("member", ["memberInquiry", "memberUpdate"]),//<--store member의 Action 관리

            //회원 정보 조회
            async memberInquiryMethod() {
                try {
                    let userInfo = {
                        email: this.email
                    };
                    //스토어호출 
                    await this.memberInquiry(userInfo).then();
                    this.info = this.getInfo;
                    this.tel = this.info.tel;
                    this.agency = this.info.agency;
                    this.companyTypeCode = this.info.companyTypeCode 
                } catch (e) {
                    console.log(e.message);
                    this.returnMsg = e.message;
                } 
            },
            //회원 정보 수정
            async memberUpdateMethod() {
                try {
                    var errorChk = true;
                    if(this.password != '') {
                        await validate(this.newPassword, 'required|min:8|checkPass:' + this.rePassword, {
                        name: '새 비밀번호',
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
                        await validate(this.rePassword, 'min:8', {
                        name: 'rePassword',
                        values: {
                        }
                        }).then(result => {
                        if (!result.valid) {
                            alert(result.errors[0]);
                            errorChk = false;
                        }
                        });
                    }
                    await validate(this.tel, 'required',{
                    name: '전화번호'
                    }).then(result => {
                    if (!result.valid) {
                        alert(result.errors[0]);
                        errorChk = false;
                    }
                    });
                    if(!errorChk){
                    return;
                    }
                    await validate(this.agency, 'required',{
                    name: '소속기관명'
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
                        userName: this.userName,
                        password: this.password,
                        newPassword: this.newPassword,
                        tel: this.tel,
                        agency: this.agency,
                        companyTypeCode: this.companyTypeCode
                    };
                    await this.memberUpdate({userInfo}).then(() => {   
                        this.password = '';
                        this.newPassword = '';
                        this.rePassword = ''; 
                        this.redirect()
                    });
                    alert('회원 정보가 정상적으로 수정되었습니다.');
                } catch(e) {
                    alert(e.message);
                    this.returnMsg = e.message;
                }
            },
            redirect() {
                this.$router.push("/member/myPage");
            }
    },
    computed: {
        ...mapGetters("member", ["getInfo"]),
        ...mapState({ memberInfo: (state) => state.member})
    }
}
</script>