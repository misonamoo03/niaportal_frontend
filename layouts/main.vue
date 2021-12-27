<template>
  <div id="wrap">
    <theHeader />
    <Nuxt />
    <theFooter />
  </div>
</template>
<script>
import theHeader from '~/components/header';
import theFooter from '~/components/footer';
export default {
	components: {
		theHeader,
		theFooter,
	},
  methods: {
		
    handleScroll () {
      if(window.scrollY > 100) {
        document.getElementsByClassName("scroll-top")[0].classList.add('is-showing');
         // $('.scroll-top').addClass('is-showing');
      } else {
        document.getElementsByClassName("scroll-top")[0].classList.remove('is-showing');
          //$('.scroll-top').removeClass('is-showing');
      }
      if(window.scrollY > document.getElementsByTagName("header")[0].getAttribute('height')) {
         document.getElementsByTagName("header")[0].classList.add('fixed');
          //$('header').addClass('fixed');
      } else {
        document.getElementsByTagName("header")[0].classList.remove('fixed');
          //$('header').removeClass('fixed');
      }
    }
	},
  created () {
    if (process.client) { 
        window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed () {
    if (process.client) { 
        window.removeEventListener('scroll', this.handleScroll);
    }
  }



};
</script>
