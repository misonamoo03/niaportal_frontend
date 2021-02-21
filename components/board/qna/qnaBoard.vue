<template>
  <div id="sub_contents"> 
       <div class="container">
              
              <ol class="location">
                     <li class="home"><img src="~assets/images/location_home.png" alt="location_home"></li>
                     <li>AI게시판</li>
                     <li>문의하기</li>
              </ol>

              <div class="lnb">
                     <div class="lnb_title">AI게시판</div>
                     <ul>
                            <li><NuxtLink to="/board/faq/faq">FAQ</NuxtLink></li>
                            <li class="on"><NuxtLink to="/board/qna/qna">문의하기</NuxtLink></li>
                     </ul>
              </div>

              <div class="right_cont">
                     
                     <div class="tb_lineList">
                            <table>
                                   <colgroup>
                                          <col>
                                          <col>
                                          <col>
                                          <col>
                                          <col>
                                          <col>
                                   </colgroup>
                                   <thead>
                                          <tr>
                                                 <th scope="col" class="headNum">No</th>
                                                 <th scope="col" class="headAnswer">문의내용</th>
                                                 <th scope="col" class="headTxt"></th>
                                                 <th scope="col" class="headWriter">작성자</th>
                                                 <th scope="col" class="headDate">작성일자</th>
                                                 <th scope="col" class="headView">조회수</th>
                                          </tr>
                                   </thead>
                                   <tbody>
                                          <tr v-for="(list, index) in qnaList" v-bind:key="index">
                                                 <td class="no">{{list.boardContentNo}}</td>
                                                 <td class="txtL">
                                                        <a style="cursor: pointer" @click="showBoardDetail(list)">
                                                               <span class="lock" v-show="list.secYn == 'Y'"></span>
                                                               <span class="txtL_length">
                                                                      {{list.title}}
                                                               </span>
                                                               <span class="cnt" v-if="list.replyCnt != 0">({{list.replyCnt}})</span>
                                                        </a>
                                                 </td>
                                                 <td class="answer" v-if="isSuperUser && list.replyCnt == 0">
                                                        <a href="#" class="popOpenBtnCmmn" data-num="2" @click="showBoardDetailMethod(list.boardContentNo), createNewQna(2)">답변작성</a>
                                                 </td>
                                                 <td class="answer modify" v-else-if="isSuperUser">
                                                        <a href="#" class="popOpenBtnCmmn" data-num="3" @click="showBoardGroupMethod(list.boardContentNo), createNewQna(3)">답변수정</a>
                                                 </td>
                                                 <td  v-else>
                                                 </td>
                                                 <td class="writer">{{list.userName}}</td>
                                                 <td class="date">{{list.regDate}}</td>
                                                 <td class="view">{{list.viewCnt}}</td>
                                          </tr>
                                   </tbody>
                            </table>
                     </div>
                     <thePagination @update="changePage" v-bind:totalListItemCount="qnaResult.totalCnt" v-bind:listRowCount="qnaResult.pagePerRow" v-bind:currentPage="qnaResult.currentPage" v-bind:pageLinkCount="10"/>       
                                                               
                     <div class="btn_area clear m_t0">
                            <button type="button" class="btn_type btn_basic btn_primary popOpenBtnCmmn" data-num="1" @click="createNewQna(1)">문의사항 작성</button>
                     </div>

                     
                     <!-- popUp_1 [S] -->
                     <div id="popUp_1" class="popCmmn">
                            <div class="popBg" data-num="1"></div>
                            <div class="popInnerBox">
                                   <div class="popHead">문의사항 작성</div>
                                   <div class="popBody">
                                          <table class="tb_write pop">
                                                 <colgroup>
                                                        <col width="20%">					
                                                        <col width="">
                                                 </colgroup>
                                                 <tbody>
                                                        <tr>
                                                               <th>제목</th>
                                                               <td><textarea name="inquiry_tit" rows="2" cols="33" placeholder="제목을 입력해 주세요" v-model="title"></textarea></td>
                                                        </tr>
                                                        <tr>
                                                               <th>내용</th>
                                                               <td><textarea name="inquiry_con" rows="8" cols="33" placeholder="내용을 입력해 주세요" v-model="content"></textarea></td>
                                                        </tr>
                                                 </tbody>
                                          </table>

                                          <input type="checkbox" id="myCheck" v-model="secYn">
                                          <label for="myCheck">작성한 문의사항을 비공개합니다.</label>

                                   </div>
                                   <div id="btncancel" data-num="1" class="popCloseBtnCmmn">
                                          <button @click="closeQna(1)" class="btn_layerClose" ></button>
                                   </div>
                                   <div class="popFoot">
                                          <div class="btn_group">
                                                 <button type="button" id="btncancel" class="btn_type btn_basic btn_cancel popCloseBtnCmmn" data-num="1" @click="closeQna(1)"><span>취소</span></button>	
                                   <button type="button" id="btnfinish" class="btn_type btn_basic btn_primary popCloseBtnCmmn" data-num="1" @click="createQnaMethod"><span>작성완료</span></button>	
                            </div>
                                   </div>
                            </div>
                     </div>
                     <!-- popUp_1 [E] -->

                     <!-- popUp_2 [S] -->
                     <div id="popUp_2" class="popCmmn">
                            <div class="popBg" data-num="2"></div>
                            <div class="popInnerBox">
                                   <div class="popHead">답변작성</div>
                                   <div class="popBody">
                                          <table class="tb_write pop">
                                                 <colgroup>
                                                        <col width="20%">					
                                                        <col width="">
                                                 </colgroup>
                                                 <tbody>
                                                        <tr>
                                                               <th>제목</th>
                                                               <td>{{updateTitle}}</td>
                                                        </tr>
                                                        <tr>
                                                               <th>내용</th>
                                                               <td>
                                                                      {{updateContent}}
                                                               </td>
                                                        </tr>
                                                        <tr>
                                                               <th>답변</th>
                                                               <td><textarea name="inquiry_comt" rows="6" cols="33" placeholder="답변을 입력해 주세요" v-model="reply"></textarea></td>
                                                        </tr>
                                                 </tbody>
                                          </table>

                                   </div>
                                   <div id="btncancel" data-num="2" class="popCloseBtnCmmn">
                                          <button href="#" class="btn_layerClose" @click="closeQna(2)"></button>
                                   </div>
                                   <div class="popFoot">
                                          <div class="btn_group">
                                                 <button type="button" id="btncancel" class="btn_type btn_basic btn_cancel popCloseBtnCmmn" data-num="2" @click="closeQna(2)"><span>취소</span></button>	
                                   <button type="button" id="btnfinish" class="btn_type btn_basic btn_primary popCloseBtnCmmn" data-num="2" @click="replyMethod()"><span>작성완료</span></button>	
                            </div>
                                   </div>
                            </div>
                     </div>
                     <!-- popUp_2 [E] -->

                     <!-- popUp_3 [S] -->
                     <div id="popUp_3" class="popCmmn">
                            <div class="popBg" data-num="3"></div>
                            <div class="popInnerBox">
                                   <div class="popHead">답변수정</div>
                                   <div class="popBody">
                                          <table class="tb_write pop">
                                                 <colgroup>
                                                        <col width="20%">					
                                                        <col width="">
                                                 </colgroup>
                                                 <tbody>
                                                        <tr>
                                                               <th>제목</th>
                                                               <td>{{this.updateTitle}}</td>
                                                        </tr>
                                                        <tr>
                                                               <th>내용</th>
                                                               <td>
                                                                      {{this.updateContent}}
                                                               </td>
                                                        </tr>
                                                        <tr>
                                                               <th>답변</th>
                                                               <td><textarea name="inquiry_comt" rows="6" cols="33" v-model="reply"></textarea></td>
                                                        </tr>
                                                 </tbody>
                                          </table>

                                   </div>
                                   <div id="btncancel" data-num="3" class="popCloseBtnCmmn">
                                          <button href="#" class="btn_layerClose" @click="closeQna(3)"></button>
                                   </div>
                                   <div class="popFoot">
                                          <div class="btn_group">
                                                 <button type="button" id="btncancel" class="btn_type btn_basic btn_cancel popCloseBtnCmmn" data-num="3" @click="closeQna(3)"><span>취소</span></button>	
                                   <button type="button" id="btnfinish" class="btn_type btn_basic btn_primary popCloseBtnCmmn" data-num="3" @click="updateReplyMethod"><span>수정완료</span></button>	
                            </div>
                                   </div>
                            </div>
                     </div>
                     <!-- popUp_3 [E] -->
              </div>
       </div> 
