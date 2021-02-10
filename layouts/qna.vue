<template>
  <div id="wrap" class="inquiry">
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