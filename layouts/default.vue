<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      class="primary darken-2"
      right
      fixed
      app
      width="70%"
      dark
    >
      <div class="py-1 d-flex justify-end">
        <v-btn dark fab text @click.stop="drawer = !drawer"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </div>
      <v-list class="pt-0 primary darken-3">
        <v-list-item
          v-for="(item, i) in drawerItems"
          :key="i"
          :to="item.to"
          router
          class="d-block"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
          <v-divider class="white"></v-divider>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dark class="primary" flat hide-on-scroll app>
      <NuxtLink to="/">
        <div class="d-flex">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <NuxtLogo class="ml-1" />
        </div>
      </NuxtLink>
      <v-spacer />
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer" />
      <v-tabs class="d-none d-md-inline-block" centered hide-slider>
        <v-tabs-slider color="white"></v-tabs-slider>
        <v-tab v-for="item in tabItems" :key="item">
          <span class="text-h6 custom-transform-class text-none">{{
            item
          }}</span>
        </v-tab>
      </v-tabs>
      <bestill-time-button class="d-none d-md-block" />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer class="primary white--text" absolute app>
      <v-container grid-list-xs>
        <v-row>
          <v-col cols="12" md="5" offset-md="1">
            <div class="mb-8">
              <NuxtLink to="/">
                <div class="d-flex">
                  <p class="my-0">{{ title }}</p>
                  <NuxtLogo class="ml-1" />
                </div>
              </NuxtLink>
            </div>
            <div class="mt-8">
              <p class="text-h4">Alle helsetjenester</p>
              <p class="text-h4">Time på dagen</p>
              <p class="text-h4">Fast pris</p>
              <bestill-time-button class="mt-8" />
            </div>
          </v-col>
          <v-col cols="12" md="5" offset-md="1">
            <v-btn class="mr-3" color="#00DC82" depressed fab
              ><v-icon size="43" color="white">mdi-facebook</v-icon></v-btn
            >
            <v-btn class="mr-3" color="#00DC82" depressed fab
              ><v-icon size="30" color="white">mdi-instagram</v-icon></v-btn
            >
            <v-btn
              class="mr-3"
              color="#00DC82"
              depressed
              fab
              @click="reouteToGithub"
              ><v-icon size="30" color="black">mdi-github</v-icon></v-btn
            >
          </v-col>
          <v-row>
            <v-col cols="12" md="">
              <p class="white--text text-center">
                2022 - A mock Vue.js project by
                <a
                  class="blue--text"
                  href="https://no.linkedin.com/in/claudio-rescigno-6b0531177?original_referer=https%3A%2F%2Fwww.google.com%2F"
                  target="_blank"
                  >Claudio Rescigno</a
                >
              </p>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'Dr.Dropin',
      drawer: false,
      tabItems: [
        'Alle tjenester',
        'Resept',
        'Klinikker',
        'For bedrifter',
        'Om oss',
      ],
      drawerItems: [
        {
          title: 'Allmennlege',
          to: '#',
        },
        {
          title: 'Hudlege',
          to: '#',
        },
        {
          title: 'Gynekolog',
          to: '#',
        },
        {
          title: 'Barnelege',
          to: '#',
        },
        {
          title: 'Fysioterapeut',
          to: '#',
        },
        {
          title: 'Kiropraktor',
          to: '#',
        },
        {
          title: 'Psykolog',
          to: '#',
        },
        {
          title: 'Plastikkirurg',
          to: '#',
        },
        {
          title: 'Jordmor',
          to: '#',
        },
        {
          title: 'Andre medisinske problemstillinger',
          to: '#',
        },
        {
          title: 'Resept',
          to: '#',
        },
        {
          title: 'Klinikker',
          to: '#',
        },
        {
          title: 'Koronatest',
          to: '#',
        },
        {
          title: 'For bedrifter',
          to: '#',
        },
        {
          title: 'Om oss',
          to: '#',
        },
        {
          title: 'Kontakt',
          to: '#',
        },
        {
          title: 'Spørsmål og svar',
          to: '#',
        },
        {
          title: 'Karriere',
          to: '#',
        },
        {
          title: 'Ledige stillinger',
          to: '#',
        },
      ],
    }
  },
  methods: {
    reouteToGithub() {
      window.open('https://github.com/ClaudioVR/dr-dropin', '_blank')
    },
  },
}
</script>

<style>
.v-application a {
  color: white !important;
  text-decoration: none;
}
</style>
