<template>
  <section>
    <h2>MEET-UP Events</h2>
    <hr><br>
    <ul class="flex-container">
          <displayEvent
            v-for="(mpEvent) in meetUpEvents"
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
    myEvents:Array
  },
  components:{
    displayEvent,
  },
  methods:{
  
  }
}
</script>

<style lang="scss" >
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