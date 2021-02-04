<template>
	<div>
		<theBanner />
		<theSearch />
	</div>
</template>
<script>
import theBanner from '~/components/board/searchBanner';
import theSearch from '~/components/board/search';

export default {
	layout: 'search',
	components: {
		theBanner,
		theSearch
	},
};
</script>
