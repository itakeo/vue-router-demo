<style scoped>
    header{background: #fff;box-shadow: 0px 0px 4px #999;height: 50px; line-height: 50px;overflow: hidden;}
    header a{display: block; float: left;margin-left: 12px;padding: 0 20px;font-size: 14px;}
    .v-link-active{background: #ddd;color: red}
</style>
<template>
    <header>
        <a href="javascript:;" v-link="{path : '/index'}">index</a>  
        <a href="javascript:;" v-link="{path : '/news'}">news</a>  
        <a href="javascript:;" v-link="{path : '/about'}">about</a>  
    </header>
</template>

<script>
export default {
    
}
</script>


