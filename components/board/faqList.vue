<template>
	<div class="container">
		<h2>{{ 'FAQ (CD006002) boardNo : ' + boardNo }}</h2>
		<br />
		<!-- tab3[E] -->
		{{ boardList }}
	</div>
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';

export default {
	props: ['boardNo'],
	data() {
		return {
			boardList: null,
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
				console.log('12345678'); //<-- state로 가져 오기
				console.log('this.boardNo : ' + this.boardNo);
			} catch (e) {
				console.log(e.message);
				this.returnMsg = e.message;
			}
		},
		redirect() {
			this.$router.push('/');
		},
	},
	computed: {
		...mapGetters('board', ['getSportsBoardList']), //<--store Getter 관리
		...mapState('board', { result: state => state.storeBoardList }), //<--store state 관리
	},
};
</script>
