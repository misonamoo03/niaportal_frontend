import axios from 'axios';

//로그인
const signIn = async info => {
	try {
		var params = new URLSearchParams();
		params.append('email', info.email);
		params.append('password', info.password);
		const req = await axios.post('http://localhost:8080/User/login', params, {
			withCredentials: true,
		});
		return req.data;
	} catch (e) {
		// eslint-disable-next-line no-console
		console.error(`server error : ${e.error}`);
	}
};
//회원가입
const signUp = async userInfo => {
	try {
		const req = await axios.post(
			'http://localhost:8080/User/register',
			JSON.stringify(userInfo),
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		return req.data;
	} catch (e) {
		// eslint-disable-next-line no-console
		console.error(`server error : ${e.error}`);
	}
};

export default {
	signIn,
	signUp,
};
