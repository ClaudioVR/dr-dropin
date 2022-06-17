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
            'https://www.google.com/maps/place/Dr.Dropin+Barcode/@59.9085102,10.7519048,17z/data=!3m1!4b1!4m5!3m4!1s0x46416f79355dfcfb:0xe5dc2738b0f0c153!8m2!3d59.9085102!4d10.7540935',
        },
        {
          name: 'Bislett',
          time: '2 timer',
          address: 'Dalsbergstien 18',
          gmaps:
            'https://www.google.com/maps/place/Dr.Dropin+Bislett/@59.9230238,10.7313855,17z/data=!3m1!4b1!4m5!3m4!1s0x46416f9fdbd3f5d1:0x58190519c481e385!8m2!3d59.9230239!4d10.7358702',
        },
        {
          name: 'Bogstadveien',
          time: '2 timer',
          address: 'Bogstadsveien 30',
          gmaps:
            'https://www.google.com/maps/place/Dr.Dropin+Bogstadveien/@59.9261629,10.7185131,17z/data=!3m1!4b1!4m5!3m4!1s0x46416dd9e228faad:0x5101a80cf3c7e658!8m2!3d59.9261629!4d10.7207018',
        },
        {
          name: 'Frogner',
          time: '15 minutter',
          address: 'Niels Juels gate 27',
          gmaps:
            'https://www.google.com/maps/place/Dr.Dropin+Frogner/@59.9162629,10.7121976,17z/data=!3m1!4b1!4m5!3m4!1s0x46416d72a4b88541:0xddd6c4326c366322!8m2!3d59.9162629!4d10.7143863',
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
