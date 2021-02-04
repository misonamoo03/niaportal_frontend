<template>
  <div id="wrap" v-bind:class="sport">
    <theHeader />
    <Nuxt />
    <theFooter />
  </div>
</template>
<script>
import theHeader from '~/components/header';
import theFooter from '~/components/subFooter';
export default { 
  data()  {
    return {
      sport: ""
    }
  },
	components: {
		theHeader,
		theFooter,
  },
  created() {
    this.$nuxt.$on('sport', data => {
      switch (data) {
        case 'CD020': {
          this.sport = 'golf';
          break;
        }
        case 'CD021': {
          this.sport = 'soccer';
          break;
        }
        case 'CD022': {
          this.sport = 'basketball';
        }
      }
    })
  }
};
</script>
