<template>
  <div id="content" class="mypage"  style="padding-top: 60px;">
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