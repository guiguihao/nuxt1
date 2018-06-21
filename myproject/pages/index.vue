<template>
  <section class="container">
 <!--    <div>
      <app-button-a  icon = 'icon-zhinengsuo' name = 'my device'></app-button-a>
      <app-button-b  icon = 'icon-kongtiao1' name = '空调'></app-button-b>
    </div> -->
    <nuxt-link :to="'/test2'">0222</nuxt-link>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppButtonA from '~/components/AppButtonA.vue'
import AppButtonB from '~/components/AppButtonB.vue'
export default {
  components: {
    AppLogo,
    AppButtonA,
    AppButtonB,
  },
  data:()=>{
    return {
      postFontSize:10,

    }
  },
  methods:{
      
  },
 
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
