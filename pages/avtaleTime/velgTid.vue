<template>
  <v-container class="primary" fluid>
    <appointment-progress />

    <div class="wrapper">
      <div v-if="loading" class="loader mt-12">
        <v-row class="fill-height" align-content="center" justify="center">
          <v-col class="white--text text-body-1 text-center" cols="12">
            Henter data
          </v-col>
          <v-col cols="6">
            <v-progress-linear
              color="teal"
              indeterminate
              rounded
              height="6"
            ></v-progress-linear>
          </v-col>
        </v-row>
      </div>
      <div v-if="!loading" class="time-selectors">
        <p class="my-12 text-h3 white--text text-center">Velg tid</p>
        <v-row>
          <v-col cols="12" md="4" offset-md="4">
            <div class="card">
              <p class="text-h6">{{ date }}</p>
              <p class="my-0">
                Dr.Dropin {{ $store.state.selectedKlinikk.name }}
              </p>
              <p class="my-0">{{ $store.state.selectedKlinikk.address }}</p>
              <div class="mt-3">
                <iframe
                  :src="$store.state.selectedKlinikk.gmaps"
                  width="100%"
                  height="200"
                  frameborder="0"
                  style="border: 0; border-radius: 8px"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                >
                </iframe>
              </div>
            </div>
            <div class="dates mt-8">
              <p class="white--text mb-1">Tidspunktene er i GMT+2</p>
              <v-date-picker
                v-model="selectedDate"
                locale="no-no"
                landscape
                color="teal"
                full-width
              ></v-date-picker>
              <p class="white--text mt-5 mb-1">Morgen</p>
              <div class="d-flex flex-wrap justify-space-between">
                <v-card
                  v-for="time in morgenTimer"
                  :key="time"
                  rounded
                  flat
                  class="pa-3 my-1 time-card"
                  @click.stop="selectTime(time)"
                  ><p class="text-h6 text-center ma-0">{{ time }}</p></v-card
                >
              </div>
              <p class="white--text mt-5 mb-1">Ettermiddag</p>
              <div class="d-flex flex-wrap justify-space-between">
                <v-card
                  v-for="time in ettermiddagTimer"
                  :key="time"
                  rounded
                  flat
                  class="pa-3 my-1 time-card"
                  @click.stop="selectTime(time)"
                  ><p class="text-h6 text-center ma-0">{{ time }}</p></v-card
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'VelgTid',
  layout: 'bookingAppointment',
  data() {
    return {
      loading: false,
      selectedDate: new Date().toISOString().substr(0, 10),
      morgenTimer: [
        '08:00',
        '08:20',
        '08:40',
        '09:00',
        '09:20',
        '09:40',
        '10:00',
        '10:20',
        '10:40',
        '11:00',
      ],
      ettermiddagTimer: [
        '12:00',
        '12:20',
        '12:40',
        '13:00',
        '13:20',
        '13:40',
        '14:00',
        '14:20',
        '14:40',
        '15:00',
        '15:20',
        '15:40',
        '16:00',
      ],
    }
  },
  computed: {
    date() {
      const todaysDate = new Date()
      return new Date(todaysDate).toLocaleDateString('no-No')
    },
  },
  mounted() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 500)
  },
  methods: {
    selectTime(time) {
      const dateTime = {
        selectedDate: this.selectedDate,
        selectedTime: time,
      }
      this.$store.commit('setDateTime', dateTime)
      this.$store.commit('setProgress', 80)
      this.$router.push('/avtaleTime/dinInformasjon')
    },
  },
}
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
}

.card {
  color: white;
  padding: 12px;
  border: 1px solid white;
  border-radius: 5px;
}

.time-card {
  flex-basis: 30%;
  cursor: pointer;
}
</style>
