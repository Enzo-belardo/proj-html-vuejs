<script>
export default{
    name:'appButton',
}
</script>
<template>
     <button>OUR MISSION</button>
</template>
<style lang="scss">
@use '../styles/general.scss' as * ;
@use '../styles/partials/variables' as * ;

button{
    border: solid  1px;
    padding: .3rem 1rem;
    margin: 1rem;
    background-color: transparent;
    border-color: $main-color;
    color: $main-color;
}
</style>