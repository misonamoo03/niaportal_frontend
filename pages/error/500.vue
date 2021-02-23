<template>
  <div class="error_wrap">
       <div class="error_500">
              <div class="error_img"></div> 
              <div class="error_btn">
              <div class="btn_group">
                     <button type="button" id="btncancel" class="btn_type btn_basic btn_cancel" @click="$router.go(-1)"><span>이전</span></button>    
                     <button type="button" id="btnfinish" class="btn_type btn_basic btn_primary" @click="goMain"><span>홈으로</span></button>
              </div>
              </div> 
       </div>
</div>
</template>

<script>
export default {
       methods: {
              goMain() {
                     this.$router.push("/");
              }
       }
}
</script>