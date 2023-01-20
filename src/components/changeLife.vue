<script>
export default{
  name: 'changeLife',
  components:{
    
  }
}
</script>

<template>
    <div class="row  d-flex justify-content-center align-items-center">
        <div class="col-lg-7 col-md-7 col-sm-10 col-xs-10 text-light text-center box">
            <h1>
                CHANGE A LIFE TODAY
            </h1>
            <div class="line mb-4 mt-3"></div>
            <p>as long as poverty, injustice & inequality persist, none of us can truly rest. it doesn't take much to change a life, Get in touch today and start making the difference.</p>
            <div class="mt-3">
                <button>VOLUNTEER</button>
                <button>DONATE NOW</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general' as * ;
@use '../styles/partials/variables' as * ;

.box{
    margin: 10rem 0;
}
.line{
    border-bottom: solid 2px $link-color;
    width: 200px;
    margin: auto;
}
button{
    border: solid  1px;
    padding: .3rem 1rem;
    margin: 1rem;
    background-color: transparent;
    border-color: $main-color;
    color: $main-color;
}

</style>