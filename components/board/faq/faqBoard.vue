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

                     <div class="accordion" v-show="!showNewFaqForm">
                            <ul>
                                   <li v-for="(list, index) in faqList" v-bind:key="index">
                                          <a href="#">
                                                 {{list.title}}<span class="arrow"></span>
                                          </a>
                                          <p>
                                                 {{list.content}}
                                          </p>
                                   </li>
                            </ul>
                     </div>

                     <div class="btn_area clear" v-show="isSuperUser && !showNewFaqForm">
                            <button type="button" class="btn_type btn_basic btn_primary popOpenBtnCmmn" data-num="1" @click="createNewFaq">작성하기</button>
                     </div>

                            <!-- popUp_1 [S] -->
                     <div id="popUp_1" class="popCmmn" v-show="showNewFaqForm">
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
                                          <button href="#" class="btn_layerClose" ></button>
                                   </div>
                                   <div class="popFoot">
                                          <button type="button" id="btnfinish" class="btn_type btn_basic btn_primary popCloseBtnCmmn" data-num="1" @click="createFaqMethod"><span>작성완료</span></button>	
                                   </div>
                            </div>
                     </div>
                     <!-- popUp_1 [E] -->
                            <!-- faq_write [S] -->
                            <!-- <div class="dim-layer">
                            <div class="dimBg"></div>
                            <div id="faq_write" class="pop-layer">
                                   <div class="pop-container">
                                   
                                   <h3>FAQ 작성</h3>

                                   <table class="tb_write pop">
                                                        <colgroup>
                                                               <col width="20%">					
                                                               <col width="">
                                                        </colgroup>
                                                        <tbody>
                                                               <tr>
                                                                      <th>질문</th>
                                                                      <td><textarea name="faq_A" rows="3" cols="33" placeholder="FAQ에 올라갈 질문을 입력해 주세요"></textarea></td>
                                                               </tr>
                                                               <tr>
                                                                      <th>답변</th>
                                                                      <td><textarea name="faq_A" rows="10" cols="33" placeholder="질문에 대한 답변을 입력해 주세요"></textarea></td>
                                                               </tr>
                                                        </tbody>
                                                 </table>

                                   <div><a href="#" class="btn-layerClose"></a> </div>

                                   <button type="button" id="btnJoin" class="btn_type btn_basic btn_primary btn-layerClose"><span>작성완료</span></button>

                                   </div>
                            </div>
                            </div> -->
                     <!-- faq_write [E] -->
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
                     showNewFaqForm: false,
                     title: '',
                     content: ''
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
                                   this.showNewFaqForm = false;
                            });
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              createNewFaq() {
                     this.showNewFaqForm = true;
                     this.title = '';
                     this.content = '';
              }
       },
       computed: {
              ...mapGetters('board', ['getSportsBoardList']), //<--store Getter 관리
       }
}
</script>