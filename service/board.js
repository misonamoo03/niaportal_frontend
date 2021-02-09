import axios from 'axios';

// 게시글 조회
const getBoardList = async boardNo => {
  try {
    const req = await axios.get(
      'http://sportsaihub.com:8080/board/list',
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

const getBoardInfo = async boardContentNo => {
  try {
    const req = await axios.get(
      'http://sportsaihub.com:8080/board/detail',
      {
        params: {
          boardContentNo: boardContentNo,
        },
        withCredentials: true,
      },
    );
    return req.data;
  } catch (e) {
    console.error(`server error : ${e.error}`);
  }
};

const search = async ( info ) => {
  try {
    const req = await axios.get(
      'http://sportsaihub.com:8080/Common/listSearch',
      {
        params: {
          query: info.query,
          type: info.type
        }
      }
    );
    return req.data;
  } catch (e) {
    console.error(`server error : ${e.error}`);
  }
}

export default {
  getBoardList,
  getBoardInfo,
  search
};
