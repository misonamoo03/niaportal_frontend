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
          type: info.type,
          currentPage: info.currentPage
        }
      }
    );
    return req.data;
  } catch (e) {
    console.error(`server error : ${e.error}`);
  }
};

const createFaq = async (info) => {
  try {
    const req = await axios.post('http://sportsaihub.com:8080/board/insert', JSON.stringify(info), {
      headers: {
        "Content-Type": 'application/json',
      }, withCredentials: true 
    });
    return req;

  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`server error : ${e.error}`);
  }
};

const showBoardDetail = async (info) => {
  try {
    const req = await axios.get(
      'http://sportsaihub.com:8080/board/detail',
      {
        params: {
          boardContentNo: info.boardContentNo
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
  search,
  createFaq,
  showBoardDetail
};