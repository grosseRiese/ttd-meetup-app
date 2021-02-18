<template>
  <section >
    <header id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/myEvents">Account</router-link>
    </header>
    <main>
      <hr>
      <router-view 
        :meetUpEvents="meetUpEvents" 
        :myEvents="myEvents"
      />
    </main>
  </section>
</template>

<script>
import meetUpEvents from "@/assets/meetUpEvents.json";
export default {
  components: {
  },
  created(){ 
    this.setLocalStorage();
  },
  data() {
    return {
      meetUpEvents:meetUpEvents.events,
      myEvents:[], //JSON.parse(window.localStorage.getItem("Events")).events,
    };
  },
  methods:{
    setLocalStorage() {
      this.myEvents = JSON.parse(window.localStorage.getItem("Events"));
        if (this.myEvents === null|| typeof this.myEvents == 'undefined'){
          let events = {
            events: [],
          };
          window.localStorage.setItem("Events", JSON.stringify(events));
        }else{
          this.myEvents=JSON.parse(window.localStorage.getItem("Events")).events ;
              this.myEvents = Array.from(new Set(this.myEvents.map(JSON.stringify))).map(JSON.parse);
        }
    },
    /*isEmpty() {
      (this.myEvents == null || typeof myEvents == 'undefined') ? 
            JSON.parse(window.localStorage.getItem("Events")).events : [] ;
    },*/
  },
  /* beforeMount() {
      this.meetUpEvents = meetUpEvents.events;
  }*/

}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
