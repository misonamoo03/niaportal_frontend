<template>
	<div>
		<theBanner :code="code"/>
		<theSportsList :code="code" :category="category"/>
	</div>
</template>
<script>
import theSportsList from '~/components/sports/sportsList';
import theBanner from '~/components/sports/sportsBanner';

export default {
	// middleware: 'authenticated',
	asyncData({ params,query }) {
		return {
			code: params.code,
      category:''
		};
	},
	layout: 'sports',
	components: {
		theSportsList,
		theBanner
	},
	beforeMount() {
		this.$nuxt.$emit('sport', this.code);
	},
  mounted() {
    this.category = this.$route.query.category;
  }
};
</script>
