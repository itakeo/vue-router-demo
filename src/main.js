import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import App from './app.vue';
import index from './component/index.vue';
	import tab1 from './component/indexComponent/tab1.vue';
	import tab2 from './component/indexComponent/tab2.vue';
	import tab3 from './component/indexComponent/tab3.vue';
import news from './component/news.vue';
import about from './component/about.vue';

var router = new Router();
router.map({
    '/index':{
        component:index,
        subRoutes : {
        	'/tab1' : {
        		component : tab1
        	},
        	'/tab2' : {
        		component : tab2
        	},
        	'/tab3' : {
        		component : tab3
        	}
        }
    },
    '/news': {
        component: news
    },
    '/about': {
        component: about
    },
});
router.redirect({
    '*':"/index",
    '/index' : '/index/tab1'
});
router.start(App, '#app');