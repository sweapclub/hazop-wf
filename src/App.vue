<template>
  <v-app style="background-color:rgba(31, 31, 38, 0.5);">
    <v-app-bar app color="primary" dark dense>
      <div class="d-flex align-center">
        <div class="text-h6">Demo Workflow Hazop</div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- <HelloWorld/> -->
      <WorkFlow />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import WorkFlow from './views/WorkFlow';

export default {
  name: 'App',

  components: {
    WorkFlow,
  },

  data: () => ({
    //
  }),
};
</script>
