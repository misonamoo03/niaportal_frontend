<template>
  

  <div id="content" class="not-found">
            <div class="sub-content">
                <div class="container">
                    <h1><NuxtLink to="/"><img src="~assets/img/logo.png" alt=""></NuxtLink></h1>
                    <div class="img"><img src="~assets/img/img-500-mobile.png" alt=""></div>
                    <div class="btn-box mt-5">
                        <button type="button" class="btn dark" @click="$router.go(-1)">이전</button>
                        <button type="button" class="btn dark" @click="goMain">홈으로</button>
                    </div>
                </div>
            </div><!-- /.sub-content -->
        </div><!-- /#content -->

</template>

<script>
export default {  
    layout: 'blank',
       methods: {
              goMain() {
                     this.$router.push("/");
              }
       }
}
</script>