<template>
  <section >
    <h2 class="h2-title">My meet-up' EVENTS</h2><hr>
        <MyEventsItems
          v-for="item in eventItems"
            :key="item.id"
            :mpEvent="item"
        ></MyEventsItems>
  </section>
</template>

<script>
  import MyEventsItems from "@/components/MyEventsItems.vue";
export default {
  components:{
    MyEventsItems,
  },
  name:'MyEvents',
  props:{
    myEvents: Array,
  },
  data() {
    return {
      eventItems: [],
    };
  },
  methods:{
  },
    beforeMount() {
    this.eventItems = this.myEvents;
  },
}
/**
 * 
 * let datum = new Date();
let 
 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let htmlCopyFootYear = document.querySelector('#footer-date-year');
let htmlCopyFootMonth = document.querySelector('#footer-month');
let htmlCopyFootDay = document.querySelector('#footer-day');

htmlCopyFootYear.innerHTML = datum.getFullYear();
htmlCopyFootMonth.innerHTML = months[datum.getMonth()];//months[datum.getMonth()].substring(0,3) =='Feb' //months[datum.getMonth()].substring(0,3).toLowerCase() =='feb'
htmlCopyFootDay.innerHTML = datum.getUTCDate();
 */
</script>
