<template>
	<div id="sub_contents"> 
		<div class="container">
			<ol class="location">
				<li class="home"><img src="~assets/images/location_home.png" alt="location_home"></li>
				<li>AI 데이터</li>
				<li>{{sport}}</li>
			</ol>

			<div class="lnb">
				<div class="lnb_title">AI데이터</div>
				<ul>
					<li :class="{ on: code === 'CD020' }"><NuxtLink to="/sports/CD020">골프데이터</NuxtLink></li>
					<li :class="{ on: code === 'CD021' }"><NuxtLink to="/sports/CD021">축구데이터</NuxtLink></li>
					<li :class="{ on: code === 'CD022' }"><NuxtLink to="/sports/CD022">농구데이터</NuxtLink></li>
				</ul>
			</div>

			<div class="right_cont">
				<div class="top_box data">
					<h4>데이터신청하기</h4>
					<p>데이터 신청은 AI Hub(aihub.or.kr)에서 가능합니다.</p>
					<a href="http://aihub.or.kr" target="_blank"><button type="submit"><span>바로가기</span></button></a>
				</div>
				<!-- 골프 데이터 -->
				<div class="data_list_wrap">
					<div class="data_list" v-for="(sport, index) in sportsList" v-bind:key="index">
						<h2 :id="sport.actCode">{{sport.actName}}</h2>
						<ul class="grid_col5">
							<li class="data_thumb pop_img" v-for="(list, index) in sport.sportslist" v-bind:key="index">
								<!-- 누르면 출력될 이미지나 동영상의 파일명을 data-video에 넣음 -->
								<a data-img="pop_img">
									<!-- 리스트 이미지 -->
									<img :src="list.thumImgUrl" alt="thumb"  @click="viewImage(list.thumImgUrl)">
								</a>
								<p class="thumb_txt">{{list.fileName}}</p>
							</li>
						</ul>
					</div>

					<!-- 비디오 이미지 출력 -->
					<div class="video-popup">
						<div class="video-popup-closer"></div>
					</div>

					<div class="img-popup" :class="{ 'img-popup': true, reveal: isViewPopupImg }">
            <div class='img-wrapper'><img v-bind:src="viewPopupImgUrl"></div>
						<div class="img-popup-closer" @click="closeViewImage()"></div>
					</div>	
				</div>
			</div>
		</div> 
	</div> 
</template>
<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
import $ from "jquery";

export default {
	props: ['code','category'],
	data() {
		return {
			sportsList: null,
			sport: '',
      isViewPopupImg: false,
      viewPopupImgUrl: '',
		};
	},
	created() {
		this.fetchData();
		this.setSport();
	},
	watch: {},
	methods: {
		...mapMutations([]), //<--store mutation 관리
		...mapActions('sports', ['getSportsList']), //<-- store Action 처리
		async fetchData() {
			try {
				let param = {
					code: this.code,
				};

				await this.getSportsList(param).then(
        );
				this.sportsList = this.getSportsItemList;

			} catch (e) {
				console.log(e.message);
				this.returnMsg = e.message;
			}
		},
		setSport() {
			switch (this.code) {
            case 'CD020': {
            this.sport = '골프 데이터';
            break;
            }
            case 'CD021': {
            this.sport = '축구 데이터';
            break;
            }
            case 'CD022': {
            this.sport = '농구 데이터';
            }
        }
		},
    viewImage(url) {
            this.isViewPopupImg = true;
            this.viewPopupImgUrl = url;
    },
    closeViewImage() {
            this.isViewPopupImg = false;
            this.viewPopupImgUrl = '';
    },
	},
	computed: {
		...mapGetters('sports', ['getSportsItemList']), //<--store Getter 관리
		...mapState({ result: state => state.storeSportsList }), //<--store state 관리
	},
  updated() {
    this.$nextTick(function () {
      // 모든 화면이 렌더링된 후 실행합니다.
      if( this.category != null && this.category != '' && this.category != undefined){
        try{
          $('html,body').animate({scrollTop:$("#"+this.category).offset().top}, 500);
        }catch(e){

        }
        
      }

        
    })
  }
};
</script>
