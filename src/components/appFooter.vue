<script>
export default{
  name: 'AppFooter',
  components:{
    

  }
}
</script>

<template>
  <div class="bg-light">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center  text-center mt-5 ">
        <div class="col-lg-8 mb-5">
          <img src="../assets/images/avada-charity-sticky-header-logo.png" alt="">
        </div>

        <div class="col-8 d-flex justify-content-center text-center mb-5 ">
          <p> copyright 2012 -2020 AVADA THEME BT THEME FUSION | ALL RIGHTS RESERVED | POWERED BY WORDPRESS</p>
        </div>
        <div class="col-8">
          <div class="icons d-flex justify-content-center  text-center">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>


        <div class="d-flex justify-content-end">
          <div class="pop d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-angle-up"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as * ;
@use '../styles/partials/variables' as * ;
i{
  margin-left: 1rem;
  color:#fcd66c;
  font-size: 2rem;
}
.pop{
  width: 70px;
  height: 50px;
  background-color: $pop-footer;
  border-radius: .3rem .3rem 0 0;
}
.pop>i{
  margin: 0;
  color: $main-color ;
}

</style>