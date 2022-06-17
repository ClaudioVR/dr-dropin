<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <div class="d-flex align-center">
        <v-btn text color="white" @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
          <span class="d-none d-md-block">Tilbake</span>
        </v-btn>
        <v-progress-linear
          v-model="progress"
          :color="progressColor"
          height="15"
          class="rounded-lg mx-12"
        ></v-progress-linear>
        <v-btn text color="white" @click="$router.push('/')">
          <v-icon>mdi-close</v-icon>
          <span class="d-none d-md-block">Lukk</span>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AppointmentProgress',
  computed: {
    progress() {
      return this.$store.state.appointmentProgress
    },
    progressColor() {
      switch (this.progress) {
        case 10:
        case 20:
          return 'red'
        case 30:
        case 40:
          return 'amber'
        case 50:
        case 60:
          return 'yellow'
        case 70:
        case 80:
        case 90:
          return 'green'
        default:
          return 'red'
      }
    },
  },
}
</script>

<style></style>
