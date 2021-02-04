<template>
  <div class='container'>
    <h1>등록페이지</h1>
    <input
      type='text'
      name='title'
      placeholder='제목을 입력하세요.'
      v-model='title'
    />
    <input
      type='text'
      name='content'
      placeholder='내용을 입력하세요.'
      v-model='content'
    />
    <button class='btn_type btn_primary' type='button' @click='insertBoard'>
      등록
    </button>
    <button tpe='button' class='btn_type btn_primary' @click='redirect'>취소</button>
    <div>{{ `boardNo : ${this.boardNo}` }}</div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
import axios from 'axios';

export default {
  layout: 'blank',
  data() {
    return {
      title: '',
      content: '',
      boardNo: 2,
    };
  },
  methods: {
    // FAQ 등록
    insertBoard() {
      try {
        const boardInfo = {
          title: this.title,
          content: this.content,
          boardNo: this.boardNo,
        };
        const req = axios.post(
          'http://sportsaihub.com:8080/board/insert',
          JSON.stringify(boardInfo),
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          },
        ).then(() => this.insertAfter()).then(() => alert('등록 성공!')).then(() => this.redirect());
        // Promise 객체 status 200 처리
        console.log(req);
        return req.data;
      } catch (e) {
        console.error(`server error : ${e.error}`);
      }
    },
    insertAfter() {
      this.title = '';
      this.content = '';
    },
    redirect() {
      // boardNo == 2 ? faq
      this.$router.push('/board/faq/2');
    },
  },
};
</script>
