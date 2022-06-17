<template>
  <v-container class="primary" fluid>
    <appointment-progress />

    <div class="wrapper">
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
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'VelgTid',
  layout: 'bookingAppointment',
  data() {
    return {}
  },
  computed: {
    date() {
      const todaysDate = new Date()
      return new Date(todaysDate).toLocaleDateString('no-No')
    },
  },
  methods: {
    toNextStep(item) {
      if (item === 'Oslo') alert('Eureka')
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
</style>
