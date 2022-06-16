<template>
  <v-container fluid>
    <v-row>
      <v-col class="primary pb-12" cols="12">
        <v-row>
          <v-col class="" cols="12" md="5" order-md="2">
            <capsule-image />
          </v-col>
          <v-col
            class="d-md-flex flex-column justify-center"
            cols="12"
            md="5"
            offset-md="1"
          >
            <div>
              <p class="text-h4 white--text">Helsehjelp når du trenger det</p>
              <p
                v-for="phrase in bulletPoints"
                :key="phrase"
                class="white--text text-h6 my-1"
              >
                <v-icon dark>mdi-check-circle</v-icon>
                {{ phrase }}
              </p>
            </div>
            <v-btn
              class="mt-5 py-5"
              width="200"
              x-large
              rounded
              depressed
              color="white"
              >Bestill time</v-btn
            >
          </v-col>
        </v-row>
      </v-col>

      <v-col class="white py-8" cols="12">
        <div class="d-flex justify-center align-center">
          <p class="mt-3 mr-16 d-none d-md-block text-h4">
            Finn din nærmeste klinikk
          </p>
          <v-btn depressed rounded x-large color="black" dark>
            <v-icon left>mdi-map-marker</v-icon>
            Finn nærmeste klinikk
          </v-btn>
        </div>
      </v-col>

      <v-col class="white py-8" cols="12" md="10" offset-md="1">
        <v-row>
          <v-col cols="12" v-for="card in infoCards" md="4" :key="card">
            <v-card min-height="400" :class="card.color">
              <v-card-title class="white--text">
                {{ card.title }}
              </v-card-title>
              <v-card-text>
                <div class="card-text-inner">
                  <p class="white--text text-body-1">{{ card.description }}</p>
                  <div class="d-flex flex-wrap">
                    <v-btn
                      v-for="chip in card.chips"
                      :key="chip"
                      class="mb-3 mr-3"
                      outlined
                      dark
                      rounded
                      large
                      >{{ chip }}</v-btn
                    >
                  </div>
                  <div class="mt-auto d-flex">
                    <v-btn color="black" x-large dark rounded
                      >Bestill time</v-btn
                    >
                    <v-spacer></v-spacer>
                    <v-btn x-large text dark>Les mer</v-btn>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      bulletPoints: [
        'Fast og fornuftige priser',
        'Kort ventetid',
        'Klinikk eller video',
      ],
      infoCards: [
        {
          title: 'Legetjenester',
          description:
            'Dr.Dropin kan hjelpe deg med et bredt spekter av medisinske problemstillinger – de samme problemstillingene en fastlege eller legevakt kan hjelpe deg med.',
          chips: ['Psykolog', 'Psykiater', 'Turapi'],
          color: 'primary',
        },
        {
          title: 'Mental helse',
          description:
            'Få hjelp av en av våre dyktige psykologer eller psykiatere. Velg mellom time i klinikk eller over video.',
          chips: ['Allmennlege', 'Resepter', 'Videolege'],
          color: 'orange darken-3',
        },
        {
          title: 'Fysikalske tjenester',
          description:
            'Våre dyktige behandlere tilbyr behandling, oppfølging og veiledning for deg som vil ta vare på kroppen din, uansett utgangspunkt. Du trenger ingen henvisning for å bestille time.',
          chips: ['Kiropraktor', 'Fysioterapeut', 'Personling trener'],
          color: 'blue-grey darken-2',
        },
        {
          title: 'Legespesialister',
          description:
            'Dr.Dropin kan hjelpe deg med et bredt spekter av medisinske problemstillinger. Få hjelp fra våre dyktige legespesialister, med time i klinikk eller over video.',
          chips: ['Gynekolog', 'Hudlege', 'Barnelege', 'Jordmor'],
          color: 'deep-purple darken-2',
        },
        {
          title: 'Aktuelt: Jordmor hos Dr.Dropin',
          description:
            'Vi har nå lansert jordmortjenester hos Dr.Dropin! Vi brenner for at alle skal ha mulighet til en god svangerskapsomsorg. Å bli sett og hørt i en sårbar tid er viktig.',
          chips: ['Jordmor'],
          color: 'teal lighten-2',
        },
      ],
    }
  },
}
</script>

<style scoped>
.card-text-inner {
  height: 320px;
  display: flex;
  flex-direction: column;
}
</style>
