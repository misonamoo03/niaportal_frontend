<template>
	<div class="container">
		<button class="btn_type btn_primary" v-show="authUser">
			<NuxtLink to="/board/faq/insert">등록</NuxtLink>
		</button>
		<br />
		<button class="btn_type btn_primary" v-show="authUser">수정</button>
		<br />
		<button class="btn_type btn_primary" v-show="authUser" @click="deleteBoard">
			삭제
		</button>
		<br />
		<h2>{{ `FAQ (CD006002) boardNo : ${boardNo} ` }}</h2>
		<br />
		<!-- tab3[E] -->
		{{ boardList }}
		{{ `접근 권한 : ${authUser} ` }}
	</div>
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
import Cookie from 'js-cookie';

export default {
	props: ['boardNo'],
	data() {
		return {
			boardList: null,
			/* 관리자 */
			authUser: Cookie.get('userGbCode') == 'CD002002',
			choiceBoardNo: 10020,
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
		deleteBoard() {},
		// async deleteBoard() {
		// 	try {
		// 		await this.deleteBoard(this.choiceBoardNo).then(() => this.redirect());
		// 	} catch (e) {
		// 		console.log(e.message);
		// 		this.returnMsg = e.message;
		// 	}
		// },
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
