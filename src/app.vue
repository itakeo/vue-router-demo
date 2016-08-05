<style>
	*{margin:0;padding:0;box-sizing:border-box}body{font-family:Helvetica,sans-serif;font-size:13px;font-weight:normal}a{ color:#111; text-decoration:none;cursor:pointer;}a:hover{ color:#222; text-decoration:none!important}.wrap{padding: 12px;}
</style>
<template>
	<div>
		<navtemp></navtemp>
		<div class="wrap">
	  		<router-view></router-view>
	  	</div>
	</div>
</template>

<script>
import navtemp from './component/nav.vue';
export default {
    components : {
    	navtemp
    }
}
</script>


