<template>
  <v-container class="primary" fluid>
    <appointment-progress />

    <div class="wrapper">
      <p class="my-12 text-h3 white--text text-center">Velg klinikk</p>
      <v-row>
        <v-col cols="12" md="4" offset-md="4">
          <div class="d-flex flex-column">
            <v-card
              v-for="(klinikk, i) in klinikker"
              :key="i"
              class="mb-5 mx-md-3 rounded-lg"
              flat
              @click.stop="toNextStep(klinikk)"
            >
              <v-card-text class="d-flex justify-space-between">
                <p class="text-h6 text-md-h5 font-weight-medium my-0">
                  {{ klinikk.name }}
                </p>
                <v-chip>omtrent {{ klinikk.time }}</v-chip>
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
  name: 'VelgKlinikk',
  layout: 'bookingAppointment',
  data() {
    return {
      klinikker: [
        {
          name: 'Barcode',
          time: '15 minutter',
          address: 'Dronning Eufemias gate 9',
          gmaps:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.4240070974158!2d10.751904816095783!3d59.90851018186524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416f79355dfcfb%3A0xe5dc2738b0f0c153!2sDr.Dropin%20Barcode!5e0!3m2!1sno!2sno!4v1655454000979!5m2!1sno!2sno',
        },
        {
          name: 'Bislett',
          time: '2 timer',
          address: 'Dalsbergstien 18',
          gmaps:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.5494865647322!2d10.733681515925241!3d59.9230238818705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416f1bd7ce94a5%3A0x80a71e99fd19a1cb!2sDr.Dropin!5e0!3m2!1sno!2sno!4v1655454067770!5m2!1sno!2sno',
        },
        {
          name: 'Bogstadveien',
          time: '2 timer',
          address: 'Bogstadsveien 30',
          gmaps:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.360329774423!2d10.71851311592536!3d59.92616288187158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dd9e228faad%3A0x5101a80cf3c7e658!2sDr.Dropin%20Bogstadveien!5e0!3m2!1sno!2sno!4v1655454206386!5m2!1sno!2sno',
        },
        {
          name: 'Frogner',
          time: '15 minutter',
          address: 'Niels Juels gate 27',
          gmaps:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.9568854400366!2d10.712197615924955!3d59.916262881868086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416d72a4b88541%3A0xddd6c4326c366322!2sDr.Dropin%20Frogner!5e0!3m2!1sno!2sno!4v1655454240773!5m2!1sno!2sno',
        },
      ],
    }
  },
  methods: {
    toNextStep(klinikk) {
      this.$store.commit('setProgress', 70)
      this.$store.commit('setSelectedKlinikk', klinikk)
      this.$router.push('/avtaleTime/velgTid')
    },
  },
}
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
}
</style>
