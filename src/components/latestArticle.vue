<script>
export default{
  name: 'latestArticle',
  components:{
    
  }
}
</script>

<template>
    <div class="container">
        <div class="row   d-flex align-items-center justify-content-center ">
            <div class="col-lg-12  text-center mt-5 mb-5">
                <h1>LATEST ARTICLES</h1>
                <div class="line text-center mb-2 mt-2"></div>
                <p>Together we make all the difference</p>
            </div>
        </div>
        <div class="row g-4 d-flex justfy-content-center">
            <div class="col-5">
                <img src="../assets/images/photo-1444213007800-cff19e1677ac-600x450.jpg" alt="" class="img-fluid">
                <div class="mt-4 description ">
                    <h5>Understanding community complexities</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo ducimus vitae eos perspiciatis?</p>
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex mb-4">
                    <img src="../assets/images/photo-1444664597500-035db93e2323-177x142.jpg" alt="" class="img-fluid w-25">
                    <div class="ms-2 description">
                        <h5>Understanding community complexities</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo ducimus vitae eos perspiciatis?</p>
                    </div>
                </div>
                <div class="d-flex mb-4">
                    <img src="../assets/images/photo-1447430617419-95715602278e-177x142.jpg" alt=""  class="img-fluid w-25">
                    <div class="ms-2 description">
                        <h5>Understanding community complexities</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo ducimus vitae eos perspiciatis?</p>
                    </div>
                </div>
                <div class="d-flex mb-4">
                    <img src="../assets/images/photo-1460230525622-630fe3294cd7-177x142.jpg" alt=""  class="img-fluid w-25">
                    <div class="ms-2 description">
                        <h5>Understanding community complexities</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo ducimus vitae eos perspiciatis?</p>
                    </div>
                </div>
                <div class="d-flex mb-4">
                    <img src="../assets/images/photo-1460600421604-5e138c208b9c-177x142.jpg" alt=""  class="img-fluid w-25">
                    <div class="ms-2 description">
                        <h5>Understanding community complexities</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo ducimus vitae eos perspiciatis?</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col bg-danger">
            fewf

        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as * ;
@use '../styles/partials/variables' as * ;
.line{
    border-bottom: solid 2px $link-color;
    width: 150px;
    margin: auto;
}
.description{
    line-height: 2rem;
}

h1,
h5{
    color: $link-color ;
}
</style>