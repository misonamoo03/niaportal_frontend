<template>
<div id="sub_contents"> 
       <div class="container">       
              <ol class="location">
                     <li class="home"><img src="~assets/images/location_home.png" alt="location_home"></li>
                     <li>AI게시판</li>
                     <li>FAQ</li>
              </ol>

              <div class="lnb">
                     <div class="lnb_title">AI게시판</div>
                     <ul>
                            <li class="on"><NuxtLink to="/board/faq/faq">FAQ</NuxtLink></li>
                            <li><NuxtLink to="/board/qna/qna">문의하기</NuxtLink></li>
                     </ul>
              </div>

              <div class="right_cont">
                     <div class="top_box data faq">
                            <h4>FAQ</h4>
                            <p>원하는 질문과 답이 없을 시 문의하기에 작성해 주세요</p>
                     </div>

                     <div class="accordion">
                            <ul>
                                   <li v-for="(list, index) in faqList" v-bind:key="index">
                                          <a @click="toggleAnswer">
                                                 {{list.title}}<span class="arrow"></span>
                                          </a>
                                          <p v-show="isShowAnswer">
                                                 {{list.content}}
                                          </p>
                                          <div class="popOpenBtnCmmn modify" data-num="2" @click="createNewFaq(2)" v-show="isSuperUser">수정하기</div>
                                   </li>
                            </ul>
                     </div>

                     <div class="btn_area clear" v-show="isSuperUser">
                            <button type="button" class="btn_type btn_basic btn_primary popOpenBtnCmmn" data-num="1" @click="createNewFaq(1)">작성하기</button>	
                            <!-- <div class="btn_group">
                                   <button type="button" class="btn_type btn_basic btn_cancel popOpenBtnCmmn" data-num="2"><span>수정하기</span></button>	
                                   <button type="button" class="btn_type btn_basic btn_primary popOpenBtnCmmn" data-num="1">작성하기</button>
                            </div>	 -->
                            <!-- popUp_1 [S] -->
                            <div id="popUp_1" class="popCmmn">
                                   <div class="popBg" data-num="1"></div>
                                   <div class="popInnerBox">
                                          <div class="popHead">FAQ 작성</div>
                                          <div class="popBody">
                                                 <table class="tb_write pop">
                                                        <colgroup>
                                                               <col width="20%">					
                                                               <col width="">
                                                        </colgroup>
                                                        <tbody>
                                                               <tr>
                                                                      <th>질문</th>
                                                                      <td><textarea name="faq_A" rows="3" cols="33" placeholder="FAQ에 올라갈 질문을 입력해 주세요" v-model="title"></textarea></td>
                                                               </tr>
                                                               <tr>
                                                                      <th>답변</th>
                                                                      <td><textarea name="faq_A" rows="10" cols="33" placeholder="질문에 대한 답변을 입력해 주세요" v-model="content"></textarea></td>
                                                               </tr>
                                                        </tbody>
                                                 </table>

                                          </div>
                                          <div id="btncancel" data-num="1" class="popCloseBtnCmmn">
                                                 <button class="btn_layerClose" @click="closeFaq(1)"></button>
                                          </div>
                                          <div class="popFoot">
                                                 <button type="button" id="btnfinish" class="btn_type btn_basic btn_primary popCloseBtnCmmn" data-num="1" @click="createFaqMethod"><span>작성완료</span></button>	
                                          </div>
                                   </div>
                            </div>

                            <div id="popUp_2" class="popCmmn">
                                   <div class="popBg" data-num="2"></div>
                                   <div class="popInnerBox">
                                          <div class="popHead">FAQ 수정</div>
                                          <div class="popBody">
                                                 <table class="tb_write pop">
                                                        <colgroup>
                                                               <col width="20%">					
                                                               <col width="">
                                                        </colgroup>
                                                        <tbody>
                                                               <tr>
                                                                      <th>질문</th>
                                                                      <td><textarea name="faq_A" rows="3" cols="33">FAQ 질문이 나옵니다</textarea></td>
                                                               </tr>
                                                               <tr>
                                                                      <th>답변</th>
                                                                      <td><textarea name="faq_A" rows="10" cols="33">FAQ 답변이 나옵니다.</textarea></td>
                                                               </tr>
                                                        </tbody>
                                                 </table>

                                          </div>
                                          <div id="btncancel" data-num="2" class="popCloseBtnCmmn">
                                                 <button class="btn_layerClose" @click="closeFaq(2)"></button>
                                          </div>
                                          <div class="popFoot">
                                                 <button type="button" id="btnfinish" class="btn_type btn_basic btn_primary popCloseBtnCmmn" data-num="2"><span>수정완료</span></button>	
                                          </div>
                                   </div>
                            </div>
                            <!-- popUp_1 [E] --> 
                     </div>
              </div>
       </div>
</div> 
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
import Cookie from 'js-cookie';
import { validate, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: '{_field_}을(를) 입력해 주세요.'
})

export default {
       data() {
              return {
                     faqList: null,
                     isSuperUser: false,
                     isShowAnswer: false,
                     title: '',
                     content: '',
              }
       },
       created() {
              this.getFaqListMethod();
       },
       methods: {
              ...mapMutations([]), //<--store mutation 관리
              ...mapActions('board', ['getBoardList', 'createFaq']), //<-- store Action 처리
              async getFaqListMethod(){
                     try {
                            this.isSuperUser = (Cookie.get('userGbCode') === 'CD002002');

                            let param = {
                                   boardNo: 1
                            }

                            await this.getBoardList(param).then();
                            this.faqList = this.getSportsBoardList;
                            console.log(this.faqList);
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              async createFaqMethod() {
                     try {
                            var errorChk = true;
                            await validate(this.title, 'required',{
                                   name: '질문 또는 답변'
                            }).then(result => {
                                   if (!result.valid) {
                                          alert(result.errors[0]);
                                          errorChk = false;
                                   }
                            });
                            if(!errorChk){
                                   return;
                            }
                            await validate(this.content, 'required',{
                                   name: '질문 또는 답변'
                            }).then(result => {
                                   if (!result.valid) {
                                          alert(result.errors[0]);
                                          errorChk = false;
                                   }
                            });
                            if(!errorChk){
                                   return;
                            }

                            let param = {
                                   boardNo: 1,
                                   title: this.title,
                                   content: this.content
                            };

                            await this.createFaq(param).then(() => {
                                   this.getFaqListMethod();
                                   this.closeFaq(1);
                            });
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              createNewFaq(viewNum) {
                     document.getElementById("popUp_"+viewNum).style.display = 'block';
                     this.title = '';
                     this.content = '';
              },
              closeFaq(viewNum) {
                     document.getElementById("popUp_"+viewNum).style.display = 'none';
              },
              toggleAnswer() {
                     this.isShowAnswer = !this.isShowAnswer;
              }
       },
       computed: {
              ...mapGetters('board', ['getSportsBoardList']), //<--store Getter 관리
       }
}
</script>