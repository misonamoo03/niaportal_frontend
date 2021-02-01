<template>
	<div id="member_wrap">
		<Nuxt />
		<theFooter />
	</div>
</template>

<script>
import theFooter from '~/components/member/footer';
export default {
	components: {
		theFooter,
	},
};
</script>
