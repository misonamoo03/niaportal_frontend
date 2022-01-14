<template>
<div>
    <div v-if="code=='CD020'"> 
        <h3>골프</h3>
          <div class="sub-category">
              <ul>
                  <li class="active"><a href="#">데이터 소개</a></li>
                  <li><a href="#" @click="goQnaPosition()">Q&amp;A</a></li>
              </ul>
          </div>
          <h4>데이터셋명 : 스포츠 사람 동작 영상(골프)</h4>
          <h5>소개 </h5>
          <ul class="bullet">
              <li>스포츠 분야 인공지능 생태계 활성화를 위해 대표적 골프 종목의 인공지능 학습용 데이터셋 구축</li>
              <li>주요 객체(사람, 공, 골프채) 및 관절에 대한 가공정보와 동작정보, 환경정보, 대상정보, 활용정보 등의 메타데이터가 포함된 결과물 제공</li>
              <li>일반적으로 사용되는 기초학습 데이터의 수백배 정도되며 심화학습, 강화학습으로 활용하기에도 충분한 수량의 인공지능 학습용 데이터 구축</li>
          </ul>
          <h5>활용 분야 </h5>
          <ul class="bullet">
              <li>사람의 동작을 인식하고 행동유형을 추론하는 인공지능 개발 및 연구를 통해 일반 스포츠, VR/AR/MR 기반의 가상 스포츠 산업 등에서 활용</li>
          </ul>
          <h5>내용 및 제공 데이터량 </h5>
          <ul class="bullet">
              <li>골프 영상(협회 경기 영상 + 직접 촬영 영상) 400시간 이상 수집 및 4,320,000장 이상 가공</li>
              <li>객체 정보와 환경 정보, 동작 정보, 활용 정보 등이 포함된 Json 형식의 파일을 결과로 산출</li>
          </ul>
          <div class="img"><img src="/data_img/CD020/info_1.png" alt=""><img src="/data_img/CD020/info_2.png" alt=""></div>
          <h5>데이터 샘플 (예시) </h5>
          <p>데이터 신청은 AI Hub(aihub.or.kr)에서 가능합니다. <a href="https://aihub.or.kr/aidata/34117">데이터 신청 바로가기 <i class="bi bi-caret-right-fill"></i></a></p>
          <div class="img row">
              <div class="col-sm-6"><img src="/data_img/CD020/sample_1.jpeg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD020/sample_2.jpeg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD020/sample_3.jpeg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD020/sample_4.jpeg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD020/sample_5.jpeg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD020/sample_6.jpeg" alt=""></div>
          </div>
    </div> 


    <div v-if="code=='CD021'"> 
        <h3>축구</h3>
          <div class="sub-category">
              <ul>
                  <li class="active"><a href="#">데이터 소개</a></li>
                  <li><a href="#" @click="goQnaPosition()">Q&amp;A</a></li>
              </ul>
          </div>
          <h4>데이터셋명 : 스포츠 사람 동작 영상(축구)</h4>
          <h5>소개 </h5>
          <ul class="bullet">
              <li>스포츠 분야 인공지능 생태계 활성화를 위해 대표적 축구 종목의 인공지능 학습용 데이터셋 구축</li>
              <li>주요 객체(사람, 공, 심판) 및 관절에 대한 가공정보와 동작정보, 환경정보, 대상정보, 활용정보 등의 메타데이터가 포함된 결과물 제공</li>
              <li>일반적으로 사용되는 기초학습 데이터의 수백배 정도되며 심화학습, 강화학습으로 활용하기에도 충분한 수량의 인공지능 학습용 데이터 구축</li>
          </ul>
          <h5>활용 분야 </h5>
          <ul class="bullet">
              <li>사람의 동작을 인식하고 행동유형을 추론하는 인공지능 개발 및 연구를 통해 일반 스포츠, VR/AR/MR 기반의 가상 스포츠 산업 등에서 활용</li>
          </ul>
          <h5>내용 및 제공 데이터량 </h5>
          <ul class="bullet">
              <li>축구 영상(협회 경기 영상 + 직접 촬영 영상) 200시간 이상 수집 및 4,000,000장 이상 가공</li>
              <li>객체 정보와 환경 정보, 동작 정보, 활용 정보 등이 포함된 Json 형식의 파일을 결과로 산출</li>
          </ul>
          <div class="img"><img src="/data_img/CD021/info_1.png" alt=""><img src="/data_img/CD021/info_2.png" alt=""></div>
          <h5>데이터 샘플 (예시) </h5>
          <p>데이터 신청은 AI Hub(aihub.or.kr)에서 가능합니다. <a href="https://aihub.or.kr/aidata/34119">데이터 신청 바로가기 <i class="bi bi-caret-right-fill"></i></a></p>
          <div class="img row">
              <div class="col-sm-6"><img src="/data_img/CD021/sample_1.jpeg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD021/sample_2.jpeg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD021/sample_3.jpeg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD021/sample_4.jpeg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD021/sample_5.jpeg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD021/sample_6.jpeg" alt=""></div>
          </div>
    </div> 

    <div v-if="code=='CD022'"> 
        <h3>농구</h3>
          <div class="sub-category">
              <ul>
                  <li class="active"><a href="#">데이터 소개</a></li>
                  <li><a href="#" @click="goQnaPosition()">Q&amp;A</a></li>
              </ul>
          </div>
          <h4>데이터셋명 : 스포츠 사람 동작 영상(농구)</h4>
          <h5>소개 </h5>
          <ul class="bullet">
              <li>스포츠 분야 인공지능 생태계 활성화를 위해 대표적 농구 종목의 인공지능 학습용 데이터셋 구축</li>
              <li>주요 객체(사람, 공, 심판) 및 관절에 대한 가공정보와 동작정보, 환경정보, 대상정보, 활용정보 등의 메타데이터가 포함된 결과물 제공</li>
              <li>일반적으로 사용되는 기초학습 데이터의 수백배 정도되며 심화학습, 강화학습으로 활용하기에도 충분한 수량의 인공지능 학습용 데이터 구축</li>
          </ul>
          <h5>활용 분야 </h5>
          <ul class="bullet">
              <li>사람의 동작을 인식하고 행동유형을 추론하는 인공지능 개발 및 연구를 통해 일반 스포츠, VR/AR/MR 기반의 가상 스포츠 산업 등에서 활용</li>
          </ul>
          <h5>내용 및 제공 데이터량 </h5>
          <ul class="bullet">
              <li>농구 영상(협회 경기 영상 + 직접 촬영 영상) 200시간 이상 수집 및 4,320,000장 이상 가공</li>
              <li>객체 정보와 환경 정보, 동작 정보, 활용 정보 등이 포함된 Json 형식의 파일을 결과로 산출</li>
          </ul>
          <div class="img"><img src="/data_img/CD022/info_1.png" alt=""><img src="/data_img/CD022/info_2.png" alt=""></div>
          <h5>데이터 샘플 (예시) </h5>
          <p>데이터 신청은 AI Hub(aihub.or.kr)에서 가능합니다. <a href="https://aihub.or.kr/aidata/34118">데이터 신청 바로가기 <i class="bi bi-caret-right-fill"></i></a></p>
          <div class="img row">
              <div class="col-sm-6"><img src="/data_img/CD022/sample_1.jpeg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD022/sample_2.jpeg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD022/sample_3.jpeg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD022/sample_4.jpeg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD022/sample_5.jpeg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD022/sample_6.jpeg" alt=""></div>
          </div>
    </div>

    <div v-if="code=='CD023'"> 
        <h3>야구</h3>
          <div class="sub-category">
              <ul>
                  <li class="active"><a href="#">데이터 소개</a></li>
                  <li><a href="#" @click="goDataModelPosition()">응용서비스 모델</a></li>
                  <li><a href="#" @click="goQnaPosition()">Q&amp;A</a></li>
              </ul>
          </div>
          <h4>데이터셋명 : 스포츠 사람 동작 영상(야구)</h4>
          <h5>소개 </h5>
          <ul class="bullet">
              <li>스포츠 분야 인공지능 생태계 활성화를 위해 대표적 야구 종목의 인공지능 학습용 데이터셋 구축</li>
              <li>주요 객체(선수, 심판, 장비, 유니폼 번호, 기타) 및 관절에 대한 가공정보와 동작정보, 환경정보, 대상정보, 활용정보 등의 메타데이터가 포함된 결과물 제공</li>
              <li>일반적으로 사용되는 기초학습 데이터의 수백배 정도되며 심화학습, 강화학습으로 활용하기에도 충분한 수량의 인공지능 학습용 데이터 구축</li>
          </ul>
          <h5>활용 분야 </h5>
          <ul class="bullet">
              <li>사람의 동작을 인식하고 행동유형을 추론하는 인공지능 개발 및 연구를 통해 일반 스포츠, VR/AR/MR 기반의 가상 스포츠 산업 등에서 활용</li>
          </ul>
          <h5>내용 및 제공 데이터량 </h5>
          <ul class="bullet">
              <li>야구 영상(협회 경기 영상 + 직접 촬영 영상) 500시간 이상 수집 및 1,220,000장 이상 가공</li>
              <li>객체 정보와 환경 정보, 동작 정보, 활용 정보 등이 포함된 Json 형식의 파일을 결과로 산출</li>
          </ul>
          <!--div class="img"><img src="/data_img/CD023/info_1.png" alt=""><img src="/data_img/CD023/info_2.png" alt=""></div-->
          <h5>데이터 샘플 (예시) </h5>
          <p>데이터 신청은 AI Hub(aihub.or.kr)에서 가능합니다. <a href="#">데이터 신청 바로가기 <i class="bi bi-caret-right-fill"></i></a></p>
          <div class="img row">
              <div class="col-sm-6"><img src="/data_img/CD023/sample_1.jpg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD023/sample_2.jpg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD023/sample_3.jpg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD023/sample_4.jpg" alt=""></div>
          </div>
          <h4 id="dataModel">응용 서비스 모델</h4>
            <div class="service-model">
                <div class="row">
                    <div class="col-sm-6"><img src="/data_img/CD023/application_service.png" alt=""></div>
                    <div class="col-sm-6 text">
                        <p>본 응용서비스를 통해 사회인 야구에서는 그동안 확인하기 어려웠던 데이터를 제공할 수 있으며, 향후 기록 시스템과 연계하여 문자 중계로 확대할 예정입니다.</p>
                        <a href="https://dev.flexer.co.kr/channel/1H2BSRIMGYK/video" class="btn line gray">응용 서비스 모델 보러가기 <i class="bi bi-caret-right-fill"></i></a>
                    </div>
                </div>
            </div><!-- /.service-model -->
    </div> 
    <div v-if="code=='CD024'"> 
        <h3>배구</h3>
          <div class="sub-category">
              <ul>
                  <li class="active"><a href="#">데이터 소개</a></li>
                  <li><a href="#" @click="goDataModelPosition()">응용서비스 모델</a></li>
                  <li><a href="#" @click="goQnaPosition()">Q&amp;A</a></li>
              </ul>
          </div>
          <h4>데이터셋명 : 스포츠 사람 동작 영상(배구)</h4>
          <h5>소개 </h5>
          <ul class="bullet">
              <li>스포츠 분야 인공지능 생태계 활성화를 위해 대표적 배구 종목의 인공지능 학습용 데이터셋 구축</li>
              <li>주요 객체(선수, 심판, 장비, 유니폼 번호) 및 관절에 대한 가공정보와 동작정보, 환경정보, 대상정보, 활용정보 등의 메타데이터가 포함된 결과물 제공</li>
              <li>일반적으로 사용되는 기초학습 데이터의 수백배 정도되며 심화학습, 강화학습으로 활용하기에도 충분한 수량의 인공지능 학습용 데이터 구축</li>
          </ul>
          <h5>활용 분야 </h5>
          <ul class="bullet">
              <li>사람의 동작을 인식하고 행동유형을 추론하는 인공지능 개발 및 연구를 통해 일반 스포츠, VR/AR/MR 기반의 가상 스포츠 산업 등에서 활용</li>
          </ul>
          <h5>내용 및 제공 데이터량 </h5>
          <ul class="bullet">
              <li>배구 영상(협회 경기 영상 + 직접 촬영 영상) 500시간 이상 수집 및 1,224,000장 이상 가공</li>
              <li>객체 정보와 환경 정보, 동작 정보, 활용 정보 등이 포함된 Json 형식의 파일을 결과로 산출</li>
          </ul>
          <!--div class="img"><img src="/data_img/CD024/info_1.png" alt=""><img src="/data_img/CD024/info_2.png" alt=""></div-->
          <h5>데이터 샘플 (예시) </h5>
          <p>데이터 신청은 AI Hub(aihub.or.kr)에서 가능합니다. <a href="#">데이터 신청 바로가기 <i class="bi bi-caret-right-fill"></i></a></p>
          <div class="img row">
              <div class="col-sm-6"><img src="/data_img/CD024/sample_1.jpg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD024/sample_2.jpg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD024/sample_3.jpg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD024/sample_4.jpg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD024/sample_5.jpg" alt=""></div>
              <div class="col-sm-6"><img src="/data_img/CD024/sample_6.jpg" alt=""></div>
          </div>
          <h4 id="dataModel">응용 서비스 모델</h4>
            <div class="service-model">
                <div class="row">
                    <div class="col-sm-6"><img src="/data_img/CD024/application_service.png" alt=""></div>
                    <div class="col-sm-6 text">
                        <p>실제 데이터 분석관들이 경기 후 자신이 입력한 데이터와 상황이 일치하는지 확인하기 위해 경기를 복기하는 업무량을 줄여줄 수 있을 뿐만 아니라, 하이라이트 영상 제작 및 선수별 비대면 코칭 시스템 구축을 위한 기반 기술을 마련할 수 있습니다.</p>
                        <a href="https://dev.flexer.co.kr/channel/ULXASEDEX7/video" class="btn line gray">응용 서비스 모델 보러가기 <i class="bi bi-caret-right-fill"></i></a>
                    </div>
                </div>
            </div><!-- /.service-model -->
    </div>
    

</div>
</template>

<script>
export default {
    props: ['code'],
    data() {
        return {
            message: ''
        };
    },
    beforeMount() {
        switch (this.code) {
            case 'CD020': {
            this.message = '골프 데이터';
            break;
            }
            case 'CD021': {
            this.message = '축구 데이터';
            break;
            }
            case 'CD022': {
            this.message = '농구 데이터';
            }
        }
    },
       methods: {
         goQnaPosition(){
                $('html,body').animate({scrollTop:$("#sportsQna").offset().top-100}, 500);
              },
          goDataModelPosition(){
             $('html,body').animate({scrollTop:$("#dataModel").offset().top-100}, 500);
          }
       }
}
</script>