<template>
		<div id="content" class="index">
      <theMainIntro />
      <theMainFaq /> 
            
    </div><!-- /#content -->

</template>
<script>
import theMainIntro from '~/components/mainIntro';
import theMainFaq from '~/components/mainFaq';

export default {
  layout: 'main',
	components: {
		theMainIntro,
		theMainFaq,
	},
  mounted() {
    document.getElementsByTagName("body")[0].setAttribute( 'class', 'body-index' );
  },
 
};
</script>
