<template>
  <section>
    <article class="article-search">
      <input type="text" v-model="searchInput" class="input-search" placeholder="Search..." />
    </article>
    <h2 class="h2-title">MEET-UP Events</h2>
    <hr><br>
    <ul class="flex-container" >
        <displayEvent
            v-for="(mpEvent) in filterEvents"
            :key="mpEvent.id"
            :id="mpEvent.id"
            :displaySingleEvent="mpEvent"
            :myEvents="mpEvent"
        ></displayEvent>
      </ul>
  </section>
</template>

<script>
import displayEvent from "@/components/displayEvent.vue";
export default {
  name:"MeetUpMainPage",
  props: {
    meetUpEvents: Array,
    myEvents:Array,
  },
  components:{
    displayEvent,
  },
  data() {
    return {
      searchInput: ''
    }
  },
  computed:{
    filterEvents:function(){
      if(this.searchInput ===""){
        return this.meetUpEvents
      }else{
        return this.meetUpEvents.filter((evt)=>{
          return evt.name.toLowerCase().match(this.searchInput.toLowerCase());
        });
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
  .h2-title{
    font-family: 'Dancing Script', cursive;
    font-size: 2.95vw;
  }
  .article-search{ 
      top: 50%;
      padding: 0.3rem;
      margin: 0 auto;
      background-color: #42b9833d;
      border-radius: 20px;
      box-shadow: 0 10px 40px #42b9833d, 0 0 0 20px #ffffffeb;
      transform: scale(0.6);

      input{
        color: rgb(0, 0, 0);
        font-family: Nunito;
        margin: 0 10px;
        margin: 0;
        border: 0;
        background-color: transparent;
      }
      input[type="text"]{
        width: 100%;
        height: 96px;
        font-size: 60px;
        line-height: 1;
        color: #023b2294;
        border: none;
      }
      input[type="text"]::placeholder{
        color: #1e7e5394;
      }
  }

  .flex-container{
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      padding: 0;
      margin: 0;
      list-style: none;

      .flex-item{
          background: rgb(50, 47, 75);
          padding: 0.3rem;
          width: auto;
          height: 10rem;
          color: white;
          font-weight: bold;
          font-size: 1.3em;
          position: relative;
            .suite{
              z-index: 10;
              background-color: rgb(246, 237, 242);
              font-size: 1.2vw;
              color: rgb(33, 33, 33);
              border-radius: 4px;
              display: flex;
              padding: 1.12rem;
              position: absolute;
              top: 0.8rem;
              left: 0.8rem;
              font-weight: 500;
              
            }
      }
  }
</style>