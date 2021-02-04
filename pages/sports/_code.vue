<template>
	<div>
		<theSportsList :code="code" />
	</div>
</template>
<script>
import theSportsList from '~/components/sports/sportsList';

export default {
	//middleware: 'authenticated',
	asyncData({ params }) {
		console.log('_code.vue');
		console.log(params);
		return {
			code: params.code,
		};
	},
	layout: 'sports',
	components: {
		theSportsList,
	},
	beforeMount() {
		this.$nuxt.$emit('sport', this.code);
	}
};
</script>
