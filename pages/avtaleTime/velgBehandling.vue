<template>
  <v-container class="primary" fluid>
    <appointment-progress />

    <div class="wrapper">
      <p class="my-12 text-h3 white--text text-center">Velg behandling</p>
      <v-row>
        <v-col cols="12" md="4" offset-md="4">
          <div class="d-flex flex-column">
            <v-card
              v-for="item in behandling"
              :key="item"
              :class="{ grey: item !== 'Klinikk' }"
              class="py-2 mb-5 mx-md-3 rounded-lg"
              flat
              @click.stop="toNextStep(item)"
            >
              <v-card-text>
                <p class="text-h6 text-md-h5 font-weight-medium my-0">
                  {{ item }}
                </p>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'BestillTime',
  layout: 'bookingAppointment',
  data() {
    return {
      behandling: ['Klinikk', 'Videosamtale'],
    }
  },
  methods: {
    toNextStep(item) {
      if (item === 'Klinikk') {
        this.$store.commit('setProgress', 50)
        this.$router.push('/avtaleTime/velgOmrade')
      }
    },
  },
}
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
}
</style>
