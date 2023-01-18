<script>
export default{
  name: 'AppHeader',
  components:{
    

  }
}
</script>

<template>
    <div class="container">
        <div class="row d-flex justify-content-between align-items-center mt-3">
            <div class="col-5 ">
                <div class="d-flex align-items-center">
                    <img src="../assets/images/avada-charity-logo.png" alt="logo" class="logo">
                </div>
            </div>
            <div class="col-7 d-flex align-items-center">
                <ul>
                    <li>HOME</li>
                    <li>MISSION</li>
                    <li>CAUSES</li>
                    <li>JOURNAL</li>
                </ul>
        
                <button class="ms-4">DONATE</button>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/general' as * ;
@use '../styles/partials/variables' as * ;
.logo{
    width: 200px;
}

button{
    background-color: $link-color;
    color: $main-color;
    padding: .5rem 1rem;
}

.bf{
    display: inline-block;
}
li{
    display: inline-block;
    list-style: none;
    margin-left: 3rem;
}


</style>