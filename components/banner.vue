<template>
	<div id="banner" class="clear"> 
		<div class="container">
			<h1>스포츠 사람 동작 AI데이터</h1>
			<p>
				스포츠 사람 동작에 관한 AI 데이터를 제공하는 플랫폼 입니다.<br />
				골프, 농구, 축구 AI학습에 필요한 데이터를 확인해보세요.
			</p>

			<div id="main_popup" class="main_popup" v-if="!isNotToday">
				<div class="popup_con">
					<div class="mpop_btn">
						<a href="/competition" target="_blank"><img src="~assets/images/main_pop_btn.png"/></a>
					</div>
				</div>
				
				<div class="popup_bottom">
					<a v-on:click="closePopupNotToday()" class="white">
				
					<!-- <label for="myCheck">오늘 하루 보지 않기</label> -->
					<input type="checkbox" id="myCheck">
					<label for="myCheck">오늘 하루 보지 않기</label>
					</a>
					<a style="cursor: pointer" v-on:click="closeMainPopup()" class="pull-right white">닫기</a>
				</div>
			</div> 
		</div>
	</div> 
</template>

<script>
import $ from "jquery";
import Cookie, { remove } from 'js-cookie'
export default {
	data() {
		return {
			isNotToday: (Cookie.get('notToday') == 'Y')
		}
	},
	methods: {
		closeMainPopup() {
			$("#main_popup").hide();
		},
		closePopupNotToday() {
			Cookie.set('notToday', 'Y', { expires: 1 });
			$("#main_popup").hide();
		}
	}
}
</script>
