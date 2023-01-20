<script>
export default{
  name: 'jumboText',
  components:{
    
  }
}
</script>

<template>
    <div class="row  d-flex justify-content-center align-items-center">
        <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 text-light text-center">
            <h1>
                MAKE A DIFFERENCE
            </h1>
            <p class="mb-2 mb-1">as long as poverty, injustice & inequality persist, none of us can truly rest</p>
            <div>
                <button class="white">OUR MISSION</button>
                <button class="yellow">DONATE NOW</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general' as * ;
@use '../styles/partials/variables' as * ;
.row{
    height: 600px;
}

button{
    border: solid  1px;
    padding: .3rem 1rem;
    margin: 1rem;
    background-color: transparent;
}

.white{
    border-color: $main-color;
    color: $main-color;
}
.yellow{
    border-color: $link-color;
    color: $link-color;
}
</style>