export default {
        // mutation에서 state로 값을 넘기려면 인자로 state로 받아야 한다.
        SET_NEWS(state, news){
            state.news = news;
        },
        SET_JOBS(state, jobs){
            state.jobs = jobs;
        },
        SET_ASKS(state, asks){
            state.asks = asks;
        },
        SET_USER(state, user){
            state.user = user;
        },
        SET_ITEM(state, item){
            state.item = item;
        },
        SET_LIST(state, list){
            state.list = list;
        }
}