<template>
	<div class="container">
		<theError404 v-if="error.statusCode === 404"/>
		<theError500 v-else/>
	</div>
</template>

<script>
import theError404 from '~/pages/error/404';
import theError500 from '~/pages/error/500';
export default {
	props: ['error'],
	layout: 'blank', // you can set a custom layout for the error page
	components: {
		theError404,
		theError500
	}
};
</script>
