<template>
  <container-box width="280px">
    <template v-slot:header>Deviation</template>
    <template v-slot:content disabled>
      <v-select
        :items="deviateInEqGroup"
        item-text="deviateName"
        item-value="deviateID"
        label="Select Deviation"
        solo
        hide-details
        @change="onDeviateChange($event)"
        :disabled="!isSelectedEQ(indFlow)"
      ></v-select>
      <br />
      <v-textarea
        solo
        label="Add Description"
        rows="3"
        no-resize
        hide-details
        :disabled="!isSelectedEQ(indFlow)"
      ></v-textarea>
      <!-- <br /> -->
      <div class="text-right mt-2">
        <v-btn icon small>
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
        <v-btn icon small>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </template>
  </container-box>
</template>

<script>
import ContainerBox from '../common/ContainerBox';
import {Deviate} from '../../class/db';
import {mapGetters, mapActions} from 'vuex';
export default {
  props: ['indFlow', 'deviation'],
  components: {
    'container-box': ContainerBox,
  },
  data: () => ({}),
  mounted() {
    // this.getEqGroup(0);
  },
  methods: {
    ...mapActions(['updateDeviate']),
    onDeviateChange(e) {
      console.log(e);
      this.updateDeviate({indFlow: this.indFlow, deviateID: e});
      // deviateID
    },
  },
  computed: {
    ...mapGetters(['isSelectedEQ', 'getEqGroup']),
    deviateInEqGroup() {
      return Deviate.filter((f) => f.eqGroupID == this.getEqGroup(0));
    },
  },
};
</script>

<style></style>
