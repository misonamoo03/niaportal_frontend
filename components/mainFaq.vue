<template>
  <div>
    <div class="faq">
      <div class="container">
          <div class="title-area">
              <h4>FAQ</h4>
              <button type="button" class="btn dark" data-toggle="modal" data-target="#faq-write"  v-show="isSuperUser" data-num="1" @click="createNewFaq(1)">FAQ 작성</button>
              <div class="search">
                  <input type="text" class="form-control" placeholder="검색어를 입력세요" v-model="searchText">
                  <button type="button" class="btn icon" @click="getFaqListMethod"><img src="~assets/img/icon-search.png" alt=""></button>
              </div>
          </div>
          <dl class="faq-list use-faq" v-if="faqListSize>0">
            <div v-for="(list, index) in faqList" v-bind:key="index">
              <div v-on:click="toggleAnswer(index)" >
                <dt v-bind:class="{'active':selFaqIdx==index}"><a :id="'q_'+index" v-html="list.title"></a>
                <button type="button" class="btn line gray" data-toggle="modal" data-target="#faq-modify"  @click="showBoardDetailMethod(list.boardContentNo)"  v-show="isSuperUser">수정</button></dt>
                <dd style="color:#dbdbdb" :id="'a_'+index" v-show="selFaqIdx==index" v-html="list.content"></dd>
              </div>
            </div>
          </dl>
          <dl class="faq-list use-faq" v-else>
            <dt class="no-list">검색된 FAQ가 없습니다.</dt>
          </dl>
      </div>
  </div>
  <!-- FAQ 작성 -->
  <div class="modal fade" id="faq-write" tabindex="-1" v-show="isShowFaqWrite">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">FAQ 작성</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true"><i class="la la-times"></i></span>
                  </button>
              </div>
              <div class="modal-body">
                  <textarea name="" id="" cols="30" rows="3" class="form-control" placeholder="FAQ에 올라갈 질문을 입력해 주세요" @keyup="titleCheck" v-model="title"></textarea>
                  <textarea name="" id="" cols="30" rows="6" class="form-control" placeholder="질문에 대한 답변을 입력해 주세요" v-model="content"></textarea>
                  <div class="btn-box">
                      <button type="button" class="btn gray" data-dismiss="modal" >취소</button>
                      <button type="button" class="btn dark" data-dismiss="modal" @click="createFaqMethod">작성완료</button>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <!-- FAQ 수정 -->
        <div class="modal fade" id="faq-modify" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">FAQ 수정</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="la la-times"></i></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <textarea name="" id="" cols="30" rows="3" class="form-control" placeholder="" v-model="updateTitle">골프, 축구, 농구외에 다른 스포츠 데이터 확인이 가능한가요?</textarea>
                        <textarea name="" id="" cols="30" rows="6" class="form-control" placeholder="" v-model="updateContent">현재는 골프, 축구, 농구에 데이터만 확인 하실 수 있습니다.</textarea>
                        <div class="btn-box">
                            <button type="button" class="btn gray" @click="deleteFaqMethod" data-dismiss="modal">삭제</button>
                            <button type="button" class="btn dark" @click="updateFaqMethod" data-dismiss="modal">수정완료</button>
                        </div>
                    </div>
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
import $ from "jquery";


extend('required', {
  ...required,
  message: '{_field_}을(를) 입력해 주세요.'
})

export default {
  head: {
   script: [
      {type:"text/javascript", src:"//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"},
      {type:"text/javascript", src:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"}
    ]
  },
       data() {
              return {
                     faqList: null,
                     faqListSize:0,
                     boardDetail: null,
                     isSuperUser: false,
                     isShowAnswer: false,
                     title: '',
                     content: '',
                     updateTitle: '',
                     updateContent: '',
                     selFaqIdx:-1,
                     isShowFaqWrite: false,
                     searchText:''
              }
       },
       created() {
              this.getFaqListMethod();
       },
       methods: {
              ...mapMutations([]), //<--store mutation 관리
              ...mapActions('board', ['getBoardList', 'createBoardContent', 'showBoardDetail', 'updateBoardContent','boardDelete']), //<-- store Action 처리
              async getFaqListMethod(){
                     try {
                            this.isSuperUser = (Cookie.get('userGbCode') === 'CD002002');

                            let param = {
                                   boardNo: 1,
                                   boardTypeCode: 'CD006001',
                                   searchText:this.searchText,
                                   pagePerRow: 1000
                            }

                            await this.getBoardList(param).then();
                            this.faqList = this.getSportsBoardList.list;
                            this. faqListSize = this.faqList.length;
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

                            if(!window.confirm("FAQ 작성을 완료하시겠습니까?")) {
                                   return;
                            }

                            let param = {
                                   boardNo: 1,
                                   title: this.title,
                                   content: this.content
                            };

                            await this.createBoardContent(param).then(() => {
                                   this.getFaqListMethod();
                                   this.closeFaq("write");
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
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              async updateFaqMethod() {
                     try {
                            let param = {
                                   boardContentNo: this.boardDetail.boardContentNo,
                                   title: this.updateTitle,
                                   content: this.updateContent
                            };

                            await this.updateBoardContent(param).then(() => {
                                   this.getFaqListMethod();
                                   this.closeFaq(2);
                            });
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              async deleteFaqMethod(){


                try {
                        
                            if(!window.confirm("FAQ를 삭제하시겠습니까?")) {
                                   return;
                            }

                            let param = {
                              boardContentNo: this.boardDetail.boardContentNo,
                            };

                            await this.boardDelete(param).then(() => {
                                   this.getFaqListMethod();
                                   this.closeFaq('');
                            });
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }

                   
              },
              titleCheck(){

                if(this.title.length>100) {
                    alert("제목은 최대 100자까지만 등록가능합니다.");
                    this.title = this.title.substr(0,100);
                }
              },
              contentCheck(){

                if(this.content.length>320) {
                    alert("제목은 최대 320자까지만 등록가능합니다.");
                    this.title = this.content.substr(0,320);
                }
              },
              createNewFaq() {
                //$("#faq-write").modal("show");
                this.isShowFaqWrite = true;
              },
              closeFaq(viewType) {
                //jQuery('#faq-'+viewType).modal("hide");
                //document.getElementById("popUp_"+viewNum).style.display = 'none';
                this.title = '';
                this.content = '';
                this.updateTitle = '';
                this.updateContent = '';
              },
              toggleAnswer(idx) {

                this.selFaqIdx=idx;

                 //var myList = $("#q_"+idx).closest('dt').next('dd');
                 //console.log(myList);

                
                
              }
       },
       computed: {
              ...mapGetters('board', ['getSportsBoardList', 'getBoardDetail']), //<--store Getter 관리
       }
}
</script>
