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
                        <td>{{name}}</td>
                    </tr>
                    <tr>
                        <th  rowspan="3">비밀번호변경</th>
                        <td><input type="password" name="modify_password1" placeholder="현재 비밀번호를 입력해 주세요."></td>	
                    </tr>
                    <tr>
                        <td><input type="password" name="modify_password2" placeholder="새로운 비밀번호를 입력해 주세요."></td>	
                    </tr>
                    <tr>
                        <td><input type="password" name="modify_password3" placeholder="새로운 비밀번호를 한번 더 입력해 주세요."></td>	
                    </tr>
                    <tr>
                        <th>전화번호</th>
                        <td><input type="tel" name="modify_tel" v-bind:value="memberInfo.tel"></td>
                    </tr>
                    <tr>
                        <th>소속기관명</th>
                        <td><input type="text" name="modify_aff" v-bind:value="memberInfo.agency"></td>
                    </tr>
                    <tr>
                        <th>소속기관분류</th>
                        <td>
                            <form>
                                <select name="join_organization">
                                    <option value="organization">{{memberInfo.companyTypeName}}</option>
                                </select>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="btn_area clear">
                <button type="button" id="btnJoin" class="btn_type btn_w480 btn_primary"><span>수정완료</span></button>
            </div>
        </div> 
    </div> 
</template>

<script>
import Cookie, { remove } from 'js-cookie'
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";

export default {
    data()  {
        return {
            email: Cookie.get('email'),
            name: Cookie.get('userName'),

        };
    },
    beforeMount() {
		this.memberInquiryMethod();
	},
    methods: {
            ...mapMutations([]), //<--store mutation 관리
            ...mapActions("member", ["memberInquiry"]),//<--store member의 Action 관리

            //회원 정보 조회
            async memberInquiryMethod() {
                try {
                    let userInfo = {
                        email: this.email
                    };
                    //스토어호출 
                    await this.memberInquiry(userInfo).then();
                    console.log(this.memberInfo);
                } catch (e) {
                    console.log(e.message);
                    this.returnMsg = e.message;
                } 
            }
    },
    computed: mapState({ 
            memberInfo(state){
                return state.member
            }
        })
}
</script>