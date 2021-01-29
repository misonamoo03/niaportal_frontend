import Cookie from 'js-cookie'

export default function ({ store, redirect, error }) {
  // auth 확인
  console.log("store : ", store.state);
  let value = Cookie.get('email')
  console.log("cookie : ", value);
  if (!value) {
    console.log("--------------인증페이지 요청----------------");
    return redirect('/member/signIn')
  }
}