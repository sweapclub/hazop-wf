<template>
  <container-box width="420px" style="margin-bottom:0px !important;">
    <template v-slot:content>
      <!-- <div class="d-flex justify-space-between align-center mb-2 ">
        <div class="text-subtitle-2">Affected Equipment</div>
        <div class="text-body-2">
          Hexane Feed Drum
          <v-select
            :items="eqList"
            item-text="name"
            item-value="text"
            label=""
            solo
            hide-details
            dense
            style="width:120px; display:inline-block"
          ></v-select>
        </div>
      </div> -->

      <div class="d-flex justify-space-between align-center mb-2 ">
        <div class="text-subtitle-2">Affected Equipment</div>
        <div class="text-body-2">
          <span v-if="selectedEq">{{ selectedEq.eqName }} </span>

          <v-select
            :items="eqList"
            item-text="eqTag"
            v-model="selectedEq"
            label=""
            solo
            hide-details
            return-object
            dense
            style="width:120px; display:inline-block"
            @change="onEQChange($event)"
          ></v-select>
        </div>
      </div>

      <v-row>
        <v-col class="pt-1 pb-1">
          <!-- <v-btn small block>Storage Tank</v-btn> -->
          <div
            class="text-subtitle-2 text-center eq-name-box"
            style="background-color:#70A5CE;height:22px;"
          >
            <span v-if="selectedEq">{{ selectedEq.eqGroupName }}</span>
            <!-- Storage Tank -->
          </div>
        </v-col>
        <v-col class="pt-1 pb-1">
          <!-- <v-btn small block>ATM</v-btn> -->
          <div
            class="text-subtitle-2 text-center eq-name-box"
            style="background-color:#70A5CE; height:22px;"
          >
            <span v-if="selectedEq">{{ selectedEq.eqType }}</span>
            <!-- ATM -->
          </div>
        </v-col>
      </v-row>
      <div class="text-right">
        <v-btn icon x-small>
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
        <v-btn icon x-small @click="addEq(indFlow)">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </template>
  </container-box>
</template>

<script>
import {mapActions} from 'vuex';
import ContainerBox from '../common/ContainerBox';
import {Equipments} from '../../class/db';
export default {
  components: {
    'container-box': ContainerBox,
  },
  props: ['indFlow', 'indEq', 'eq'],
  data: () => ({
    // eqList: [{name: 'TK-AA', value: 'EQ01'}],
    eqList: Equipments,
    selectedEq: null,
  }),
  mounted() {
    this.selectedEq = this.eqList.find((f) => f.eqGroupID == this.eq.eqGroupID);
  },
  methods: {
    ...mapActions(['updateEq', 'addEq']),
    onEQChange(e) {
      this.updateEq({
        indFlow: this.indFlow,
        indEq: this.indEq,
        eqGroupID: e.eqGroupID,
      });
    },
  },
};
</script>

<style>
.eq-name-box {
  background-color: white;
  padding-top: 2px;
  padding-bottom: 2px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>
