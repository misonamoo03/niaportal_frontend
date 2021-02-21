<template>
	<div id="member_contents">
		<theBanner />
		<theQnaDetail :boardNo="boardNo" />
	</div>
</template>
<script>
import theQnaDetail from '~/components/board/qna/qnaDetail';
import theBanner from '~/components/board/qna/qnaBanner';
export default {
	asyncData({ params }) {
		console.log(params);
		return {
			boardNo: params.boardNo,
		};
	},

	layout: 'qna',
	components: {
		theQnaDetail,
		theBanner,
	},
};
</script>
