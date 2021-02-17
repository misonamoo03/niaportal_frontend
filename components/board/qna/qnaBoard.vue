<template>
  <div id="sub_contents"> 
       <div class="container">
              
              <ol class="location">
                     <li class="home"><img src="images/location_home.png" alt="location_home"></li>
                     <li>AI게시판</li>
                     <li>문의하기</li>
              </ol>

              <div class="lnb">
                     <div class="lnb_title">AI게시판</div>
                      <ul>
                            <li><NuxtLink to="/board/faq/faq">FAQ</NuxtLink></li>
                            <li class="on"><NuxtLink to="/board/qna/qna">문의하기</NuxtLink></li>
                     </ul>
              </div>

              <div class="right_cont">
                     
                     <div class="tb_lineList">
                            <table>
                                   <colgroup>
                                          <col>
                                          <col>
                                          <col>
                                          <col>
                                          <col>
                                          <col>
                                   </colgroup>
                                   <thead>
                                          <tr>
                                                 <th scope="col" class="headNum">No</th>
                                                 <th scope="col" class="headAnswer">문의내용</th>
                                                 <th scope="col" class="headTxt"></th>
                                                 <th scope="col" class="headWriter">작성자</th>
                                                 <th scope="col" class="headDate">작성일자</th>
                                                 <th scope="col" class="headView">조회수</th>
                                          </tr>
                                   </thead>
                                   <tbody>
                                          <tr>
                                                 <td class="no">10</td>
                                                 <td class="txtL">
                                                        <a href="inquiry_view.html">
                                                               <span class="txtL_length">
                                                                      데이터문의입니다.
                                                               </span>
                                                        </a>
                                                 </td>
                                                 <td class="answer">
                                                        <a href="#" class="popOpenBtnCmmn" data-num="2">답변작성</a>
                                                 </td>
                                                 <td class="writer">홍길동</td>
                                                 <td class="date">2021.01.08</td>
                                                 <td class="view">50</td>
                                          </tr>
                                          
                                          <tr>
                                                 <td class="no">9</td>
                                                 <td class="txtL">
                                                        <a href="inquiry_view.html">
                                                               <span class="lock"></span>
                                                               <span class="txtL_length">
                                                                      데이터문의입니다. 데이터문의입니다. 데이터문의입니다. 데이터문의입니다. 데이터문의입니다. 데이터문의입니다.
                                                               </span>  
                                                               <span class="cnt">(1)</span>
                                                        </a>
                                                 </td>
                                                 <td class="answer modify">
                                                        <a href="#" class="popOpenBtnCmmn" data-num="3">답변수정</a>
                                                 </td>
                                                 <td class="writer">홍길동</td>
                                                 <td class="date">2021.01.08</td>
                                                 <td class="view">247</td>
                                          </tr>

                                          <tr>
                                                 <td class="no">8</td>
                                                 <td class="txtL">
                                                        <a href="inquiry_view.html">
                                                               <span class="lock"></span>
                                                               <span class="txtL_length">
                                                                      데이터문의입니다. 데이터문의입니다.
                                                               </span>  
                                                               <span class="cnt">(1)</span>
                                                        </a>
                                                 </td>
                                                 <td class="answer modify">
                                                        <a href="#" class="popOpenBtnCmmn" data-num="3">답변수정</a>
                                                 </td>
                                                 <td class="writer">홍길동</td>
                                                 <td class="date">2021.01.08</td>
                                                 <td class="view">757</td>
                                          </tr>
                                   </tbody>
                            </table>
                     </div>

                     <div class="pagination" >
                            <button type="button" class="btn_first" title="첫 페이지로 이동"><span>처음</span></button>
                            <button type="button" class="btn_prev" title="이전 5개 목록 페이지로 이동"><span>이전</span></button>

                            <ul class="paging">
                                   <li><button type="button" class="on" title="현재페이지로 이동">1</button></li>
                                   <li><button type="button" title="2번 페이지로 이동">2</button></li>
                                   <li><button type="button" title="3번 페이지로 이동">3</button></li>
                                   <li><button type="button" title="4번 페이지로 이동">4</button></li>
                                   <li><button type="button" title="5번 페이지로 이동">5</button></li>
                                   <li><button type="button" title="6번 페이지로 이동">6</button></li>
                                   <li><button type="button" title="7번 페이지로 이동">7</button></li>
                                   <li><button type="button" title="8번 페이지로 이동">8</button></li>
                                   <li><button type="button" title="9번 페이지로 이동">9</button></li>
                            </ul>

                            <button type="button" class="btn_next" title="다음 5개 목록 페이지로 이동"><span>다음</span></button>
                            <button type="button" class="btn_end" title="마지막 페이지로 이동"><span>끝</span></button>
                     </div>
              
                     <div class="btn_area clear m_t0">
                            <button type="button" class="btn_type btn_basic btn_primary popOpenBtnCmmn" data-num="1">문의사항 작성</button>
                     </div>

                     
                     <!-- popUp_1 [S] -->
                     <div id="popUp_1" class="popCmmn">
                            <div class="popBg" data-num="1"></div>
                            <div class="popInnerBox">
                                   <div class="popHead">문의사항 작성</div>
                                   <div class="popBody">
                                          <table class="tb_write pop">
                                                 <colgroup>
                                                        <col width="20%">					
                                                        <col width="">
                                                 </colgroup>
                                                 <tbody>
                                                        <tr>
                                                               <th>제목</th>
                                                               <td><textarea name="inquiry_tit" rows="2" cols="33" placeholder="제목을 입력해 주세요"></textarea></td>
                                                        </tr>
                                                        <tr>
                                                               <th>내용</th>
                                                               <td><textarea name="inquiry_con" rows="8" cols="33" placeholder="내용을 입력해 주세요"></textarea></td>
                                                        </tr>
                                                 </tbody>
                                          </table>

                                          <input type="checkbox" id="myCheck">
                                          <label for="myCheck">작성한 문의사항을 비공개합니다.</label>

                                   </div>
                                   <div id="btncancel" data-num="1" class="popCloseBtnCmmn">
                                          <button href="#" class="btn_layerClose" ></button>
                                   </div>
                                   <div class="popFoot">
                                          <div class="btn_group">
                                                 <button type="button" id="btncancel" class="btn_type btn_basic btn_cancel popCloseBtnCmmn" data-num="1"><span>취소</span></button>	
                                   <button type="button" id="btnfinish" class="btn_type btn_basic btn_primary popCloseBtnCmmn" data-num="1"><span>작성완료</span></button>	
                            </div>
                                   </div>
                            </div>
                     </div>
                     <!-- popUp_1 [E] -->

                     <!-- popUp_2 [S] -->
                     <div id="popUp_2" class="popCmmn">
                            <div class="popBg" data-num="2"></div>
                            <div class="popInnerBox">
                                   <div class="popHead">답변작성</div>
                                   <div class="popBody">
                                          <table class="tb_write pop">
                                                 <colgroup>
                                                        <col width="20%">					
                                                        <col width="">
                                                 </colgroup>
                                                 <tbody>
                                                        <tr>
                                                               <th>제목</th>
                                                               <td>문의 작성자가 작성한 제목 출력	</td>
                                                        </tr>
                                                        <tr>
                                                               <th>내용</th>
                                                               <td>
                                                                      문의 작성자가 작성한 내용 출력<br />
                                                                      문의 작성자가 작성한 내용 출력 문의 작성자가 작성한 내용 출력 문의 작성자가 작성한<br />
                                                                      문의 작성자가 작성한 내용 출력 문의 작성자가 작성한 내용 출력<br />
                                                                      문의 작성자가 작성한 내용 출력 문의 작성자가 작성한<br />
                                                                      문의 작성자가 작성한 내용 출력<br />
                                                                      문의 작성자가 작성한 내용 출력 문의 
                                                               </td>
                                                        </tr>
                                                        <tr>
                                                               <th>답변</th>
                                                               <td><textarea name="inquiry_comt" rows="6" cols="33" placeholder="답변을 입력해 주세요"></textarea></td>
                                                        </tr>
                                                 </tbody>
                                          </table>

                                   </div>
                                   <div id="btncancel" data-num="2" class="popCloseBtnCmmn">
                                          <button href="#" class="btn_layerClose" ></button>
                                   </div>
                                   <div class="popFoot">
                                          <div class="btn_group">
                                                 <button type="button" id="btncancel" class="btn_type btn_basic btn_cancel popCloseBtnCmmn" data-num="2"><span>취소</span></button>	
                                   <button type="button" id="btnfinish" class="btn_type btn_basic btn_primary popCloseBtnCmmn" data-num="2"><span>작성완료</span></button>	
                            </div>
                                   </div>
                            </div>
                     </div>
                     <!-- popUp_2 [E] -->

                     <!-- popUp_3 [S] -->
                     <div id="popUp_3" class="popCmmn">
                            <div class="popBg" data-num="3"></div>
                            <div class="popInnerBox">
                                   <div class="popHead">답변수정</div>
                                   <div class="popBody">
                                          <table class="tb_write pop">
                                                 <colgroup>
                                                        <col width="20%">					
                                                        <col width="">
                                                 </colgroup>
                                                 <tbody>
                                                        <tr>
                                                               <th>제목</th>
                                                               <td>문의 작성자가 작성한 제목 출력	</td>
                                                        </tr>
                                                        <tr>
                                                               <th>내용</th>
                                                               <td>
                                                                      문의 작성자가 작성한 내용 출력<br />
                                                                      문의 작성자가 작성한 내용 출력 문의 작성자가 작성한 내용 출력 문의 작성자가 작성한<br />
                                                                      문의 작성자가 작성한 내용 출력 문의 작성자가 작성한 내용 출력<br />
                                                                      문의 작성자가 작성한 내용 출력 문의 작성자가 작성한<br />
                                                                      문의 작성자가 작성한 내용 출력<br />
                                                                      문의 작성자가 작성한 내용 출력 문의 
                                                               </td>
                                                        </tr>
                                                        <tr>
                                                               <th>답변</th>
                                                               <td><textarea name="inquiry_comt" rows="6" cols="33">작성한 답변 출력작성한 답변 출력작성한 답변 출력</textarea></td>
                                                        </tr>
                                                 </tbody>
                                          </table>

                                   </div>
                                   <div id="btncancel" data-num="3" class="popCloseBtnCmmn">
                                          <button href="#" class="btn_layerClose" ></button>
                                   </div>
                                   <div class="popFoot">
                                          <div class="btn_group">
                                                 <button type="button" id="btncancel" class="btn_type btn_basic btn_cancel popCloseBtnCmmn" data-num="3"><span>취소</span></button>	
                                   <button type="button" id="btnfinish" class="btn_type btn_basic btn_primary popCloseBtnCmmn" data-num="3"><span>수정완료</span></button>	
                            </div>
                                   </div>
                            </div>
                     </div>
                     <!-- popUp_3 [E] -->
              </div>
       </div> 
</div>
</template>

<script>
export default {

}
</script>