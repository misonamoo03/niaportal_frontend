/* eslint-disable no-unused-vars */
export default function({ store, redirect, error }) {
	// auth 확인
	console.log('store : ', store.state.member);
	if (!store.state.member.authUser) {
		console.log('------------------------------');
		return redirect('/member/signIn');
	}
}
