<template>
	<div>
		<theBanner />
		<div id="contents">
			<theMainIntro />
		</div>
	</div>
</template>
<script>
import theMainIntro from '~/components/mainIntro';
import theBanner from '~/components/banner';

export default {
  layout: 'main',
	components: {
		theMainIntro,
		theBanner,
	},
};
</script>
