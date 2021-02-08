<template>
	<div>
		<theBanner :code="code"/>
		<theSportsList :code="code" />
	</div>
</template>
<script>
import theSportsList from '~/components/sports/sportsList';
import theBanner from '~/components/sports/sportsBanner';

export default {
	// middleware: 'authenticated',
	asyncData({ params }) {
		return {
			code: params.code,
		};
	},
	layout: 'sports',
	components: {
		theSportsList,
		theBanner
	},
	beforeMount() {
		this.$nuxt.$emit('sport', this.code);
	}
};
</script>
