<template>

  <div id="content" class="data" style="padding-top: 60px;">
    <div class="sub-content">
      <div class="container">
        <theSportsDataSet :code="code"/>
        <theSportsQna :code="code" :category="category"/>
      </div><!-- /#content -->
    </div>
  </div>
</template>
<script>
import theSportsQna from '~/components/sports/sportsQna';
import theSportsDataSet from '~/components/sports/sportsDataSet';


export default {
	// middleware: 'authenticated',
	asyncData({ params,query }) {
		return {
			code: params.code,
      category:''
		};
	},
	layout: 'main',
	components: {
		theSportsQna,
		theSportsDataSet
	},
	beforeMount() {
		this.$nuxt.$emit('sport', this.code);
	},
  mounted() {
    this.category = this.$route.query.category;
  }
};
</script>
