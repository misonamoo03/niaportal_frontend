<template>
    <div id="sub_contents"> 
        <div class="container">
            <ol class="location">
                <li class="home"><img src="~assets/images/location_home.png" alt="location_home"></li>
                <li>통합검색</li>
            </ol>
            <div class="search_wrap">
                <div class="search_select">
                    <select name="select_con" v-model="type">
                        <option value="">전체</option>
                        <option value="CD020">골프데이터</option>
                        <option value="CD021">축구데이터</option>
                        <option value="CD022">농구데이터</option>
                        <option value="CD006002">문의사항</option>
                    </select>
                </div>
                <div class="search_keyword">
                    <input type="text" name="keyword" class="keyword_input" placeholder="검색어를 입력하세요" v-model="query" @keydown.13="searchMethod">
                    <button type="submit" class="search_btn" @click="searchMethod"><em>검색</em></button>
                </div>
            </div>
            <!-- 결과 있음 -->
            <div class="result_wrap" v-if="isSearched && hasSearchResult">
                <p class="result_total">검색결과 ({{searchList.totalCnt}}건)</p>
                <ul class="result_box">
                    <li v-for="(result,index) in searchList.list" v-bind:key="index">
                        <div class="result_twrap">
                            <p class="con" style="cursor:pointer" @click="categoryLinkPage(result.typeCode)">{{result.typeName}}</p>
                            <p class="tit"  style="cursor:pointer" @click="contentLinkPage(result.typeCode,result.subTypeCode,result.contentNo)">{{result.title}}</p>
                            <p class="txt">
                                {{result.content}}
                            </p>
                        </div>
                    </li>
                </ul>
                <thePagination @update="changePage" v-bind:totalListItemCount="searchList.totalCnt" v-bind:listRowCount="searchList.pagePerRow" v-bind:currentPage="searchList.currentPage" v-bind:pageLinkCount="5"/>
            </div>
            <!-- 결과 없음 -->
            <div class="result_wrap" v-else-if="isSearched && !hasSearchResult">
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
import thePagination from '~/components/board/pagination';
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
import $ from "jquery";
import Cookie from 'js-cookie';

export default {
    components: {
        thePagination
    },
    data() {
        return {
            type: '',
            query: '',
            currentPage: 1,
            searchList: '',
            isSearched: false,
            hasSearchResult: false,
        }
    },
    methods: {
        ...mapMutations([]), //<--store mutation 관리
        ...mapActions('board', ['search']), //<-- store Action 처리
        // 검색
        searchMethod() {  // 검색 시 호출되는 메서드


          let param = {
              query: this.query,
              type: this.type,
              currentPage: this.currentPage
          }
          this.$router.push({ path: '/board/search', query: param});
        },
        changePage(pageIndex) {   // 페이지 변경 시 호출되는 메서드
                this.currentPage = pageIndex;

                let param = {
                    query: this.query,
                    type: this.type,
                    currentPage: this.currentPage
                }
                 this.$router.push({ path: '/board/search', query: param});
        },
        async getSearchResult(pageIndex) {   // 페이지 변경 시 호출되는 메서드
            try {
                this.currentPage = pageIndex;

                let param = {
                    query: this.query,
                    type: this.type,
                    currentPage: this.currentPage
                }

                await this.search(param).then(() => {
                    this.afterSearch();
                     $('html,body').animate({scrollTop:$("#sub_contents").offset().top}, 500);
                });
                
            } catch (e) {
                if (e.message === '필수 변수값 없음') {
                    alert('검색어를 입력하세요.');
                }
				this.returnMsg = e.message;
            }
        },
        afterSearch() {
            var _searchResult = this.getSearchList

            if(_searchResult != null && _searchResult != undefined && _searchResult.totalCnt != undefined  ){

              this.searchList = _searchResult;
              this.isSearched = true;
              this.type=this.searchList.type;
              this.query=this.searchList.query;
              if(this.searchList.totalCnt === 0) {
                  this.hasSearchResult = false;
              } else {
                  this.hasSearchResult = true;
              }
            }
            
        },
        categoryLinkPage(typeCode){
          if(typeCode == "CD006001" || typeCode == "CD006002"){
             this.$router.push('/board/qna/qna');
          }else{
             this.$router.push('/sports/'+typeCode);
          }
         
          //this.$router.push({name: '/sports/'+typeCode, query: {act: subTypeCode, age: 3}});
        },
        contentLinkPage(typeCode,subTypeCode,contentNo){
          if(typeCode == "CD006001" || typeCode == "CD006002"){

            const userNo = Cookie.get('userNo');
            const userGbCode = Cookie.get('userGbCode');
            
            if((userGbCode == null) || (userGbCode == undefined) || (userGbCode == '')) {
                  if(window.confirm("로그인 후 문의사항 조회가 가능합니다. 로그인 페이지로 이동하시겠습니까?")) {
                          return this.$router.push("/member/signIn");
                  } else {
                          return;
                  }
            }

             this.$router.push('/board/qna/'+contentNo);
          }else{
            console.log("category = ", subTypeCode);
             this.$router.push({ path: '/sports/'+typeCode, query: { category: subTypeCode }});
          }
         
          //this.$router.push({name: '/sports/'+typeCode, query: {act: subTypeCode, age: 3}});
        }
        
    },
    computed: {
        ...mapGetters('board', ['getSearchList'])
    },
    created() {
        this.afterSearch();
    },
  watch: {
        '$route' (to, from) {
            console.log(to.query.query,from.query.query);
            
            this.isSearched = false;
            this.query = '';
            this.type = '';
            this.searchList = '';

            if(to.query.query!=null && to.query.query != undefined && to.query.query != ''){
              this.query = to.query.query;
              this.type = to.query.type;
              this.getSearchResult(to.query.currentPage);
            }
            
        },
        
    },
}
</script>