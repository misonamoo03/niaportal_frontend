<template>
  <div class="form login-form">
     <h1><NuxtLink to="/"><img src="~assets/img/logo.png" alt=""></NuxtLink></h1>
      <h2> </h2>
      <div class="text-center">
        <h1><img src="~assets/images/error_500.jpg" alt=""></h1>
        <hr>
        <div class="btn-box">
            <button type="button" class="btn gray"  @click="$router.go(-1)">이전</button>
            <button type="button" class="btn dark"   @click="goMain">홈으로</button>
        </div>
          
      </div>
  </div><!-- /.for m -->
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