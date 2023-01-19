<script>
export default{
  name: 'firsteArticleMain',
  components:{

  }
}
</script>

<template>
    <div class="row  d-flex ms-0 w-100">
        <div class="col-lg-8 col-md-12  d-sm-flex  bg-light d-flex justify-content-center align-items-center">
            <div class="col-10 m-4 article">
                <h1 class="mb-3">EVERY MOMENT COUNTS</h1>
                <div class="line mb-3"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non, natus magnam reprehenderit libero officia totam ipsa ad repellendus facilis autem </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, necessitatibus veritatis totam molestiae laborum nostrum incidunt esse aliquam. Beatae, magnam ad? Repellat ratione ex ducimus.</p>
                <p class="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facilis qui quibusdam dolorem sint
                </p>
                <button class="bottone  btn-secondary ">
                    OUR MISSION
                </button>
            </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 bg-home d-flex flex-column align-items-center justify-content-center text-light">
            <div class="mb-3 text-center">
                <i class="fa-regular fa-heart"></i>
                <span>2032</span>
                <p>Volunteers worldwide</p>
            </div>
            <div class="mb-3 text-center">
                <i class="fa-sharp fa-solid fa-globe"></i>
                <span>132</span>
                <p>Active projects</p>
            </div>
            <div class="mb-3 text-center">
                <i class="fa-sharp fa-solid fa-dollar-sign"></i>
                <span>3.8M</span>
                <p>Donated</p>
            </div>      
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as * ;
@use '../styles/partials/variables' as * ;

span{
    font-size: 3rem;
    margin-left: .5rem;
}
i{
    font-size: 2rem;
}
.line{
    border-bottom: solid 2px $link-color;
    width: 200px;

}
button,
.bottone{
    background-color: $link-color;
    color: $main-color;
    padding: .2rem 1.5rem;
    border: none;
}

.article{
    line-height: 2rem;
}

.bg-home{
    background-image: url(../assets/images/home-content-bg-1.jpg);
    background-size: cover;
    height: 400px;
}
</style>