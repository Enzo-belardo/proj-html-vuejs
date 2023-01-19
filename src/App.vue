<script>
import appHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
import appFooter from './components/appFooter.vue';

export default{
  name: 'AppVue',
  components:{
    appHeader,
    appMain,
    appFooter,

  }
}

</script>

<template>
  <header>
    <appHeader/>
  </header>
  <main>
    <appMain/>
  </main>
  <footer>
    <appFooter/>
  </footer>
</template>

<style lang="scss">
@use './styles/general' as * ;
@use './styles/partials/variables' as * ;
@use "bootstrap/scss/bootstrap" as * ;

</style>
