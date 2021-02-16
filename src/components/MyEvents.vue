
<template>
  <section >
    <h2>My meet-up' events</h2><hr>
      
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
</script>