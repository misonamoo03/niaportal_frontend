<template>
  <div>
      <theBanner/>
      <theMemberInfo/>
  </div> 
</template>

<script>
import theMemberInfo from '~/components/member/myPage/memberInfo';
import theBanner from '~/components/member/myPage/banner';

export default {
    layout: 'memberUpdate',
    components: {
        theMemberInfo,
        theBanner
    }
}
</script>