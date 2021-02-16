<template>
  <section class="home">
    <MeetUpMainPage 
      :meetUpEvents="meetUpEvents"
      :myEvents="myEvents"
    ></MeetUpMainPage>
  </section>
</template>

<script>
import MeetUpMainPage from '@/components/MeetUpMainPage.vue'

export default {
  name: 'Home',
  components: {
    MeetUpMainPage,
  },
  props: {
    myEvents: Array,
    meetUpEvents: Array,
  },
  methods:{
  }
}
</script>
<style  lang="scss">

</style>
