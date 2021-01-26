export default function ({ store, redirect, error }) {
  // auth 확인
  console.log("store : ", store.state);
  if (!store.state.member.authUser) {
    console.log("--------------인증페이지 요청----------------");
    return redirect('/member/signIn')
  }
}