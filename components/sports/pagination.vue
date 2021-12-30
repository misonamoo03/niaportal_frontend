<template>
  <div class="pagination">
    <a style="cursor: pointer" class="first" v-if="first" @click="changeLink(1)"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a>
    <a style="cursor: pointer" class="prev" v-if="prev" @click="changeLink(startPageIndex - 1)"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
      <span v-for="index in endPageIndex-startPageIndex + 1" :key="index">
            <a style="cursor: pointer" :class="{'active': (startPageIndex + index - 1) == currentPage}"  @click="changePage(index)">{{ startPageIndex + index - 1 }}</a>
      </span>
    <a style="cursor: pointer" class="next" v-if="next" @click="changeLink(endPageIndex + 1)"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <a style="cursor: pointer" class="end" v-if="end" @click="changeLink(pageCount)"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
  </div>            
</template>

<script>
export default {
    props: ['listRowCount', 'totalListItemCount', 'pageLinkCount', 'currentPage'],    //listRowCount: 한 페이지당 리스트 개수, totalListItemCount: 총 리스트 개수, pageLinkCount: 링크당 페이지 개수
    data() {
        return {
            pageCount: 0,       //페이지 개수
            startPageIndex: 0,  //링크에서 페이지 시작 인덱스
            endPageIndex: 0,    //링크에서 페이지 마지막 인덱스
            prev: false,
            next: false,
            first: false,
            end: false
        }
    },
    methods: {
        initUI() {
            this.pageCount= Math.ceil(this.totalListItemCount/this.listRowCount);

            if((this.currentPage % this.pageLinkCount) == 0) {
                this.startPageIndex = ((this.currentPage / this.pageLinkCount) -1) * this.pageLinkCount + 1;
            } else {
                this.startPageIndex = Math.floor(this.currentPage / this.pageLinkCount) * this.pageLinkCount + 1;
            }

            if((this.currentPage % this.pageLinkCount == 0)) {
                this.endPageIndex = ((this.currentPage / this.pageLinkCount)-1)* this.pageLinkCount + this.pageLinkCount;
            } else {
                this.endPageIndex = Math.floor(this.currentPage / this.pageLinkCount)* this.pageLinkCount + this.pageLinkCount;
            }

            if(this.currentPage <= this.pageLinkCount) {
                this.prev = false;
                this.first = false;
            } else {
                this.prev = true;
                this.first = true;
            }

            if(this.endPageIndex >= this.pageCount) {
                this.endPageIndex = this.pageCount;
                this.next = false;
                this.end = false;
            } else {
                this.next = true;
                this.end = true;
            }
        },
        changePage(index) {
            //window.location.href = '#wrap';
            let selectedPage = this.startPageIndex + index - 1;
            this.$emit('update', selectedPage);
        },
        changeLink(index) {
            //window.location.href = '#wrap';
            this.$emit('update', index);
        }
    },
    watch: {
        currentPage: function() {
            this.initUI();
        },
        totalListItemCount: function () {
            this.initUI();
        },
        listRowCount: function () {
            this.initUI();
        },
        pageLinkCount: function () {
            this.initUI();
        }
    },
    created() {
        if((this.listRowCount !== null) && (this.listRowCount !== undefined) && (this.listRowCount !== '')) {
            this.initUI();
        } 
    }
}
</script>