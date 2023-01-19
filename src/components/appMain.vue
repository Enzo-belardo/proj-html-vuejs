<script>
import firsteArticleMain from './firstArticleMain.vue';
import ourValues from './ourValues.vue';
export default{
  name: 'AppMain',
  components:{
    firsteArticleMain,
    ourValues
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
</template>

<style lang="scss" >
@use '../styles/general' as * ;
@use '../styles/partials/variables' as * ;
.bg{
  height: 400px;
}

.bg-2{
  background-image: url(../assets/images/home-content-bg-2.jpg);
  
  background-size: cover;
}

</style>