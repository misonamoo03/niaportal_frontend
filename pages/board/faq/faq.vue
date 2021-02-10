<template>
	<div>
		<theBanner />
		<theFaq />
	</div>
</template>
<script>
import theBanner from '~/components/board/faq/faqBanner';
import theFaq from '~/components/board/faq/faqBoard';

export default {
	layout: 'faq',
	components: {
		theBanner,
		theFaq
	},
};
</script>
