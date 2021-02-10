<template>
  <div id="sub_contents"> 
       <div class="container">
              
              <ol class="location">
                     <li class="home"><img src="images/location_home.png" alt="location_home"></li>
                     <li>AI게시판</li>
                     <li>FAQ</li>
              </ol>

              <div class="lnb">
                     <div class="lnb_title">AI게시판</div>
                     <ul>
                            <li class="on"><a href="faq.html">FAQ</a></li>
                            <li><a href="inquiry.html">문의하기</a></li>
                     </ul>
              </div>

              <div class="right_cont">
                     <div class="top_box data faq">
                            <h4>FAQ</h4>
                            <p>원하는 질문과 답이 없을 시 문의하기에 작성해 주세요</p>
                     </div>

                     <div class="accordion">
                            <ul>
                                   <li>
                                          <a href="#">
                                                 데이터요청도 가능 한가요?<span class="arrow"></span>
                                          </a>
                                          <p>
                                                 FAQ형의 게시판 답변이 표시되는 영역입니다.  FAQ형의 게시판 답변이 표시되는 영역입니다. <br />
                                                 FAQ형의 게시판 답변이 표시되는 영역입니다. <br />
                                                 FAQ형의 게시판 답변이 표시되는 영역입니다.  FAQ형의 게시판 답변이 표시되는 영역입니다.
                                          </p>
                                   </li>
                                   <li>
                                          <a href="#">
                                                 영상이 다운로드 되지 않습니다 영상이 다운로드 되지 않습니다 영상이 다운로드 되지 않습니다 영상이 다운로드 되지 않습니다 영상이 다운로드 되지 않습니다<span class="arrow"></span>
                                          </a>
                                          <p>
                                                 FAQ형의 게시판 답변이 표시되는 영역입니다.
                                          </p>
                                   </li>
                                   <li>
                                          <a href="#">
                                                 FAQ형의 게시판 제목이 표시되는 영역입니다. <span class="arrow"></span>
                                          </a>
                                          <p>
                                                 FAQ형의 게시판 답변이 표시되는 영역입니다.
                                          </p>
                                   </li>
                            </ul>
                     </div>

                     <div class="btn_area clear">
                            <button type="button" class="btn_type btn_basic btn_primary popOpenBtnCmmn" data-num="1">작성하기</button>


                            <!-- popUp_1 [S] -->
                     <div id="popUp_1" class="popCmmn">
                            <div class="popBg" data-num="1"></div>
                            <div class="popInnerBox">
                                   <div class="popHead">FAQ 작성</div>
                                   <div class="popBody">
                                          <table class="tb_write pop">
                                                 <colgroup>
                                                        <col width="20%">					
                                                        <col width="">
                                                 </colgroup>
                                                 <tbody>
                                                        <tr>
                                                               <th>질문</th>
                                                               <td><textarea name="faq_A" rows="3" cols="33" placeholder="FAQ에 올라갈 질문을 입력해 주세요"></textarea></td>
                                                        </tr>
                                                        <tr>
                                                               <th>답변</th>
                                                               <td><textarea name="faq_A" rows="10" cols="33" placeholder="질문에 대한 답변을 입력해 주세요"></textarea></td>
                                                        </tr>
                                                 </tbody>
                                          </table>

                                   </div>
                                   <div id="btncancel" data-num="1" class="popCloseBtnCmmn">
                                          <button href="#" class="btn_layerClose" ></button>
                                   </div>
                                   <div class="popFoot">
                                                 <button type="button" id="btnfinish" class="btn_type btn_basic btn_primary popCloseBtnCmmn" data-num="1"><span>작성완료</span></button>	
                                   </div>
                            </div>
                     </div>
                     <!-- popUp_1 [E] -->
                            <!-- faq_write [S] -->
                            <!-- <div class="dim-layer">
                            <div class="dimBg"></div>
                            <div id="faq_write" class="pop-layer">
                                   <div class="pop-container">
                                   
                                   <h3>FAQ 작성</h3>

                                   <table class="tb_write pop">
                                                        <colgroup>
                                                               <col width="20%">					
                                                               <col width="">
                                                        </colgroup>
                                                        <tbody>
                                                               <tr>
                                                                      <th>질문</th>
                                                                      <td><textarea name="faq_A" rows="3" cols="33" placeholder="FAQ에 올라갈 질문을 입력해 주세요"></textarea></td>
                                                               </tr>
                                                               <tr>
                                                                      <th>답변</th>
                                                                      <td><textarea name="faq_A" rows="10" cols="33" placeholder="질문에 대한 답변을 입력해 주세요"></textarea></td>
                                                               </tr>
                                                        </tbody>
                                                 </table>

                                   <div><a href="#" class="btn-layerClose"></a> </div>

                                   <button type="button" id="btnJoin" class="btn_type btn_basic btn_primary btn-layerClose"><span>작성완료</span></button>

                                   </div>
                            </div>
                            </div> -->
                            <!-- faq_write [E] -->
                     </div>
              </div>
       </div> 
</div> 
</template>

<script>
export default {

}
</script>