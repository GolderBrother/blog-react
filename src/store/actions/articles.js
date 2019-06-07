import https from '../../utils/https';
import { SAVE_ARTICLES_LIST } from '../types.js';

/**
 * action type
 */

export function saveArticlesList(data) {
  return {
    type: SAVE_ARTICLES_LIST,
    payload: data,
  };
}

/**
 * aysnc function
 */

export function getArticlesList({ keyword, likes, state, pageNum, pageSize }) {
  return async dispatch => {
    try {
      const res = await https
      .get('/api/getArticleList', {
        params: {
          keyword,
          likes,
          state,
          pageNum,
          pageSize,
        },
      });
      // console.log('res :', res.data)
      if(!res) return;
      if (res.status === 200 && res.data.code === 0) {
        dispatch(saveArticlesList(res.data));
      } else {
        // dispatch(listFailure(res.data.msg));
      }
    } catch (error) {
      console.log(error);
    }
  };
}
