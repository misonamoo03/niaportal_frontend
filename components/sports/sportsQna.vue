<template>
  <div>
    <div class="qna" id="sportsQna" >
      <h4>Q&amp;A</h4>
      <div class="btns">
          <button type="button" class="btn dark" @click="createNewQna('write')" v-if="isLogin">Q&amp;A 작성</button>
          <button type="button" class="btn dark" @click="createNewQna('write')" v-else>Q&amp;A 작성</button>
          <button type="button" :class="{'btn':true, 'line':!isMyData, 'gray':!isMyData, 'dark':isMyData}" @click="toggleMyData()">내 Q&A 보기</button>
          <select name="" id="" class="form-control"  v-model="replyYn" @change="changeReplyYn()">
              <option value="">답변상태</option>
              <option value="N">미답변</option>
              <option value="Y">답변완료</option>
          </select>
      </div>
      <ul class="list" v-if="qnaResult.totalCnt>0">
          <!-- 비밀글 -->
          <li v-for="(list, index) in qnaList" v-bind:key="index">
            <div  :class="{'security':list.secYn=='Y'  && !isSuperUser}">
              <strong v-if="list.secYn =='Y' && !isSuperUser && list.userNo !=userNo">비밀글입니다.</strong>
              <strong v-else><a @click="showBoardGroupMethod(list.boardContentNo,'detail'), createNewQna('detail')">{{list.content}}</a></strong>
              <span class="state" v-if="list.replyCnt == 0">미답변</span>
              <span class="state" v-else-if="list.replyCnt > 0">답변완료</span>
              <span>{{list.userName}}</span>
              <span>{{list.regDate}}</span>
              <div class="btns" v-if="isSuperUser && list.replyCnt == 0">
                  <button type="button" class="btn line blue" data-toggle="modal" data-target="#qna-reply" @click="showBoardDetailMethod(list.boardContentNo), createNewQna('reply')">답변 작성</button>
              </div>
              <div class="btns"  v-else-if="isSuperUser">
                  <button type="button" class="btn line gray" data-toggle="modal" data-target="#qna-modify" @click="showBoardGroupMethod(list.boardContentNo,'modify'), createNewQna('modify')">답변 수정</button>
              </div>
            </div>
          </li>
          
      </ul>
      <ul class="list" v-else>
        <li>
            <div>
              등록된 Q&A가 없습니다. 
            </div>
        </li>
      </ul>
      <thePagination @update="changePage" v-bind:totalListItemCount="qnaResult.totalCnt" v-bind:listRowCount="qnaResult.pagePerRow" v-bind:currentPage="qnaResult.currentPage" v-bind:pageLinkCount="5"/>       
  </div><!-- /.qna -->   


<!-- qna작성 -->
      <div class="modal fade" id="qna-write" tabindex="-1">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h6 class="modal-title">Q&amp;A 작성</h6>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i class="la la-times"></i></span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <textarea name="" id="" cols="30" rows="8" class="form-control" placeholder="문의사항을 입력하세요" v-model="content"></textarea>
                      <span class="checkbox"><input type="checkbox" name="" id="chk" v-model="secYn"><label for="chk">작성한 글을 비공개합니다</label></span>
                      <div class="btn-box">
                          <button type="button" class="btn gray" @click="closeQna('write')">취소</button>
                          <button type="button" class="btn dark"  @click="createQnaMethod">작성완료</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <!-- 답변작성 -->
      <div class="modal fade" id="qna-reply" tabindex="-1">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h6 class="modal-title">Q&amp;A 답변작성</h6>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i class="la la-times"></i></span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <div class="board-content" v-html="updateContent"></div>
                      <h6>관리자 답변</h6>
                      <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="답변을 입력하세요" v-model="reply"></textarea>
                      <div class="btn-box">
                          <button type="button" class="btn gray" @click="closeQna('reply')">취소</button>
                          <button type="button" class="btn dark" @click="replyMethod()">작성완료</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <!-- 답변수정 -->
      <div class="modal fade" id="qna-modify" tabindex="-1">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title">Q&amp;A 답변수정</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i class="la la-times"></i></span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <div class="board-content" v-html="updateContent"></div>
                      <h6>관리자 답변</h6>
                      <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="" v-model="reply">관리자 답변입니다.</textarea>
                      <div class="btn-box">
                          <button type="button" class="btn gray" @click="closeQna('modify')">취소</button>
                          <button type="button" class="btn dark" @click="updateReplyMethod">수정완료</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <!-- 게시글보기 - 관리자답변 포함 -->
      <div class="modal fade" id="qna-detail" tabindex="-1">
           <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h6 class="modal-title">게시글 보기</h6>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i class="la la-times"></i></span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <div class="board-content" v-html="updateContent"></div>
                      <h6>관리자 답변</h6>
                      <div class="board-content" v-html="reply"></div>
                      <div class="btn-box">
                          <button type="button" class="btn gray" @click="deleteMethod(boardContentNo)" v-if="isSuperUser || updateUserNo == userNo">삭제</button>
                          <button type="button" class="btn dark" @click="closeQna('detail')">확인</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
                



