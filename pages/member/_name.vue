<template>
	<div id="member_contents">
		<theMemberContents :pageName="name" />
	</div>
</template>
<script>
import theMemberContents from '~/components/member/memberContent';

export default {
	head() {
		return {
			bodyAttrs: {
				class: 'member_bg', //how to get classes already setted in default.vue like my has-navbar-fixed-top class
			},
		};
	},

	asyncData({ params }) {
		console.log(params);
		return {
			name: params.name,
		};
	},

	layout: 'member',
	components: {
		theMemberContents,
	},
};
</script>
