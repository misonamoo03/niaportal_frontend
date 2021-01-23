export default function ({ store, redirect, error }) {
  // auth 확인
  if (!store.state.authUser) {
    console.log("------------------------------");
    return redirect('/member/signIn')
  }
}