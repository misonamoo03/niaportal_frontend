<template>
  <div id="member_contents">
    <theSportsList :code="code" />
  </div>
</template>
<script>
import theSportsList from "~/components/sports/sportsList";

export default {
  middleware: "authenticated",
  asyncData({ params }) {
    console.log(params);
    return {
      code: params.code,
    };
  },

  layout: "blank",
  components: {
    theSportsList,
  },
};
</script>
