<template>
  <v-container class="primary" fluid>
    <appointment-progress />

    <div class="wrapper">
      <p class="my-12 text-h3 white--text text-center">Din informasjon</p>
      <v-row>
        <v-col cols="12" md="4" offset-md="4">
          <div class="card">
            <p class="text-h6">
              {{ formatedSelectedDate }} - kl
              {{ $store.state.selectedDateTime.selectedTime }}
            </p>
            <p class="text-h6"></p>
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

          <v-btn color="white" rounded x-large width="200" depressed
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
  computed: {
    formatedSelectedDate() {
      return new Date(
        this.$store.state.selectedDateTime.selectedDate
      ).toLocaleDateString('no-No')
    },
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
    toNextStep() {
      // const personalInfo = ....
      this.$store.commit('setProgress', 70)
      this.$router.push('/avtaleTime/velgKlinikk')
    },
    validate() {
      const isValid = this.$refs.form.validate()
      if (isValid) alert('This is a valid form')
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
