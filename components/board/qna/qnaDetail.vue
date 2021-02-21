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
                     
                     <div class="board_view" v-if="boardGroup != null">
                            <dl>
                                   <dt>
                                          <div class="v_tit">{{title}}</div>
                                          <div class="v_info">
                                                 <span>{{userName}}</span>
                                                 <span>{{regDate}}</span>
                                                 <span>조회 {{viewCnt}}</span>
                                          </div>
                                   </dt>
                            
                                   <dd class="v_txt">
                                          {{content}}
                                   </dd>
                            </dl>
                     </div>


                     <div class="btn_area clear">
                            <a>
                                   <button type="button" id="btnJoin" class="btn_type btn_basic btn_primary" @click="$router.go(-1)"><span>이전 페이지 이동</span></button>
                            </a>
                     </div>

                     <div class="comment_list" v-if="replyList != undefined">
                            <div class="cmt_tit">답변 <span class="cnt">{{replyCnt}}</span></div>
                            <div class="cmt_txt_wrap">
                                   <ul>
                                          <li>
                                                 <p class="cmt_info"><span class="name">{{replyUserName}}</span>  {{replyRegDate}}</p>
                                                 <p class="cmt_txt">
                                                        {{replyContent}}
                                                 </p>
                                          </li>
                                   </ul>
                            </div>
                     </div>
              </div>

       </div> 
</div> 
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
export default {
       props: ["boardContentNo"],
       data() {
              return {
                     boardGroup: null,
                     replyList: '',
                     title: '',
                     content: '',
                     viewCnt: '',
                     replyCnt: '',
                     replyContent: '',
                     regDate: '',
                     replyRegDate: '',
                     userName: '',
                     replyUserName: ''
              }
       },
       created() {
              this.showBoardGroupMethod();
       },
       methods: {
              ...mapMutations([]), //<--store mutation 관리
              ...mapActions('board', ['showBoardGroup']),
              async showBoardGroupMethod() {
                     try {  
                            let param = {
                                   boardContentNo: this.boardContentNo
                            };

                            await this.showBoardGroup(param).then();
                            this.boardGroup = this.getBoardGroup;
                            this.title = this.boardGroup.title;
                            this.content = this.boardGroup.content;
                            this.userName = this.boardGroup.userName;
                            this.viewCnt = this.boardGroup.viewCnt;
                            this.replyCnt = this.boardGroup.replyCnt;
                            this.regDate = this.boardGroup.regDate;
                            this.replyList = this.boardGroup.replyList[0];
                            console.log(this.boardGroup);
                            if (this.replyList != undefined) {
                                   this.replyContent = this.replyList.content;
                                   this.replyRegDate = this.replyList.regDate;
                                   this.replyUserName = this.replyList.userName;
                            }
                     } catch (e) {
                            console.log(e);
                            this.returnMsg = e.message;
                     }
              },
              redirect() {
                     return this.$router.push("/board/qna/qna");
              }
       },
       computed: {
              ...mapGetters('board', ['getBoardGroup']), //<--store Getter 관리
       }
}
</script>