<template>
  <div class='container'>
    <h1>수정 페이지</h1>
    <input type='text'
           name='title'
           placeholder='수정할 제목'
           v-model='title'
    />
    <br>
    <input type='text'
           name='content'
           placeholder='수정할 내용'
           v-model='content'
    />
    <button type='button' class='btn_type btn_primary' @click='updateBoard'>수정</button>
    <button type='button' class='btn_type btn_primary' @click='redirect'>취소</button>
    {{ boardInfo }}
  </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
import axios from 'axios';

export default {
  //props: ['boardContentNo'],
  layout: 'blank',
  data() {
    return {
      boardInfo: null,
      title: '',
      content: '',
      boardNo: 2,
      // 선택한 게시글 번호로 추후 변경
      boardContentNo: 10084,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {},
  methods: {
    // 배열 리터럴
    ...mapMutations([]),
    ...mapActions('board', ['getBoardInfo']),
    async fetchData() {
      try {
        const param = {
          boardContentNo: this.boardContentNo,
        };
        await this.getBoardInfo(param);
        this.boardInfo = this.getGetterBoardInfo;
        this.title = this.boardInfo.title;
        this.content = this.boardInfo.content;
        this.boardContentNo = this.boardInfo.boardContentNo,
          console.log('getter로 가져온 boardInfo:', this.boardInfo); //<-- state로 가져 오기
        console.log('state가져온 result', this.result);
      } catch (e) {
        console.log(e.message);
        this.returnMsg = e.message;
      }
    },
    updateBoard() {
      try {
        const boardContent = {
          title: this.title,
          content: this.content,
          boardContentNo: this.boardContentNo,
        };
        const req = axios.post(
          'http://sportsaihub.com:8080/board/update',
          JSON.stringify(boardContent),
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          },
        ).then(() => this.fetchData()).then(() => this.initData());
        //.then(() => this.redirect());
        return req.data;
      } catch (e) {
        console.error(`server error : ${e.error}`);
      }
    },
    initData() {
      this.title = '';
      this.content = '';
    },
    redirect() {
      // boardNo == 2 ? faq
      this.$router.push('/board/faq/2');
    }
    ,
  },
  computed: {
    ...
      mapGetters('board', ['getGetterBoardInfo']),
    ...
      mapState({ result: (state) => state.storeBoardInfo }),
  }
  ,
}
;
</script>
