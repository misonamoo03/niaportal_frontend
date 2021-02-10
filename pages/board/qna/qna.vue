<template>
	<div>
		<theBanner />
		<theQna />
	</div>
</template>
<script>
import theBanner from '~/components/board/qna/qnaBanner';
import theQna from '~/components/board/qna/qnaBoard';

export default {
	layout: 'qna',
	components: {
		theBanner,
		theQna
	},
};
</script>
