import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js';

export default {
    // mutation에 접근하기 위해서는 context라는 변수가 필요하다.
    // 구조분해 문법 적용
    FETCH_NEWS( { commit } ) {
       return fetchNewsList() 
          .then(response => {
              commit('SET_NEWS', response.data);
              return response;
          }) // 구조분해 문법 적용
          .catch(err => console.log(err));
      },
      FETCH_JOBS(context){
        return  fetchJobsList()
        .then(response => context.commit('SET_JOBS', response.data))
        .catch(err => console.log(err))
      },
      FETCH_ASKS(context){
        return  fetchAskList()
              .then(response => context.commit('SET_ASKS', response.data))
              .catch(err => console.log(err));
      },
      FETCH_USER( {commit}, name) {
        return  fetchUserInfo(name)
              .then( ({data}) => commit('SET_USER', data))
              .catch(err => console.log(err));
      },
      FETCH_ITEM( {commit}, itemId) {
        return  fetchItemInfo(itemId)
              .then( ({data}) => commit('SET_ITEM', data))
              .catch(err => console.log(err));
      },
      FETCH_LIST({commit}, pageName) {
        return  fetchList(pageName)
          .then(response => {
            commit('SET_LIST', response.data)
            return response;
        })
          .catch(error => console.log(error));
      }
}