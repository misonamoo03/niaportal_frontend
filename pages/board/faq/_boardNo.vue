<template>
	<div id="member_contents">
		<theFaqList :boardNo="boardNo" />
	</div>
</template>
<script>
import theFaqList from '~/components/board/faq/faqList';

export default {
	asyncData({ params }) {
		console.log(params);
		return {
			boardNo: params.boardNo,
		};
	},

	layout: 'blank',
	components: {
		theFaqList,
	},
};
</script>
