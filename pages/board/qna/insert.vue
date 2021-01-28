<template>
	<div class="container">
		<h1>등록페이지</h1>
		<input
			type="text"
			name="title"
			placeholder="제목을 입력하세요."
			v-model="title"
		/>
		<input
			type="text"
			name="content"
			placeholder="내용을 입력하세요."
			v-model="content"
		/>
		<button class="btn_type btn_primary" type="button" @click="insertBoard">
			등록
		</button>
	</div>
</template>
<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';

export default {
	props: ['boardNo'],
	data() {
		return {
			title: '',
			content: '',
		};
	},
	layout: 'blank',
	methods: {
		...mapMutations([]), //<--store mutation 관리
		...mapActions('board', ['insert']), //<--store member의 Action 관리

		async insertBoard() {
			try {
				let boardInfo = {
					title: this.title,
					content: this.content,
					boardNo: this.boardNo,
				};
				await this.insert({ boardInfo: boardInfo }).then(() => this.redirect());
			} catch (e) {
				console.log(e.message);
				this.returnMsg = e.message;
			}
		},
		// async
	},
};
</script>
