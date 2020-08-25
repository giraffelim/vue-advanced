import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js';

export default {
    // mutation에 접근하기 위해서는 context라는 변수가 필요하다.
    // Promise
    // 구조분해 문법 적용
      // FETCH_NEWS( { commit } ) {
      //  return fetchNewsList() 
      //     .then(response => {
      //         commit('SET_NEWS', response.data);
      //         return response;
      //     }) // 구조분해 문법 적용
      //     .catch(err => console.log(err));
      // },
    // async 함수는 어떤것을 리턴하든간에 promise로 리턴된다.
      async FETCH_NEWS(context){
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
      },
      async FETCH_JOBS(context){
        try{  
          const response = await fetchJobsList();
          context.commit('SET_JOBS', response.data);
          return response;
        }catch(error){
          console.log(error);
        }
      },
      async FETCH_ASKS(context){
        const response = await fetchAskList();
        context.commit('SET_ASKS', response.data);
        return response;
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
      async FETCH_LIST({commit}, pageName) {
        try {
          const response = await fetchList(pageName);
          commit('SET_LIST', response.data)
          return response;
        } catch(error) {
          console.log(error);
        }
      }
}