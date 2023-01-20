<script>
import { store } from '../store';
export default{
  name: 'latestArticle',
  components:{
    
  },
  data(){
      return {
         store,
       }
   },
   methods:{
    getImagePath: function (img){
        return new URL(`../assets/images/${img}.jpg`, import.meta.url).href;
    },
   }
}
</script>

<template>
    <div class="container  mb-5 mt-5 d-sm-flex flex-sm-column">
        <div class="row d-flex align-items-center justify-content-center ">
            <div class="col-lg-12  text-center mt-5 mb-5">
                <h1>LATEST ARTICLES</h1>
                <div class="line text-center mb-4 mt-3"></div>
                <p>Together we make all the difference</p>
            </div>
        </div>
        <div class="row  d-flex justfy-content-center ">
            <div class="col-lg-6 ">
                <img src="../assets/images/photo-1444213007800-cff19e1677ac-600x450.jpg" alt="" class="img-fluid mb-4">
                <div class="mt-5 mb-5 ps-3  description">
                    <h5 class="mb-2">Understanding community complexities</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo ducimus vitae eos perspiciatis?</p>
                </div>
            </div>
            <div class="col-lg-6">
                <div  v-for="element in store.articleLatest" class="d-flex mb-5">
                    <img :src="getImagePath(element.image)" class="img-fluid w-25">
                    <div class="ms-2 description">
                        <h5>{{ element.title }}</h5>
                        <p>{{ element.article }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col bg text-center text-light p-3 ">
            <h4>
                VIEW ALL OUR ARTICLES
            </h4>
        </div>     
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as * ;
@use '../styles/partials/variables' as * ;

.bg{
    background-color: $color-view;
}
.line{
    border-bottom: solid 2px $link-color;
    width: 150px;
    margin: auto;
}
.description{
    width: 90%;
    line-height: 2rem;
    h5{
        color: $link-color ;
    }
}

h1{
    color: $link-color
}
</style>