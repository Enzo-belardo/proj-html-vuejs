<script>
export default{
  name: 'recentCauses',
  components:{
    
  }
}
</script>

<template>
    <div class="container">
        <div class="row  d-flex align-items-center justify-content-center ">
            <div class="col-lg-12  text-center mt-5 mb-5">
                <h1>RECENT CAUSES</h1>
                <div class="line text-center mb-4 mt-3"></div>
                <p>We run project in over 30 countries in 5 continents</p>
            </div>
        </div>
        <div class="row g-3 d-flex justify-content-center text-light ">
            <div class="col-lg-3  col-sm-12 text-center mb-5 ">
                <img src="../assets/images/avada-charity-fair-trade-featured-400x300.jpg" class="img-fluid w-100" alt="">
            </div>
            <div class="col-lg-3  col-sm-12 mb-sm-2 text-center mb-5">
                <img src="../assets/images/avada-charity-shelter-featured-400x300.jpg" class="img-fluid w-100" alt="">     
            </div>
            <div class="col-lg-3  col-sm-12  mb-sm-2 text-center mb-5">
                <img src="../assets/images/avada-charity-farming-featured-400x300.jpg" class="img-fluid w-100" alt="">                   
            </div>
            <div class="col-lg-3  col-sm-12 mb-sm-2 text-center mb-5">
                <img src="../assets/images/avada-charity-vaccines-featured-400x300.jpg" class="img-fluid w-100" alt="">
            </div>
        </div>
        
    </div>
    <div class="container-fluid">
        <div class="row bg">
            <div class="col text-center text-light p-4">
                <h5>VIEW ALL OUR CAUSES</h5>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as * ;
@use '../styles/partials/variables' as * ;

.bg{
    background-color: $color-view ;
}
.line{
    border-bottom: solid 2px $link-color;
    width: 150px;
    margin: auto;
}


</style>