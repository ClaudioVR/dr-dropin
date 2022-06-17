<template>
  <v-container class="primary" fluid>
    <appointment-progress />

    <div class="wrapper">
      <p class="my-12 text-h3 white--text text-center">Bekreftelse</p>
      <v-row>
        <v-col cols="12" md="4" offset-md="4"> </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'BekreftTime',
  layout: 'bookingAppointment',
  data: () => ({}),
  computed: {
    formatedSelectedDate() {
      return new Date(
        this.$store.state.selectedDateTime.selectedDate
      ).toLocaleDateString('no-No')
    },
  },

  methods: {
    toNextStep() {
      // const personalInfo = ....
      this.$store.commit('setProgress', 70)
      this.$router.push('/avtaleTime/velgKlinikk')
    },
  },
}
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
}
</style>
