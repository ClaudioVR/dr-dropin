<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      class="primary darken-2"
      right
      fixed
      app
      width="100%"
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
      <bestill-time-button />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
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
}
</script>

<style>
.v-application a {
  color: white !important;
  text-decoration: none;
}
</style>
