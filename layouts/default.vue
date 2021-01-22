<template>
	<body>
		<div id="wrap">
			<theHeader />
			<theBanner />
			<theContent />
			<theFooter />
		</div>
	</body>
</template>
<script>
import theHeader from '~/layouts/header';
import theBanner from '~/layouts/banner';
import theContent from '~/layouts/content';
import theFooter from '~/layouts/footer';
export default {
	components: {
		theHeader,
		theBanner,
		theContent,
		theFooter,
	},
};
</script>
