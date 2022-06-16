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
    <v-app-bar dark class="primary" flat fixed app>
      <v-toolbar-title v-text="title" />
      <NuxtLogo class="ml-1" />
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <!-- <v-container class="primary"> -->
      <Nuxt />
      <!-- </v-container> -->
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
      drawer: false,
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
      title: 'Dr.Dropin',
    }
  },
}
</script>
