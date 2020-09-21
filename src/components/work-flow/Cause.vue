<template>
  <container-box style="width:400px;">
    <template v-slot:header>Cause</template>
    <template v-slot:content>
      <div class="text-subtitle-2">Operational Deviation</div>

      <!-- item-value="scenario" -->
      <v-select
        :items="operationalDeviationList"
        item-text="operationName"
        label="Select Operational Deviation"
        return-object
        solo
        hide-details
        @change="onOperationChange($event)"
        background-color="#70A5CE"
      ></v-select>
      <br />
      <div class="text-subtitle-2">Failure Scenario Checklist</div>
      <div class="failure-checkbox-box">
        <v-row
          v-ripple
          no-gutters
          class="noselect pa-1"
          style="cursor:pointer;"
        >
          <v-col cols="auto"><v-icon medium>mdi-plus</v-icon></v-col>
          <v-col cols>
            Add New
          </v-col>
        </v-row>

        <v-row
          v-ripple
          no-gutters
          class="noselect pa-1"
          style="cursor:pointer;"
          v-for="(f, i) in failureList"
          :key="i"
          @click="onClickAddSpecific(f)"
        >
          <v-col cols="auto"><v-icon medium>mdi-plus</v-icon></v-col>
          <v-col cols>
            {{ f.scenarioName }}
          </v-col>
        </v-row>
      </div>
      <br />
      <div class="specific-cause-box  pl-2 pr-2">
        <div class="text-subtitle-2 text-center">Specific Cause</div>
        <div class="list-container">
          <div v-for="(s, i) in cause.specificCause" :key="i">
            <v-container class="pa-1 mt-2 mb-2">
              <v-row no-gutters align="center">
                <v-col cols="auto" class="pr-1">
                  <v-btn small color="primary" width="100" height="38"
                    >Select Tag</v-btn
                  >
                </v-col>
                <v-col cols>
                  <v-textarea
                    solo
                    label="Add Description"
                    rows="1"
                    auto-grow
                    hide-details
                    dense
                    :value="s.failureDescription"
                  >
                  </v-textarea>
                </v-col>
                <v-col cols="auto">
                  <v-btn icon>
                    <v-icon>mdi-set-merge</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
            <v-divider></v-divider>
          </div>
        </div>
        <div class="text-right">
          <v-btn icon small>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </div>
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
import {mapActions, mapGetters} from 'vuex';
import {Causes} from '../../class/db';
export default {
  props: ['indCause', 'indFlow', 'cause'],
  components: {
    'container-box': ContainerBox,
  },
  data: () => ({
    failureList: [],
  }),
  computed: {
    ...mapGetters(['getDeviateID', 'getEqGroup']),
    operationalDeviationList() {
      return Causes.filter(
        (f) =>
          f.deviateID == this.getDeviateID(this.indFlow) &&
          f.eqGroupID == this.getEqGroup(this.indFlow)
      );
    },
  },
  mounted() {
    console.log(this.indFlow);
  },
  methods: {
    ...mapActions(['addSpecificCause', 'updateOperationID']),
    onClickAddSpecific(obj) {
      // console.log(obj);
      this.addSpecificCause({
        indFlow: this.indFlow,
        indCause: this.indCause,
        failureId: obj.scenarioID,
        failureDescription: obj.scenarioName,
      });
    },
    onOperationChange(e) {
      console.log(e.scenario);
      this.failureList = e.scenario;
      this.updateOperationID({
        indFlow: this.indFlow,
        indCause: this.indCause,
        operationID: e.operationID,
      });
    },
  },
};
</script>

<style>
.failure-checkbox-box {
  max-height: calc(28px * 5);
  min-height: calc(28px * 4);
  overflow-y: auto;
  /* background-color: lightgrey; */
  background-color: #70a5ce;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.specific-cause-box {
  /* max-height: calc(28px * 5);
  min-height: calc(28px * 4); */
  background-color: #c4c4c4;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.specific-case-box,
.list-container {
  max-height: calc(62px * 4);
  min-height: calc(62px * 2);
  overflow-y: auto;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
