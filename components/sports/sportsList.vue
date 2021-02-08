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
						<h2>{{sport.actName}}</h2>
						<ul class="grid_col4">
							<li class="data_thumb pop_img" v-for="(list, index) in sport.sportslist" v-bind:key="index">
								<!-- 누르면 출력될 이미지나 동영상의 파일명을 data-video에 넣음 -->
								<a data-img="pop_img">
									<!-- 리스트 이미지 -->
									<img :src="list.thumImgUrl" alt="thumb">
								</a>
								<p class="thumb_txt">{{list.fileName}}</p>
							</li>
						</ul>
					</div>

					<!-- 비디오 이미지 출력 -->
					<div class="video-popup">
						<div class="video-popup-closer"></div>
					</div>

					<div class="img-popup">
						<div class="img-popup-closer"></div>
					</div>	
				</div>
			</div>
		</div> 
	</div> 
</template>
<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';

export default {
	props: ['code'],
	data() {
		return {
			sportsList: null,
			sport: '',
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

				await this.getSportsList(param).then();
				this.sportsList = this.getSportsItemList;
				console.log(this.sportsList);
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
		}
	},
	computed: {
		...mapGetters('sports', ['getSportsItemList']), //<--store Getter 관리
		...mapState({ result: state => state.storeSportsList }), //<--store state 관리
	},
};
</script>
