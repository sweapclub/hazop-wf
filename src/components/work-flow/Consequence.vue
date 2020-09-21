<template>
  <container-box width="420px">
    <template v-slot:header>Consequnce</template>
    <template v-slot:content>
      <v-textarea
        solo
        rows="5"
        label="Consequence Description"
        no-resize
        hide-details
        style="background-color:white;border:1px solid rgba(0, 0, 0, 0.2);"
      ></v-textarea>
      <div class="pt-2 pb-2 d-flex justify-space-between align-center">
        <v-btn class="pl-1 pr-1" style="width:148px;">
          <v-icon>mdi-gauge-empty</v-icon>Pick Severity
        </v-btn>
        <!-- <v-btn class="pa-1 justify-left" style="width:148px" color="red">
          <v-icon>mdi-gauge-empty</v-icon> Severity : C4</v-btn
        >-->
        <v-btn class="pl-1 pr-1">
          <v-icon>mdi-biohazard</v-icon>HAZ-TPE-0001
        </v-btn>
      </div>
      <div class="specific-cause-box pl-2 pr-2">
        <div class="text-subtitle-2 text-center">Safeguard (SG)</div>
        <div class="list-container">
          <template>
            <v-container class="pa-1 mt-2 mb-2">
              <v-row no-gutters align="center">
                <v-col cols="auto" class="pr-1">
                  <v-btn small color="primary" width="100" height="38">Select Tag</v-btn>
                </v-col>
                <v-col cols>
                  <v-textarea solo label="Add Description" rows="1" auto-grow hide-details dense></v-textarea>
                </v-col>
              </v-row>
            </v-container>
            <v-divider></v-divider>
          </template>
          <template>
            <v-container class="pa-1 mt-2 mb-2">
              <v-row no-gutters align="center">
                <v-col cols="auto" class="pr-1">
                  <v-btn small color="secondary" width="100" height="38">AAAA-BBBB</v-btn>
                </v-col>
                <v-col cols>
                  <v-textarea solo label="Add Description" rows="1" auto-grow hide-details dense></v-textarea>
                </v-col>
              </v-row>
            </v-container>
            <v-divider></v-divider>
          </template>
        </div>
        <div class="text-right">
          <v-btn icon small>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="d-flex justify-space-between align-end mt-2">
        <v-btn class="pl-1 pr-1">
          <v-icon>mdi-gauge-empty</v-icon>Risk : R2
        </v-btn>
        <div>
          <v-btn icon small>
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
          <v-btn icon small @click="onClickAdd">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </div>
    </template>
  </container-box>
</template>

<script>
import ContainerBox from "../common/ContainerBox";
import { mapActions } from "vuex";
export default {
  props: ["indFlow", "indCause", "indConsequence"],

  components: {
    "container-box": ContainerBox,
  },
  // mounted() {
  //   console.log(this.getDeviateID(this.indFlow));
  // },
  computed: {},
  mounted() {
    // console.log(this.indFlow, this.indCause, this.indConsequence);
  },
  methods: {
    ...mapActions(["addConsequence"]),
    onClickAdd() {
      this.addConsequence({
        indFlow: this.indFlow,
        indCause: this.indCause,
        indConsequence: this.indConsequence,
      });
      // addConsequence
    },
  },
};
</script>

<style></style>
