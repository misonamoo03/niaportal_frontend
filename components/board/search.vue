<template>
    <div id="sub_contents"> 
        <div class="container">
            <ol class="location">
                <li class="home"><img src="~assets/images/location_home.png" alt="location_home"></li>
                <li>통합검색</li>
            </ol>

            <h2>정보수정</h2>



            <div class="search_wrap">
                
                <div class="search_select">
                    <select name="select_con">
                        <option value="cont1">전체</option>
                        <option value="cont1">골프데이터</option>
                        <option value="cont1">축구데이터</option>
                        <option value="cont1">농구데이터</option>
                        <option value="cont1">문의사항</option>
                    </select>
                </div>
                
                <div class="search_keyword">
                    <input type="text" name="keyword" class="keyword_input" placeholder="검색어를 입력하세요">
                    <button type="submit" class="search_btn"><em>검색</em></button>
                </div>

            </div>

            <!-- 결과 있음 -->
            <div class="result_wrap">
                <p class="result_total">검색결과 (10건)</p>
                <ul class="result_box">
                    <li>
                        <div class="result_twrap">
                            <p class="con">골프</p>
                            <p class="tit">제목 출력 ex) setup01</p>
                            <p class="txt">
                                동영상내용출력 동영상내용출력 동영상내용출력 동영상내용출력 동영상내용출력 동영상내용출력 동영상내용출력 동영상내용출력 동영상내용출력
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="result_twrap">
                            <p class="con">문의사항</p>
                            <p class="tit">문의사항 제목 출력</p>
                            <p class="txt">
                                문의사항내용출력 문의사항내용출력 문의사항내용출력 문의사항내용출력 문의사항내용출력 문의사항내용출력 문의사항내용출력 문의사항내용출력 문의사항내용출력 문의사항내용출력 문의사항내용출력 문의사항내용출력 문의사항내용출력 문의사항내용출력
                            </p>
                        </div>
                    </li>
                </ul>
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
            </div>

            <!-- 결과 없음 -->
            <div class="result_wrap">
                <p class="result_total">검색결과 (0건)</p>
                <ul class="result_box">
                    <li class="no_result">
                        <p>검색된 결과가 없습니다.</p>
                    </li>
                </ul>
            </div>
        </div> 
    </div> 
</template>
<script>
export default {
    
}
</script>