<script>
export default{
  name: 'firsteArticleMain',
  components:{

  },
  data() {
    return {
      countVolunteers: 0,
      countProjects: 0,
      countDonated:0
      
    }
  },
    methods: {
        timerVolunteers () {
            if (this.countVolunteers < 2032) {
                setTimeout(() => {
                    this.countVolunteers += 1
                    this.timerVolunteers()
                }, 5)
            }
        },
        timerProjects () {
            if (this.countProjects < 132) {
                setTimeout(() => {
                    this.countProjects += 1
                    this.timerProjects()
                }, 50)
            }
        },
          countDonateds () {
             if (this.countDonated < 3) {
                 setTimeout(() => {
                     this.countDonated += 1
                     this.countDonateds()
                 }, 1500)
             }
         }
    },
    created () {
        this.timerVolunteers()
        this.timerProjects()
        this.countDonateds()
    }  
  }

</script>

<template>
    <div class="row  d-flex ms-0 w-100">
        <div class="col-lg-8 col-md-12  d-sm-flex  bg-light d-flex justify-content-center align-items-center">
            <div class="col-10 m-4 article">
                <h1 class="mb-3">EVERY MOMENT COUNTS</h1>
                <div class="line mb-4 mb-3"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non, natus magnam reprehenderit libero officia totam ipsa ad repellendus facilis autem </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, necessitatibus veritatis totam molestiae laborum nostrum incidunt esse aliquam. Beatae, magnam ad? Repellat ratione ex ducimus.</p>
                <p class="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facilis qui quibusdam dolorem sint
                </p>
                <button class="btn-secondary ">
                    OUR MISSION
                </button>
            </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 bg-home d-flex flex-column align-items-center justify-content-center text-light">
            <div class="mb-3 text-center">
                <i class="fa-regular fa-heart"></i>
                <span>{{ countVolunteers }}</span>
                <p>Volunteers worldwide</p>
            </div>
            <div class="mb-3 text-center">
                <i class="fa-sharp fa-solid fa-globe"></i>
                <span>{{ countProjects }}</span>
                <p>Active projects</p>
            </div>
            <div class="mb-3 text-center">
                <i class="fa-sharp fa-solid fa-dollar-sign"></i>
                <span>{{ countDonated }},8</span>
                <p>Donated</p>
            </div>      
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as * ;
@use '../styles/partials/variables' as * ;
.bg-home{
    background-image: url(../assets/images/home-content-bg-1.jpg);
    background-size: cover;
    height: 400px;
    span{
        font-size: 3rem;
        margin-left: .5rem;
    }
    i{
        font-size: 2rem;
    }
}

.line{
    border-bottom: solid 2px $link-color;
    width: 200px;

}
button{
    background-color: $link-color;
    color: $main-color;
    padding: .2rem 1.5rem;
    border: none;
}

.article{
    line-height: 2rem;
}

</style>