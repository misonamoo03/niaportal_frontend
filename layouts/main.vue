<template>
	<div>
		<div id="wrap">
			<theHeader />
			<Nuxt />
			<theFooter />
		</div>
	</div>
</template>
<script>
import theHeader from '~/components/header';
import theFooter from '~/components/footer';
export default {
	components: {
		theHeader,
		theFooter,
	},
};
</script>
