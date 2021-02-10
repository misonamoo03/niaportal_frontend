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
                            <p class="con">{{result.typeName}}</p>
                            <p class="tit">{{result.title}}</p>
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

export default {
    components: {
        thePagination
    },
    data() {
        return {
            type: '',
            query: '',
            currentPage: '',
            searchList: '',
            isSearched: false,
            hasSearchResult: false,
        }
    },
    methods: {
        ...mapMutations([]), //<--store mutation 관리
        ...mapActions('board', ['search']), //<-- store Action 처리
        // 검색
        async searchMethod() {  // 검색 시 호출되는 메서드
            try {
                let param = {
                    query: this.query,
                    type: this.type
                }

                await this.search(param).then(() => {
                    this.afterSearch();
                });
                
                console.log(this.searchList);
            } catch (e) {
                if (e.message === '필수 변수값 없음') {
                    alert('검색어를 입력하세요.');
                }
                console.log(e);
				this.returnMsg = e.message;
            }
        },
        async changePage(pageIndex) {   // 페이지 변경 시 호출되는 메서드
            try {
                this.currentPage = pageIndex;

                let param = {
                    query: this.query,
                    type: this.type,
                    currentPage: this.currentPage
                }

                await this.search(param).then(() => {
                    this.afterSearch();
                });
                
                console.log(this.searchList);
            } catch (e) {
                if (e.message === '필수 변수값 없음') {
                    alert('검색어를 입력하세요.');
                }
                console.log(e);
				this.returnMsg = e.message;
            }
        },
        afterSearch() {
            this.searchList = this.getSearchList;
            this.isSearched = true;
            if(this.searchList.totalCnt === 0) {
                this.hasSearchResult = false;
            } else {
                this.hasSearchResult = true;
            }
        }
    },
    computed: {
        ...mapGetters('board', ['getSearchList'])
    }
}
</script>