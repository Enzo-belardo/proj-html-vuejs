<script>
import firsteArticleMain from './firstArticleMain.vue';
import ourValues from './ourValues.vue';
import recentCauses from './recentCauses.vue';
import changeLife from './changeLife.vue'
import latestArticle from './latestArticle.vue'

export default{
  name: 'AppMain',
  components:{
    firsteArticleMain,
    ourValues,
    recentCauses,
    changeLife,
    latestArticle

  }
}
</script>

<template>
  <div class="bg">
    <firsteArticleMain/>
  </div>

  <div class="bg-2">
    <ourValues/>
  </div>

  <div class="bg-3">
    <recentCauses/>
  </div>

  <div class="bg-4">
    <latestArticle/>
  </div>

  <div class="bg-5">
    <div class="container">
      <changeLife/>
    </div>
  </div>
</template>

<style lang="scss" >
@use '../styles/general' as * ;
@use '../styles/partials/variables' as * ;


.bg-2{
  background-image: url(../assets/images/home-content-bg-2.jpg);
  background-position: center;
  background-size: cover;
}
.bg-3{
  background-color: $main-color;
}
.bg-5{
  background-image: url(../assets/images/home-footer.jpg);
  background-position: center;
  background-size: cover;
  
}
</style>