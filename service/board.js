import axios from 'axios';

//공통코드 서브코드 조회
const getBoardList = async boardNo => {
	try {
		const req = await axios.get(
			'http://localhost:8080/board/list',
			{
				params: {
					boardNo: boardNo,
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

const insert = async boardInfo => {
	try {
		const req = await axios.post(
			'http://localhost:8080/board/insert',
			JSON.stringify(boardInfo),
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		return req.data;
	} catch (e) {
		console.error(`server error : ${e.error}`);
	}
};
export default {
	getBoardList,
	insert,
};