</div>
</template>

<script>
import thePagination from '~/components/board/pagination';
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
import Cookie from 'js-cookie';
import { validate, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import $ from "jquery";

extend('required', {
  ...required,
  message: '{_field_}을(를) 입력해 주세요.'
})

export default {
       components: {
              thePagination
       },
       data() {
              return {
                     boardDetail: null,
                     boardGroup: null,
                     qnaResult: '',
                     qnaList: [],
                     isSuperUser: false,
                     currentPage: 1,
                     title: '',
                     content: '',
                     orgBoardContentNo: '',
                     updateTitle: '',
                     updateContent: '',
                     reply: '',
                     secYn: false
              }
       },
       methods: {
              ...mapMutations([]), //<--store mutation 관리
              ...mapActions('board', ['getBoardList', 'createBoardContent', 'showBoardDetail', 'showBoardGroup', 'updateBoardContent']),
              async getQnaListMethod() {
                     try {
                           this.getQnaResult(this.currentPage);
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              async changePage(pageIndex) {
                     try {
                            this.currentPage = pageIndex;

                            let param = {
                                   boardNo: 2,
                                   currentPage: this.currentPage
                            };

                            this.$router.push({ path: '/board/qna/qna', query: param});

                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              async getQnaResult(pageIndex) {   // 페이지 변경 시 호출되는 메서드
                try {
                     this.currentPage = pageIndex;

                      let param = {
                              boardNo: 2,
                              currentPage: this.currentPage
                      };

                      await this.getBoardList(param).then(() => {
                      });
                      this.qnaResult = this.getSportsBoardList;
                      this.qnaList = this.qnaResult.list;
                      console.log(this.qnaList);
                    
                } catch (e) {
                    console.log(e);
                    this.returnMsg = e.message;
            this.returnMsg = e.message;
                }
            },
              async createQnaMethod() {
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

                            if(!window.confirm("문의사항 작성을 완료하시겠습니까?")) {
                                   return;
                            }

                            let param = {
                                   boardNo: 2,
                                   title: this.title,
                                   content: this.content,
                                   secYn: this.secYn ? 'Y' : 'N'
                            };

                            await this.createBoardContent(param).then(() => {
                                   this.getQnaListMethod();
                                   this.closeQna(1);
                            });
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              async replyMethod() {
                     try {
                            var errorChk = true;
                            await validate(this.reply, 'required',{
                                   name: '답변'
                            }).then(result => {
                                   if (!result.valid) {
                                          alert(result.errors[0]);
                                          errorChk = false;
                                   }
                            });
                            if(!errorChk){
                                   return;
                            }

                            if(!window.confirm("답변 작성을 완료하시겠습니까?")) {
                                   return;
                            }

                            let param = {
                                   boardNo: 2,
                                   orgBoardContentNo: this.orgBoardContentNo,
                                   title: this.updateTitle,
                                   content: this.reply
                            };

                            await this.createBoardContent(param).then(() => {
                                   this.getQnaListMethod();
                                   this.closeQna(2);
                            });
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              async showBoardDetailMethod(boardContentNo) {
                     try {  
                            console.log(boardContentNo);
                            let param = {
                                   boardContentNo: boardContentNo
                            };

                            await this.showBoardDetail(param).then();
                            this.boardDetail = this.getBoardDetail;
                            this.updateTitle = this.boardDetail.title;
                            this.updateContent = this.boardDetail.content;
                            this.orgBoardContentNo = this.boardDetail.boardContentNo;
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              async showBoardGroupMethod(boardContentNo) {
                     try {  
                            let param = {
                                   boardContentNo: boardContentNo
                            };

                            await this.showBoardGroup(param).then();
                            this.boardGroup = this.getBoardGroup;
                            console.log(this.boardGroup);
                            this.updateTitle = this.boardGroup.title;
                            this.updateContent = this.boardGroup.content;
                            this.reply = this.boardGroup.replyList[0].content;
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              async updateReplyMethod() {
                     try {
                            var errorChk = true;
                            await validate(this.reply, 'required',{
                                   name: '답변'
                            }).then(result => {
                                   if (!result.valid) {
                                          alert(result.errors[0]);
                                          errorChk = false;
                                   }
                            });
                            if(!errorChk){
                                   return;
                            }

                            if(!window.confirm("답변을 수정하시겠습니까?")) {
                                   return;
                            }

                            let param = {
                                   boardContentNo: this.boardGroup.replyList[0].boardContentNo,
                                   content: this.reply
                            };

                            await this.updateBoardContent(param).then(() => {
                                   this.getQnaListMethod();
                                   this.closeQna(3);
                            });
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              createNewQna(viewNum) {
                     if((Cookie.get('userGbCode') == null) || (Cookie.get('userGbCode') == undefined) || (Cookie.get('userGbCode') == '')) {
                            if(window.confirm("로그인을 해야지 글쓰기가 가능합니다. 로그인 페이지로 이동하시겠습니까?")) {
                                   return this.$router.push("/member/signIn");
                            } else {
                                   return;
                            }
                     }

                     document.getElementById("popUp_"+viewNum).style.display = 'block';
                     this.title = '';
                     this.content = '';
                     this.secYn = false;
              },
              closeQna(viewNum) {
                     document.getElementById("popUp_"+viewNum).style.display = 'none';
                     this.updateTitle = '';
                     this.updateContent = '';
                     this.reply = '';
              },
              showBoardDetail(list) {
                     const userNo = Cookie.get('userNo');
                     const userGbCode = Cookie.get('userGbCode');
                     
                     if((userGbCode == null) || (userGbCode == undefined) || (userGbCode == '')) {
                            if(window.confirm("로그인을 해야지 문의사항 조회가 가능합니다. 로그인 페이지로 이동하시겠습니까?")) {
                                   return this.$router.push("/member/signIn");
                            } else {
                                   return;
                            }
                     }

                     if(list.secYn === "Y") {
                            if((userGbCode != 'CD002002') && (userNo != list.userNo)) {
                                   alert("해당 문의내용은 작성자와 운영자만 열람이 가능 합니다.");
                                   return;
                            }
                     }

                     return this.$router.push("/board/qna/" + list.boardContentNo);
              }
       },
       computed: {
              ...mapGetters('board', ['getSportsBoardList', 'getBoardDetail', 'getBoardGroup']), //<--store Getter 관리
       },
      created() {
        var _init=true;
        try{
          console.log("===========99999======",(new RegExp('[\?&]' + "currentPage" + '=([^&#]*)').exec($(location).attr('href')))[1]);
          var _currentPage = (new RegExp('[\?&]' + "currentPage" + '=([^&#]*)').exec($(location).attr('href')))[1];
          _init = false;
        }catch(e){
          _init = true;
        }
        
        if(_init){// 처음 호출 할 경우
          this.currentPage = 1;
        }else{
           if(this.getSportsBoardList.list!=null && this.getSportsBoardList.list != undefined && this.getSportsBoardList.list != ''){
            this.currentPage = this.getSportsBoardList.currentPage;
          }else{
            this.currentPage = 1;
          }
        }
       
        this.getQnaResult(this.currentPage);
        
          
      },
       watch: {
        '$route' (to, from) {
            console.log(to.query.query,from.query);

            if(to.query.currentPage!=null && to.query.currentPage != undefined && to.query.currentPage != ''){
              this.getQnaResult(to.query.currentPage);
            }
            
        },
        
    },
}
</script>