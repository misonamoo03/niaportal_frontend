import axios from 'axios';

//로그인
const signIn = async (info) => {
  try {
    let params = new URLSearchParams();
    params.append('email', info.email);
    params.append('password', info.password);
    const req = await axios.post('http://sportsaihub.com:8080/User/login', params, { withCredentials: true });
    return req.data

  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`server error : ${e.error}`)
  }
}
//회원가입
const signUp = async (userInfo) => {
  try {
    const req = await axios.post('http://sportsaihub.com:8080/User/register', JSON.stringify(userInfo.userInfo), {
      headers: {
        "Content-Type": 'application/json',
      },
    });
    return req.data;

  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`server error : ${e.error}`);
  }
}
//비밀번호 찾기
const findPass = async (info) => {
  try {
    let params = new URLSearchParams();
    params.append('email', info.email);
    const req = await axios.post('http://sportsaihub.com:8080/User/findPw', params);
    return req.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`server error : ${e.error}`);
  }
}
//인증번호 확인
const verify = async (info) => {
  try {
    let params = new URLSearchParams();
    params.append('email', info.email);
    params.append('secCode', info.secCode);
    const req = await axios.post('http://sportsaihub.com:8080/User/validate', params, { withCredentials: true });
    return req.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`server error : ${e.error}`);
  }
}

//비밀번호 변경
const changePwd = async (info) => {
  try {
    let params = new URLSearchParams();
    params.append('email', info.email);
    params.append('password', info.password);
    params.append('rePassword', info.rePassword);
    const req = await axios.post('http://sportsaihub.com:8080/User/setPw', params, { withCredentials: true });
    return req.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`server error : ${e.error}`);
  }
}

//회원 정보 조회
const memberInquiry = async (info) => {
  try {
    let params = new URLSearchParams();
    params.append('email', info.email);
    const req = await axios.post('http://sportsaihub.com:8080/User/inquiry', params, { withCredentials: true });
    return req.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`server error : ${e.error}`);
  }
}

//회원 정보 수정
const memberUpdate = async (userInfo) => {
  try {
    const req = await axios.post('http://sportsaihub.com:8080/User/edit', JSON.stringify(userInfo.userInfo), {
      headers: {
        "Content-Type": 'application/json',
      }, withCredentials: true 
    });
    return req.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`server error : ${e.error}`);
  }
}

export default {
  signIn,
  signUp,
  findPass,
  verify,
  changePwd,
  memberInquiry,
  memberUpdate
}
