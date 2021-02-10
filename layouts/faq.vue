<template>
  <div id="wrap" class="faq">
    <theHeader />
    <Nuxt />
    <theFooter />
  </div>
</template>
<script>
import theHeader from '~/components/header';
import theFooter from '~/components/subFooter';
export default {
    components: {
        theHeader,
        theFooter
    }
}

</script>