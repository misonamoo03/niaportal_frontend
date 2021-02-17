import axios from 'axios';

//공통코드 서브코드 조회
const getSportsList = async code => {
	try {
		const req = await axios.get(
			'http://sportsaihub.com:8080/Sports/list',
			{
				params: {
					sportsTypeCode: code,
				},
			},
			{ withCredentials: true },
		);
		return req.data;
	} catch (e) {
		// eslint-disable-next-line no-console
		console.error(`server error : ${e.error}`);
	}
};

export default {
	getSportsList,
};
