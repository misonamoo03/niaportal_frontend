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
				<div class="data_list_wrap" v-if="code === 'CD020'">
					<div class="data_list">
						<h2>Setup</h2>
						<ul>
							<li class="data_thumb pop_video">
								<!-- 누르면 출력될 이미지나 동영상의 파일명을 data-video에 넣음 -->
								<a data-video="sample1" class="btn_play">
									<!-- 리스트 이미지 -->
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">Setup 01</p>
							</li>
							<li class="data_thumb pop_img">
								<a data-img="pop_img">
									<img src="~assets/images/pop_img.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">Setup 02</p>
							</li>
							<li class="data_thumb pop_video">
								<a data-video="sample2" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">Setup 04</p>
							</li>
							<li class="data_thumb pop_img">
								<a data-img="pop_img">
									<img src="~assets/images/pop_img.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">Setup 03</p>
							</li>
						</ul>
						<ul>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">Setup 05</p>
							</li>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">Setup 06</p>
							</li>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">Setup 07</p>
							</li>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">Setup 08</p>
							</li>
						</ul>
					</div>

					<div class="data_list">
						<h2>Address</h2>
						<ul>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">Address 01</p>
							</li>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">Address 02</p>
							</li>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">Address 03</p>
							</li>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">Address 04</p>
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

				<!-- 축구 데이터 -->
				<div class="data_list_wrap" v-else-if="code === 'CD021'">
					<div class="data_list">
						<h2>드리블</h2>
						<ul>
							<li class="data_thumb pop_video">
								<!-- 누르면 출력될 이미지나 동영상의 파일명을 data-video에 넣음 -->
								<a data-video="sample1" class="btn_play">
									<!-- 리스트 이미지 -->
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">드리블 01</p>
							</li>
							<li class="data_thumb pop_img">
								<a data-img="pop_img">
									<img src="~assets/images/pop_img.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">드리블 02</p>
							</li>
							<li class="data_thumb pop_video">
								<a data-video="sample2" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">드리블 04</p>
							</li>
							<li class="data_thumb pop_img">
								<a data-img="pop_img">
									<img src="~assets/images/pop_img.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">드리블 03</p>
							</li>
						</ul>
						<ul>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">드리블 05</p>
							</li>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">드리블 06</p>
							</li>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">드리블 07</p>
							</li>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">드리블 08</p>
							</li>
						</ul>
					</div>

					<div class="data_list">
						<h2>패스</h2>
						<ul>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">패스 01</p>
							</li>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">패스 02</p>
							</li>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">패스 03</p>
							</li>
							<li class="data_thumb pop_video">
								<a data-video="sample1" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">패스 04</p>
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

				<!-- 농구 데이터 -->
				<div class="data_list_wrap" v-else-if="code === 'CD022'">
					<div class="data_list">
						<h2>드리블</h2>
						<ul>
							<li class="data_thumb pop_video">
								<!-- 누르면 출력될 이미지나 동영상의 파일명을 data-video에 넣음 -->
								<a data-video="sample1" class="btn_play">
									<!-- 리스트 이미지 -->
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">드리블 01</p>
							</li>
							<li class="data_thumb pop_img">
								<a data-img="pop_img">
									<img src="~assets/images/pop_img.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">드리블 02</p>
							</li>
							<li class="data_thumb pop_video">
								<a data-video="sample2" class="btn_play">
									<img src="~assets/images/thumb_soccer.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">드리블 04</p>
							</li>
							<li class="data_thumb pop_img">
								<a data-img="pop_img">
									<img src="~assets/images/pop_img.jpg" alt="thumb">
								</a>
								<p class="thumb_txt">드리블 03</p>
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
				console.log('12345678', this.result);
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
