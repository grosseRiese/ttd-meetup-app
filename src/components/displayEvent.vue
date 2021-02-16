<template>
    <li class="card tooltip"  :id="displaySingleEvent.id">
      <div class="flex-item"> <span class="suite">{{displaySingleEvent.suite}}</span></div>
      <section class="container">
        <small>
          <p>  {{ displaySingleEvent.date }}, {{ displaySingleEvent.from }}, {{ displaySingleEvent.to }}</p>
        </small>
        <h2><b>{{ displaySingleEvent.name }}</b></h2> 
        <p><small>Hosted by:</small> <b>  {{displaySingleEvent.HostedBy}} </b></p> 
        <p class="attendees">{{displaySingleEvent.Attendees}}</p>
      </section>
      <button 
          class="btn" 
          @click="emitTheEvent()" 
          type="submit" 
          :disabled="btnClicked">
        {{btnText}}
      </button>
      <span @click="goTo" class="tooltiptext">click here for info</span>
    </li>
</template>

<script>
export default {
  name: "displayEvent",
  props: {
    displaySingleEvent: Object,
  },
  data: () => ({
        btnText: "Request to join",
        btnClicked: false,
        Events:JSON.parse(window.localStorage.getItem("Events"))
  }),
  methods:{
    goTo(){
      this.$router.push('/eventInfo/' + this.displaySingleEvent.id);
    },
    emitTheEvent(){
      this.updatLcSt(this.displaySingleEvent);
      this.btnClicked = true;
      this.btnText="Accepted";
      this.$nextTick(() => {
      let disabledBtn = document.querySelectorAll(".btn:disabled");
        disabledBtn.forEach(
          (btn) => (btn.style.opacity = 0.3,btn.style.cursor = "none")
        );
      });
    },
    updatLcSt(displaySingleEvent){
      this.Events.events.push(displaySingleEvent);
      window.localStorage.setItem("Events",JSON.stringify(this.Events));
      location.reload();
      //if you logged In route To... we suppose we're logged in...
      //this.$router.push({ path: `/myEvents/` });
    },
  },
  computed:{
  }
}
</script>

<style lang="scss" scoped>
  .card {
  box-shadow: 0 3px 32px 0 rgba(0, 0, 0,1);
  transition: 0.3s;
  width:20%;
  width: auto;//100%;
  margin-bottom: 3rem;
  position: relative;

      &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        

        .flex-item{
          background-color:rgba(87, 24, 24, 0.67);
        }

        .tooltiptext {
          visibility: visible;
          cursor: pointer;
        }
        .suite{
          background-color: rgba(1, 1, 1, 0.589);
          color:rgb(246, 237, 242);
        }
    }
    .container {
      padding: 2rem 6rem;
      position: relative;
      height: 15rem;
      .attendees{
        position: absolute;
        bottom:0.21rem;
        left:1.5rem;
        border-radius:100%;
        background-color:rgb(251, 210, 210);
        padding:0.5rem;
      }
    }
    .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 10px;
      z-index: 1;
    }

    .btn {
          background-color: #2A265F;
          border: 0;
          border-radius: 50px;
          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
          color: #fff;
          font-size: 16px;
          padding: 12px 25px;
          position: absolute;
          bottom:5rem;
          right: 30px;
          letter-spacing: 1px;
          cursor: pointer;

          &:hover{
            background-color:rgba(85, 21, 21, 0.834);
          }
        }
}

</style>