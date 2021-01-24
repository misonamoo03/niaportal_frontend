import axios from 'axios'

//공통코드 서브코드 조회
const getCodeList = async (prtCode, codeType) => {
  try {
    const req = await axios.get('http://localhost:8080/Common/listCommonCode', {
      params: {
        prtCode: prtCode,
        codeType: codeType
      }
    }, { withCredentials: true });
    return req.data



  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`server error : ${e.error}`)
  }
}

export default {
  getCodeList
}
