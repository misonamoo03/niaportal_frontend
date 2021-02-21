<template>
	<div id="member_contents">
		<theBanner />
		<theQnaDetail :boardContentNo="boardContentNo" />
	</div>
</template>
<script>
import theQnaDetail from '~/components/board/qna/qnaDetail';
import theBanner from '~/components/board/qna/qnaBanner';
export default {
	asyncData({ params }) {
		return {
			boardContentNo: params.boardContentNo,
		};
	},

	layout: 'qna',
	components: {
		theQnaDetail,
		theBanner,
	},
};
</script>
