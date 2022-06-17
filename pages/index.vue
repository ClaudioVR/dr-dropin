<template>
  <v-container fluid>
    <v-dialog
      v-model="dialog"
      max-width="500px"
      transition="dialog-transition"
      @click:outside="setSessionStorage"
    >
      <v-card>
        <v-card-title class="red white--text d-flex">
          <span class="text-h4">Warning</span>
          <v-spacer></v-spacer>
          <v-btn color="white" text fab small @click="setSessionStorage"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-card-title>
        <v-card-text class="pt-8 text-center">
          <p class="text-h6">
            This is <span class="red--text font-weight-bold">NOT</span> the real
            Dr.Dropin website!
          </p>
          <p class="text-body-1">This is simply a frontend design project!</p>
          <v-divider></v-divider>
          <p class="mt-5">2022 - Claudio Rescigno</p>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-row>
      <v-col class="primary pb-12" cols="12">
        <!-- Home hero section -->
        <v-row>
          <v-col class="" cols="12" md="5" order-md="2">
            <capsule-image />
          </v-col>
          <v-col
            class="d-md-flex flex-column justify-center"
            cols="12"
            md="4"
            offset-md="2"
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
            <bestill-time-button class="mt-5" />
          </v-col>
        </v-row>
      </v-col>

      <v-col class="white my-8" cols="12">
        <!-- Small info button sections -->
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
        <!-- 5 coloured info cards -->
        <v-row>
          <v-col v-for="card in infoCards" :key="card.title" cols="12" md="4">
            <v-card
              min-height="400"
              class="mx-3 rounded-lg"
              flat
              :class="card.color"
            >
              <v-card-title class="white--text">
                {{ card.title }}
              </v-card-title>
              <v-card-text>
                <div class="card-text-inner">
                  <p class="white--text text-body-1">{{ card.description }}</p>
                  <div class="d-flex flex-wrap mt-5">
                    <v-btn
                      v-for="chip in card.chips"
                      :key="chip"
                      class="mb-3 mr-3"
                      outlined
                      dark
                      rounded
                      small
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

      <v-col class="my-10" cols="12" md="8" offset-md="2">
        <!-- Two Info bullet point -->
        <v-row>
          <v-col
            v-for="card in infoBulletPoints"
            :key="card.title"
            cols="12"
            md="6"
          >
            <div class="d-flex align-start">
              <v-avatar class="ml-8" size="100" color="teal lighten-5">
                <v-icon size="80">{{ card.icon }}</v-icon>
              </v-avatar>
              <v-spacer></v-spacer>
              <div>
                <p class="text-h5 font-weight-medium">{{ card.title }}</p>
                <div>
                  <p v-for="point in card.points" :key="point">
                    <v-icon left color="teal lighten-3">mdi-check-circle</v-icon
                    >{{ point }}
                  </p>
                </div>
              </div>
              <v-spacer></v-spacer>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" class="teal lighten-5">
        <!-- Digitale tjenester -->
        <v-row>
          <v-col cols="12" md="5" offset-md="1">
            <inverted-capsule-image
              image-src="https://cdn.sanity.io/images/5te9o5bn/development/36f05b4c60e28c1cf5e46b391f37c92bace8f525-4000x4000.png?q=75&fit=max&auto=format&dpr=0.5"
            />
          </v-col>
          <v-col class="d-md-flex flex-column justify-center" cols="12" md="5">
            <div>
              <p class="text-h4">Digitale helsetjenester</p>
              <p>
                Snakk med en allmennlege, hudlege eller psykolog – fra senga,
                kontoret, eller hvor du måtte befinne deg
              </p>
            </div>
            <v-btn
              class="mt-5 py-5"
              width="200"
              x-large
              rounded
              depressed
              color="white"
              ><v-icon left>mdi-arrow-right-circle</v-icon>Les mer her</v-btn
            >
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" class="">
        <!-- Dette kan vi hjelper deg med -->
        <v-row>
          <v-col cols="12" md="5" order-md="2">
            <capsule-image
              image-src="https://cdn.sanity.io/images/5te9o5bn/development/cae22867a84dff930322166ae66f1c51332b552b-4000x4000.png?q=75&fit=max&auto=format&dpr=0.5"
            />
          </v-col>
          <v-col
            cols="12"
            md="4"
            offset-md="2"
            class="d-md-flex flex-column justify-center"
          >
            <div>
              <p class="text-h4">Dette kan vi hjelpe deg med</p>
              <p>
                Dr.Dropin kan hjelpe deg med et bredt spekter av medisinske
                problemstillinger – de samme problemstillingene en fastlege
                eller legevakt kan hjelpe deg med.
              </p>
            </div>
            <v-btn class="mt-5 py-5" width="200" x-large depressed color="white"
              ><v-icon left>mdi-arrow-right-circle</v-icon>Se alle
              tjenester</v-btn
            >
            <v-btn class="py-5" width="200" x-large depressed color="white"
              ><v-icon left>mdi-arrow-right-circle</v-icon>Ta en
              koronatest</v-btn
            >
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
      dialog: false,
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
      infoBulletPoints: [
        {
          title: 'Alle helsetjenester',
          icon: 'mdi-heart-plus',
          points: [
            'Utredning og behandling',
            'Resepter og sykemelding​',
            'Henvisninger',
          ],
        },
        {
          title: 'Kort ventetid',
          icon: 'mdi-cellphone-check',
          points: [
            'Enkel bestilling',
            'Lange åpningstider',
            'Klinikk eller videosamtale',
          ],
        },
      ],
    }
  },
  mounted() {
    if (sessionStorage.warning) {
      this.dialog = false
    } else {
      this.dialog = true
    }
  },
  methods: {
    setSessionStorage() {
      this.dialog = false
      sessionStorage.warning = true
    },
  },
}
</script>

<style scoped>
.card-text-inner {
  height: 330px;
  display: flex;
  flex-direction: column;
}
</style>
