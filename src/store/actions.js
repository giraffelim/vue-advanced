import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js';

export default {
    // mutation에 접근하기 위해서는 context라는 변수가 필요하다.
    // 구조분해 문법 적용
    FETCH_NEWS( { commit } ) {
        fetchNewsList() 
          .then(response => {
              commit('SET_NEWS', response.data);
              return response;
          }) // 구조분해 문법 적용
          .catch(err => console.log(err));
      },
      FETCH_JOBS(context){
        fetchJobsList()
        .then(response => context.commit('SET_JOBS', response.data))
        .catch(err => console.log(err))
      },
      FETCH_ASKS(context){
        fetchAskList()
              .then(response => context.commit('SET_ASKS', response.data))
              .catch(err => console.log(err));
      },
      FETCH_USER( {commit}, name) {
        fetchUserInfo(name)
              .then( ({data}) => commit('SET_USER', data))
              .catch(err => console.log(err));
      },
      FETCH_ITEM( {commit}, itemId) {
        fetchItemInfo(itemId)
              .then( ({data}) => commit('SET_ITEM', data))
              .catch(err => console.log(err));
      },
      FETCH_LIST({commit}, pageName) {
        fetchList(pageName)
          .then(({data}) => commit('SET_LIST', data))
          .catch(error => console.log(error));
      }
}