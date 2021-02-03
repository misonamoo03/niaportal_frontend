import axios from 'axios';

// 게시글 조회
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
    console.error(`server error : ${e.error}`);
  }
};

// FAQ 등록
const insertBoard = async boardInfo => {
  try {
    const req = await axios.post(
      'http://localhost:8080/board/insert',
      JSON.stringify(boardInfo.boardInfo),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );
    return req.data;
  } catch (e) {
    console.error(`server error : ${e.error}`);
  }
};

const deleteBoard = async boardContentNo => {
  try {
    const params = new URLSearchParams();
    params.append('boardContentNo', boardContentNo);
    const req = await axios.post('http://localhost:8080/board/delete', params, {
      withCredentials: true,
    });
    return req.data;
  } catch (e) {
    console.error(`server error : ${e.error}`);
  }
};

export default {
  getBoardList,
  insertBoard,
  deleteBoard,
};
