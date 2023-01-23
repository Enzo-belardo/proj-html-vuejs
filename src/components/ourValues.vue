<script>

export default{
  name: 'ourValues',

  components:{
    
  }
}
</script>

<template>
    <div class="container pt-5 pb-5">
        <div class="row  d-flex align-items-center justify-content-center ">
            <div class="col-lg-12  text-light text-center mt-5 mb-5">
                <h1>OUR VALUES</h1>
                <div class="line text-center mb-4 mt-3"></div>
                <p>Think Big Act Bigger</p>
            </div>
        </div>
        <div class="row  d-flex justify-content-center text-light  ">
            <div class="col-lg-3 col-md-6 col-sm-10 text-center mb-5">
                <i class="fa-solid fa-droplet mb-1"></i>
                <h5>Clean Water</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button class="btn-secondary ">
                    LERAN MORE
                </button>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-10  text-center mb-5">
                <i class="fa-sharp fa-solid fa-stethoscope mb-1"></i>
                <h5>Vaccinations</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button class=" btn-secondary ">
                    LEARN MORE
                </button>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-10  text-center mb-5">
                <i class="fa-solid fa-graduation-cap mb-1"></i>
                <h5>Education</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing Lorem, </p>
                <button class="btn-secondary ">
                    LEARN MORE
                </button>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-10  text-center mb-5">
                <i class="fa-solid fa-wheat-awn mb-1"></i>
                <h5>Farming</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                <button class="btn-secondary ">
                    LEARN MORE
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as * ;
@use '../styles/partials/variables' as * ;

h5{
    margin-bottom: 1rem;
}

.line{
    border-bottom: solid 2px $link-color;
    width: 150px;
    margin: auto;
}

i{
    font-size: 50px;
    color:$link-color;
}
button{
    background-color: $link-color;
    color: $main-color;
    padding: .4rem 1.5rem;
    border: none;
    margin-top: 2rem;
}

</style>