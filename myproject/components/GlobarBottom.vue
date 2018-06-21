<template>
  <div id="bottom">
  	<nuxt-link :to="'/test2'">免责申明</nuxt-link>
    <nuxt-link :to="'/test2'">关于我们</nuxt-link>
    <nuxt-link :to="'/test2'">备案号:xxxx</nuxt-link>
  </div>
</template>


<script>
  export default {
  	name:'CmdBottom',
    
  }
</script>


<style type="text/css">
#bottom
{
  background: #545c64;
  height: 80px;
  line-height: 80px;
  margin-top: 80px;
  text-align: center;
}

#bottom a{
  color: #fff;
  margin-left: 10px;
  text-decoration: none;
}
</style>