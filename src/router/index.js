import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
// import createListView from '../views/CreateListView.js';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // url hash value 제거
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            // path : url 주소
            path: '/news',
            name: 'news',
            // component : url 주소로 갔을 때 표시될 컴포넌트
            // component: createListView('NewsView'),
            component: NewsView,
            // to 이동할 URL의 라우팅 정보
            // from 현재 위치의 라우팅 정보
            // next 호출을 해야 해당 URL로 이동 가능
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                      next();
                    })
                    .catch(error => {
                      console.log(error);
                    });
                // console.log('to', to);
            },
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: createListView('JobsView'),
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                      next();
                    })
                    .catch(error => {
                      console.log(error);
                    });
                // console.log('to', to);
            },
        },
        {
            path: '/ask',
            name: 'ask',
            // component: createListView('AskView'),
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                      next();
                    })
                    .catch(error => {
                      console.log(error);
                    });
                // console.log('to', to);
            },
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:id',
            component: ItemView
        }
    ]
});