<style scoped>
    p{margin:10px 0;overflow: hidden; background: #f0f0f0}
    p a{display: block;float: left;padding: 5px 20px;}
    p a.v-link-active{background: #ccc;}
</style>
<template>
	<div>
		<h1>index</h1>
		<button @click="onclick">跳转到about</button>
		<p style="background:none">路由嵌套</p>
    	<p>
	    	<a href="javascript:;" v-link="{path : '/index/tab1'}">tab1</a>
	    	<a href="javascript:;" v-link="{path : '/index/tab2'}">tab2</a>
	    	<a href="javascript:;" v-link="{path : '/index/tab3'}">tab3</a>
    	</p>
    	<router-view></router-view>
	</div>
</template>

<script>
import Vue from 'vue';
import Resource from 'vue-resource';
Vue.use(Resource);
export default {
    methods : {
    	onclick(){
    		this.$router.go({path:'/about'})
    	}
    }
}
</script>


