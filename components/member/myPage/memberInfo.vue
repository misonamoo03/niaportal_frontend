<template>
    <div class="sub-content">
                <div class="container">
                    <h3>내 정보</h3>
                    <div class="form">
                        <div class="form-row">
                            <div class="col-4 col-md-3"><label>ID(이메일)</label></div>
                            <div class="col">{{email}}</div>
                        </div>
                        <div class="form-row">
                            <div class="col-4 col-md-3"><label>이름</label></div>
                            <div class="col">{{userName}}</div>
                        </div>
                        <div class="form-row">
                            <div class="col-4 col-md-3"><label>비밀번호 변경</label></div>
                            <div class="col">
                                <input type="password" class="form-control" placeholder="현재 비밀번호 입력" v-model="password">
                                <input type="password" class="form-control" placeholder="신규 비밀번호 입력" v-model="newPassword">
                                <input type="password" class="form-control" placeholder="신규 비밀번호 재입력" v-model="rePassword">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-4 col-md-3"><label>전화번호</label></div>
                            <div class="col"><input type="text" class="form-control" value="01011111111" placeholder="전화번호" v-model="tel"></div>
                        </div>
                        <div class="form-row">
                            <div class="col-4 col-md-3"><label>소속기관명</label></div>
                            <div class="col"><input type="text" class="form-control" value="아이온커뮤니케이션즈" placeholder="소속기관명"  v-model="agency"></div>
                        </div>
                        <div class="form-row">
                            <div class="col-4 col-md-3"><label>소속기관분류</label></div>
                            <div class="col">
                                <select name="" id="" class="form-control" v-model="companyTypeCode">
                                    <option value="CD001001">대기업</option>
                                    <option value="CD001002">중소기업</option>
                                    <option value="CD001003">대학교</option>
                                    <option value="CD001004">연구기관</option>
                                    <option value="CD001005">공공기관</option>
                                    <option value="CD001006">개인사용자</option>
                                    <option value="CD001007">기타</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row" v-if="companyTypeCode=='CD001001'  || companyTypeCode=='CD001002' ">
                            <div class="col-4 col-md-3"><label>사업자등록번호</label></div>
                            <div class="col"><input type="text" class="form-control" value="1234145333" placeholder="사업자등록번호" v-model="companyNo"></div>
                        </div>
                    </div>
                    <div class="btn-box line">
                        <button type="button" class="btn dark" @click="memberUpdateMethod">수정하기</button>
                    </div>
                </div>
            </div><!-- /.sub-content -->   
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
    return '변경할 비밀번호와 일치하지 않습니다.';
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
            companyTypeCode: '',
            companyNo:''
        };
    },
    beforeMount() {
		this.memberInquiryMethod();
	},
    created() {
        if((Cookie.get('email') == null) || (Cookie.get('email') == undefined) || (Cookie.get('email') == '')) {
            return this.$router.push("/member/signIn");
        }
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
                    this.companyTypeCode = this.info.companyTypeCode;
                    this.companyNo = this.info.companyNo 
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
                     await validate(this.companyNo, 'required',{
                    name: ' 사업자등록번호'
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
                        companyTypeCode: this.companyTypeCode,
                        companyNo: this.companyNo
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