</template>
<script>
import thePagination from '~/components/sports/pagination';
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
  props: ['code','category'],
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
                     isLogin:false,
                     currentPage: 1,
                     title: 'QnA',
                     content: '',
                     orgBoardContentNo: '',
                     updateTitle: '',
                     updateUserNo:'',
                     updateContent: '',
                     reply: '',
                     secYn: false,
                     boardContentNo:null,
                     isMyData:false,
                     replyYn:'',
                     userNo:'1'
              }
       },
       methods: {
              ...mapMutations([]), //<--store mutation 관리
              ...mapActions('board', ['getBoardList', 'createBoardContent', 'showBoardDetail', 'showBoardGroup', 'updateBoardContent','boardDelete']),
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
                            this.getQnaResult(pageIndex);
                            //this.$router.push({ path: '/board/qna/qna', query: param});
                            this.goQnaPosition();

                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              async getQnaResult(pageIndex) {   // 페이지 변경 시 호출되는 메서드
                try {       
                     this.isSuperUser = Cookie.get('userGbCode') === 'CD002002';
                     this.isLogin = !((Cookie.get('userGbCode') == null) || (Cookie.get('userGbCode') == undefined) || (Cookie.get('userGbCode') == ''));
                 
                     if(this.isLogin ){
                       this.userNo = Cookie.get('userNo');
                     }
                     
                     this.currentPage = pageIndex;

                      let param = {
                        boardTypeCode: 'CD006002',
                        sportsTypeCode: this.code,
                        currentPage: this.currentPage,
                        myContentYn:this.isMyData?'Y':'N',
                        replyYn:this.replyYn,
                        pagePerRow: 5
                      };

                      await this.getBoardList(param).then(() => {
                      });
                      this.qnaResult = this.getSportsBoardList;
                      this.qnaList = this.qnaResult.list;

                      //console.log(qnaList);
                     
                    
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
                        boardTypeCode: 'CD006002',
                        sportsTypeCode: this.code,
                        title: this.title,
                        content: this.content,
                        secYn: this.secYn ? 'Y' : 'N'
                      };

                      await this.createBoardContent(param).then(() => {
                              this.getQnaListMethod();
                              this.closeQna('write');
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
                              boardTypeCode: 'CD006002',
                              sportsTypeCode: this.code,
                              orgBoardContentNo: this.orgBoardContentNo,
                              title: this.updateTitle,
                              content: this.reply
                            };

                            await this.createBoardContent(param).then(() => {
                                   this.getQnaListMethod();
                                   this.closeQna('reply');
                            });
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              async deleteMethod(_boardContentNo) {
                     try {
                            var errorChk = true;
                           

                            if(!window.confirm("문의사항을 삭제하시겠습니까?")) {
                                   return;
                            }

                            let param = {
                              boardContentNo: _boardContentNo
                            };

                            await this.boardDelete(param).then(() => {
                                   this.getQnaListMethod();
                                   this.closeQna('detail');
                            });
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              async showBoardDetailMethod(boardContentNo) {
                     try {  
                            let param = {
                                   boardContentNo: boardContentNo
                            };

                            await this.showBoardDetail(param).then();
                            this.boardDetail = this.getBoardDetail;
                            this.updateUserNo = this.boardDetail.userNo;
                            this.updateTitle = this.boardDetail.title;
                            this.updateContent = this.boardDetail.content;
                            this.orgBoardContentNo = this.boardDetail.boardContentNo;
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              async showBoardGroupMethod(boardContentNo, viewType) {
                     try {  
                       this.reply = '';
                       this.boardContentNo=boardContentNo;
                            let param = {
                                   boardContentNo: boardContentNo
                            };

                            await this.showBoardGroup(param).then();
                            this.boardGroup = this.getBoardGroup;
                            this.updateTitle = this.boardGroup.title;
                            this.updateUserNo = this.boardGroup.userNo;
                            this.updateContent = this.boardGroup.content;
                            if(this.boardGroup.replyList !=null && this.boardGroup.replyList.length>0){
                              if(viewType == 'detail'){
                                this.reply = this.boardGroup.replyList[0].content.replace(/(\n)/g, '<br />');
                              }else{
                                this.reply = this.boardGroup.replyList[0].content;
                              }
                            }
                            
                            
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
                              boardTypeCode: 'CD006002',
                              sportsTypeCode: this.code,
                              boardContentNo: this.boardGroup.replyList[0].boardContentNo,
                              content: this.reply
                            };

                            await this.updateBoardContent(param).then(() => {
                                   this.getQnaListMethod();
                                   this.closeQna('modify');
                            });
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              createNewQna(viewType) {
                      if((Cookie.get('userGbCode') == null) || (Cookie.get('userGbCode') == undefined) || (Cookie.get('userGbCode') == '')) {
                            if(window.confirm("로그인 후 글쓰기가 가능합니다. 로그인 페이지로 이동하시겠습니까?")) {
                              jQuery('#qna-'+viewType).modal("hide");
                                   return this.$router.push("/member/signIn");
                            } else {
                                   return;
                            }
                     }
                     
                      jQuery('#qna-'+viewType).modal("show");
                     //this.title = '';
                     this.content = '';
                     this.secYn = false;
              },
              closeQna(viewType) {
                jQuery('#qna-'+viewType).modal("hide");
                 jQuery('.modal-backdrop').hide();
                     //document.getElementById("popUp_"+viewNum).style.display = 'none';
                     
                     //this.updateTitle = '';
                     this.updateContent = '';
                     this.reply = '';
              },
              clickBoardDetail(list) {
                     const userNo = Cookie.get('userNo');
                     const userGbCode = Cookie.get('userGbCode');
                     
                     if((userGbCode == null) || (userGbCode == undefined) || (userGbCode == '')) {
                            if(window.confirm("로그인 후 문의사항 조회가 가능합니다. 로그인 페이지로 이동하시겠습니까?")) {
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
              },
              goQnaPosition(){
                $('html,body').animate({scrollTop:$("#sportsQna").offset().top-100}, 500);
              },
              toggleMyData(){
                if((Cookie.get('userGbCode') == null) || (Cookie.get('userGbCode') == undefined) || (Cookie.get('userGbCode') == '')) {
                    if(window.confirm("로그인 후 내 Q&A 보기가 가능합니다.. 로그인 페이지로 이동하시겠습니까?")) {
                            return this.$router.push("/member/signIn");
                    } else {
                            return;
                    }
                }
                this.isMyData = !this.isMyData;
                this.currentPage = 1;
                this.getQnaResult(this.currentPage);
              },
              changeReplyYn(){
                this.currentPage = 1;
                this.getQnaResult(this.currentPage);
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
            }else{
              this.currentPage = 1;
              this.getQnaResult(this.currentPage);
            }
            
        },
        
    },
}
</script>