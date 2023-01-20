<script>
import jumboText from './jumboText.vue';
import { store } from '../store'

export default{
  name: 'AppHeader',
  components:{
    jumboText, 
  },
  data(){
    return{
        store,
    }
  }

}
</script>

<template>
    <div class="bg">
        <nav class="navbar navbar-expand-lg">
            <div class="container d-flex justify-content-between">
              <div class="logo">
                 <img src="../assets/images/avada-charity-logo.png"  class="logo" alt="logo">        
              </div> 
              <div class="d-flex">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                       <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarScroll">
                        <div class="navbar-nav text-light">
                          <a v-for="element in store.links" :class="{ 'active': element.active }"> {{ element.link }}</a>
                        </div>
                    </div>
                    <div class="d-none d-lg-block">
                        <button class="bottone  btn-secondary  my-1">
                            DONATE
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        
        <div class="container">
            <jumboText/>
        </div>
    </div> 
</template>

<style lang="scss" scoped>
@use '../styles/general' as * ;
@use '../styles/partials/variables' as * ;

.bg{
    background-image: url(../assets/images/home-page-slider.jpg);
    height: 700px;
    background-size: cover;
}
.logo{
    width: 200px;
}
button,
.bottone{
    background-color: $link-color;
    color: $main-color;
    padding: .5rem 1rem;
    margin-left: 2rem;
    border: none;
}

a{
   margin-left: 2rem;
   cursor: pointer;
   text-decoration: none;
   color: $main-color;
   &.active,
    &:hover{
        color: $link-color;
    }
}


</style>