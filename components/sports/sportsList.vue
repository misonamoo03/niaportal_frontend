<template>
	<div class="container">
		<h2>{{ code }}</h2>
		{{ sportsList }}
		<!-- tab3[E] -->
	</div>
</template>
<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';

export default {
	props: ['code'],
	data() {
		return {
			sportsList: null,
		};
	},
	created() {
		this.fetchData();
	},
	watch: {},
	methods: {
		...mapMutations([]), //<--store mutation 관리
		...mapActions('sports', ['getSportsList']), //<-- store Action 처리
		async fetchData() {
			try {
				let param = {
					code: this.code,
				};

				console.log(
					'components/sports/spirtsList.vue/ this.code : ' + this.code,
				);
				await this.getSportsList(param).then();
				this.sportsList = this.getSportsItemList;
				console.log('12345678', this.result);
			} catch (e) {
				console.log(e.message);
				this.returnMsg = e.message;
			}
		},
	},
	computed: {
		...mapGetters('sports', ['getSportsItemList']), //<--store Getter 관리
		...mapState({ result: state => state.storeSportsList }), //<--store state 관리
	},
};
</script>
