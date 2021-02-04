<template>
  <div class='container'>
    <button class='btn_type btn_primary' v-show='authUser'>
      <NuxtLink to='/board/faq/insert'>등록</NuxtLink>
    </button>
    <br />
    <button class='btn_type btn_primary' v-show='authUser'>
      <NuxtLink to='/board/faq/update'>수정</NuxtLink>
    </button>
    <br />
    <button class='btn_type btn_primary' v-show='authUser' @click='deleteBoard'>
      삭제
    </button>
    <br />
    <h2>{{ `FAQ (CD006002) boardNo : ${boardNo} ` }}</h2>
    <h3>{{ `접근 권한 : ${authUser} ` }}</h3>
    <br />
    <ul>
      <li v-for='item in boardList'>{{ item }}</li>
    </ul>
    <!-- tab3[E] -->
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
import Cookie from 'js-cookie';
import axios from 'axios';

export default {
  props: ['boardNo'],
  data() {
    return {
      boardList: null,
      /* 관리자 */
      authUser: Cookie.get('userGbCode') === 'CD002002',
      /* 추후 선택한 게시글 번호로 변경 */
      boardContentNo: 10024,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {},
  methods: {
    // 배열 리터럴
    ...mapMutations([]), //<--store mutation 관리
    ...mapActions('board', ['getBoardList']), //<-- store Action 처리
    async fetchData() {
      try {
        let param = {
          boardNo: this.boardNo,
        };

        await this.getBoardList(param).then(); //<--actions로 조회 및 state 등록
        this.boardList = this.getSportsBoardList; //<--getters로 가져오기
        console.log('this.boardList : ' + this.boardList);
        console.log('12345678', this.result); //<-- state로 가져 오기
        console.log('this.boardNo : ' + this.boardNo);
      } catch (e) {
        console.log(e.message);
        this.returnMsg = e.message;
      }
    },
    deleteBoard() {
      try {
        const req = axios.get('http://sportsaihub.com:8080/board/delete',
          {
            params: {
              boardContentNo: this.boardContentNo,
            },
            withCredentials: true,
          },
        );
        console.log(this.boardContentNo);
        return req.data;
      } catch (e) {
        console.error(`server error : ${e.error}`);
      }
    },
    redirect() {
      this.$router.push('/');
    },
  },
  computed: {
    ...mapGetters('board', ['getSportsBoardList']), //<--store Getter 관리
    ...mapState({ result: state => state.storeBoardList }), //<--store state 관리

  },
};
</script>
