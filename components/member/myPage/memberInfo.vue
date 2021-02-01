<template>
    <div id="sub_contents"> 
        <div class="container">
            <ol class="location">
                <li class="home"><img src="~assets/images/location_home.png" alt="location_home"></li>
                <li>마이페이지</li>
            </ol>

            <h2>정보수정</h2>

            <table class="tb_write">
                <colgroup>
                    <col width="15%">						
                    <col width="">
                </colgroup>
                <tbody>
                    <tr>
                        <th>ID(이메일)</th>
                        <td>email@email.com</td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td>홍길동</td>
                    </tr>
                    <tr>
                        <th  rowspan="3">비밀번호변경</th>
                        <td><input type="password" name="modify_password1" placeholder="현재 비밀번호를 입력해 주세요."></td>	
                    </tr>
                    <tr>
                        <td><input type="password" name="modify_password2" placeholder="새로운 비밀번호를 입력해 주세요."></td>	
                    </tr>
                    <tr>
                        <td><input type="password" name="modify_password3" placeholder="새로운 비밀번호를 한번 더 입력해 주세요."></td>	
                    </tr>
                    <tr>
                        <th>전화번호</th>
                        <td><input type="tel" name="modify_tel" value="010-1234-5678"></td>
                    </tr>
                    <tr>
                        <th>소속기관명</th>
                        <td><input type="text" name="modify_aff" value="아이온"></td>
                    </tr>
                    <tr>
                        <th>소속기관분류</th>
                        <td>
                            <form>
                                <select name="join_organization">
                                    <option value="organization">중소기업</option>
                                </select>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="btn_area clear">
                <button type="button" id="btnJoin" class="btn_type btn_w480 btn_primary"><span>수정완료</span></button>
            </div>
        </div> 
    </div> 
</template>