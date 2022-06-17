<template>
  <v-container class="primary" fluid>
    <appointment-progress v-if="!confirmed" />

    <div class="wrapper">
      <p class="my-12 text-h3 white--text text-center">Bekreftelse</p>
      <v-row>
        <v-col v-if="!confirmed && !loading" cols="12" md="4" offset-md="4">
          <p class="white--text">
            Vi har sendt deg en kode via SMS. Bekreft mobilnummeret ditt ved å
            skrive inn kode her:
          </p>
          <v-text-field
            v-model="code"
            type="number"
            background-color="white"
            outlined
            class="centered-input text-h4"
            placeholder="Skriv inn kode her"
          ></v-text-field>
          <v-btn color="white" x-large rounded depressed @click="bekreft"
            ><span class="black--text">Bekreft</span></v-btn
          >
        </v-col>
        <v-col v-if="loading" cols="12" md="4" offset-md="4">
          <v-row class="fill-height" align-content="center" justify="center">
            <v-col class="white--text text-body-1 text-center" cols="12">
              Dette tar bare noen sekunder...
            </v-col>
            <v-col cols="12">
              <v-progress-linear
                color="teal"
                indeterminate
                rounded
                height="6"
              ></v-progress-linear>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-if="confirmed" cols="12" md="4" offset-md="4">
          <p class="text-h5 white--text">Timen din er bekreftet!</p>
          <appointment-info-card />
          <v-btn nuxt to="/" x-large depressed color="white" block class="mt-8"
            ><span class="black--text">Lukk</span></v-btn
          >
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'BekreftTime',
  layout: 'bookingAppointment',
  data: () => ({
    code: 1373,
    confirmed: false,
    loading: false,
  }),
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
    bekreft() {
      this.$store.commit('setProgress', 100)
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.confirmed = true
      }, 2500)
    },
  },
}
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
}
.centered-input >>> input {
  text-align: center;
}
</style>
