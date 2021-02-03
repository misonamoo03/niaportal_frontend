<template>
  <div id='wrap'>
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
};
</script>
