<template>
	<div id="header">
		<div class="container">
			<h1>
				<NuxtLink to="/"><img src="~assets/images/m_logo.png" alt="logo"/></NuxtLink>
			</h1>
			<nav role="navigation">
				<ul id="main-menu">
					<li>
						<a href="#">AI데이터</a>
						<ul id="sub-menu">
							<li><NuxtLink to="/sports/CD004001">골프데이터</NuxtLink></li>
							<li><NuxtLink to="/sports/CD004002">축구데이터</NuxtLink></li>
							<li><NuxtLink to="/sports/CD004003">농구데이터</NuxtLink></li>
						</ul>
					</li>
					<li>
						<a href="#">AI게시판</a>
						<ul id="sub-menu">
							<li><NuxtLink to="/board/faq/100">고객문의</NuxtLink></li>
							<li><NuxtLink to="/board/qna/200">FAQ</NuxtLink></li>
						</ul>
					</li>
				</ul>
			</nav>
			<div class="util">
				<ul>
					<li class="util_search">
						<NuxtLink to="/search"><img src="~assets/images/search.png" alt="search"/></NuxtLink>
					</li>
					<li><NuxtLink to="/member/signUp">회원가입</NuxtLink></li>
					<li class="util_bar">|</li>
					<li><NuxtLink to="/member/signIn">로그인</NuxtLink></li>
				</ul>
			</div>
		</div>
	</div>
</template>
