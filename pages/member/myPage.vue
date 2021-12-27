<template>
  <div id="content" class="mypage">
      <theMemberInfo/>
  </div> 
</template>

<script>
import theMemberInfo from '~/components/member/myPage/memberInfo';
import theBanner from '~/components/member/myPage/banner';

export default {
    layout: 'main',
    components: {
        theMemberInfo,
        theBanner
    }
}
</script>