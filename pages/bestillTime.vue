<template>
  <v-container class="primary" fluid>
    <appointment-progress />

    <div class="wrapper">
      <p class="my-12 text-h3 white--text text-center">Velg time</p>
      <v-row>
        <v-col cols="12" md="10" offset-md="1" class="">
          <div class="d-flex flex-column flex-md-row justify-center">
            <v-card
              v-for="(card, index) in cards"
              :key="card.title"
              class="mb-5 mx-md-3 rounded-lg"
              :class="{
                'card-flex-basis': $vuetify.breakpoint.mdAndUp,
                grey: index !== 2,
              }"
              @click.stop="toNextStep(card.title)"
            >
              <v-card-text class="pt-md-8">
                <v-row>
                  <v-col cols="3" md="12" class="text-md-center">
                    <v-avatar size="100" color="orange lighten-5">
                      <v-icon size="60" color="orange darken-1">{{
                        card.icon
                      }}</v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col class="text-md-center">
                    <p class="text-h6 text-md-h5 font-weight-medium my-0">
                      {{ card.title }}
                    </p>
                    <p class="my-0 mt-md-3 text-body-1">
                      {{ card.description }}
                    </p>
                  </v-col>
                </v-row>
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
      cards: [
        {
          icon: 'mdi-face-woman',
          title: 'Spesialister',
          description: 'Møt hudelege, barnelege, gynekolog og jordmor',
        },
        {
          icon: 'mdi-bacteria',
          title: 'Covid',
          description:
            'Koronatest, Fit to Fly attest, Proof of Recover eller råd',
        },
        {
          icon: 'mdi-hospital-box',
          title: 'Allmennlege',
          description: 'Møt allmennlege i klinkkk eller på videosamtale',
        },
        {
          icon: 'mdi-human-handsup',
          title: 'Fysikalsk',
          description:
            'Møt fysoterapeut eller kiropraktor i klinikk eller via videosamtale',
        },
        {
          icon: 'mdi-head-heart',
          title: 'Psykik helse',
          description:
            'Få den hjelpen du trenger via videosamtale med en psykolog',
        },
      ],
    }
  },
  mounted() {
    this.$store.commit('setProgress', 10)
  },
  methods: {
    toNextStep(title) {
      if (title === 'Allmennlege') {
        this.$store.commit('setProgress', 20)
        this.$router.push('/velgBehandling')
      }
    },
  },
}
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
}
.card-flex-basis {
  flex-basis: 200px;
}
</style>
