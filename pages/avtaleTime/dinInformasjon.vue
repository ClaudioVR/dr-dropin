<template>
  <v-container class="primary" fluid>
    <appointment-progress />

    <div class="wrapper">
      <p class="my-12 text-h3 white--text text-center">Din informasjon</p>
      <v-row>
        <v-col cols="12" md="4" offset-md="4">
          <appointment-info-card />
          <v-form ref="form" v-model="valid" class="mt-8" lazy-validation>
            <p class="white--text mb-1">Navn *</p>
            <v-text-field
              v-model="name"
              outlined
              :rules="nameRules"
              required
              background-color="white"
            ></v-text-field>

            <p class="white--text mb-1">Fødselsdato *</p>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  readonly
                  background-color="white"
                  outlined
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                :active-picker.sync="activePicker"
                :max="
                  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
                "
                min="1950-01-01"
                @change="save"
              ></v-date-picker>
            </v-menu>

            <p class="white--text mb-1">Mobilnummer *</p>
            <v-text-field
              v-model="number"
              outlined
              :rules="numberRules"
              required
              background-color="white"
            ></v-text-field>
            <p class="mt-n6 text-caption white--text">
              For å bekrefte din bestilling må vi validere ditt mobilnummer. Du
              får en kode på SMS som du må skrive inn i neste steg for å
              fullføre bestillingen
            </p>

            <p class="white--text mb-1">Hva gjelder det? *</p>
            <v-textarea
              v-model="description"
              outlined
              name="input-7-4"
              background-color="white"
            ></v-textarea>
          </v-form>

          <v-btn
            color="white"
            rounded
            x-large
            width="200"
            depressed
            @click="validate"
            ><span class="black--text">Neste</span></v-btn
          >
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'DinInformasjon',
  layout: 'bookingAppointment',
  data: () => ({
    valid: true,
    name: 'Ola Mortensen',
    nameRules: [(v) => !!v || 'Navn må fylles inn'],
    number: '88399302',
    numberRules: [(v) => !!v || 'Mobilnummer må fylles inn'],
    activePicker: null,
    date: '1984-02-14',
    menu: false,
    description: 'Vondt i magen',
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
    toNextStep() {
      // const personalInfo = ....
      this.$store.commit('setProgress', 90)
      this.$router.push('/avtaleTime/bekreftTime')
    },
    validate() {
      const isValid = this.$refs.form.validate()
      if (isValid) this.toNextStep()
    },
    save(date) {
      this.$refs.menu.save(date)
    },
  },
}
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
}

.time-card {
  flex-basis: 30%;
  cursor: pointer;
}
</style>
