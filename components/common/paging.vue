<template>
    
  <div class="pagination" >
      <button type="button" class="btn_first" title="첫 페이지로 이동"><span>처음</span></button>
      <button type="button" class="btn_prev" title="이전 5개 목록 페이지로 이동"><span>이전</span></button>

      <ul class="paging">
          <li><button type="button" class="on" title="현재페이지로 이동">1</button></li>
          <li><button type="button" title="2번 페이지로 이동">2</button></li>
          <li><button type="button" title="3번 페이지로 이동">3</button></li>
      </ul>

      <button type="button" class="btn_next" title="다음 5개 목록 페이지로 이동"><span>다음</span></button>
      <button type="button" class="btn_end" title="마지막 페이지로 이동"><span>끝</span></button>
  </div>
            
</template>
<script>
export default {
    
}
</script>