<template>
  <!-- <v-container fluid>
    <v-row v-for="(f, indFlow) in workFlow" :key="indFlow">
      <div class="pl-3 pr-3" style="flex: 0 0 728px;">
        <v-card style="width:100%;">
          <v-card-text>
            <v-container>
              <v-row no-gutters class="align-center">
                <v-col cols="2">
                  <div class="text-subtitle-2 justify-center">
                    Selected Node :
                  </div>
                </v-col>
                <v-col cols>
                  <v-select
                    label=""
                    solo
                    hide-details
                    dense
                    full-width
                  ></v-select
                ></v-col>
              </v-row>
              <v-row class="align-center pt-4" no-gutters>
                <v-col cols="2 ">
                  <div class="text-subtitle-2 justify-center">
                    Node Name :
                  </div>
                </v-col>
                <v-col cols> Propylene feed system</v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </div>
      <v-spacer></v-spacer>
      <div
        class="test pl-3 pr-3"
        style="flex: 0 0 calc(100% - 704px);overflow-y:auto;"
        ref="headerEq"
      >
        <table style="border-collapse:collapse;overflow:auto;">
          <tr>
            <td
              v-for="(eq, indEq) in f.cause[0].consequence[0]"
              :key="indEq"
              valign="top"
              class="pr-3"
            >
              <Equipment :ind-flow="indFlow" :ind-eq="indEq" :eq="eq" />
            </td>
          </tr>
        </table>
      </div>
    </v-row>

    <v-row v-for="(f, indFlow) in workFlow" :key="'b' + indFlow">
      <div style="flex:1;" v-for="(c, indCause) in f.cause" :key="c.causeNo" class="pa-0">
        <v-row class="pl-2 pr-2">
          <div class="pa-2">
            <Deviation :ind-flow="indFlow" :deviation="f" />
          </div>
          <div class="pa-2">
            <Cause :ind-flow="indFlow" :ind-cause="indCause" :cause="c" />
          </div>
          <div class="test pa-2" style="flex: 0 0 calc(100% - 712px);overflow-y:auto;">
            <div style="max-width:100%;overflow:auto;" id="scroll-target">
              <table style="border-collapse:collapse;" v-scroll:#scroll-target="onScroll">
                <tr v-for="(eq, indConsequence) in c.consequence" :key="indConsequence">
                  <td valign="top" v-for="(cons, indCons) in eq" :key="indCons">
                    <template v-if="indCons == 0">
                      <Consequence :ind-flow="indFlow" class="mr-3" />
                    </template>
                    <template v-else>
                      <EscalatingConsequence class="mr-3" />
                    </template>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </v-row>
      </div>
    </v-row>
  </v-container>-->
  <div>
    <v-container fluid v-for="(f, indFlow) in workFlow" :key="indFlow">
      <v-row>
        <div class="pl-1 pr-1" style="flex: 0 0 704px;" v-if="indFlow == 0">
          <v-card style="width:100%;">
            <v-card-text>
              <v-container>
                <v-row no-gutters class="align-center">
                  <v-col cols="2">
                    <div class="text-subtitle-2 justify-center">Selected Node :</div>
                  </v-col>
                  <v-col cols>
                    <v-select label solo hide-details dense full-width></v-select>
                  </v-col>
                </v-row>
                <v-row class="align-center pt-4" no-gutters>
                  <v-col cols="2">
                    <div class="text-subtitle-2 justify-center">Node Name :</div>
                  </v-col>
                  <v-col cols>Propylene feed system</v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </div>

        <v-spacer v-else></v-spacer>

        <div
          class="test ml-3 mr-2"
          style="flex: 0 0 calc(100% - 724px);overflow-y:auto;"
          ref="headerEq"
        >
          <table style="border-collapse:collapse;overflow:auto;">
            <tr>
              <td v-for="(eq, indEq) in f.cause[0].consequence[0]" :key="indEq" valign="top">
                <Equipment class="mr-3" :ind-flow="indFlow" :ind-eq="indEq" :eq="eq" />
              </td>
            </tr>
          </table>
        </div>
      </v-row>

      <v-row v-for="(c, indCause) in f.cause" :key="c.causeNo">
        <div style="flex:1;" class="pa-0">
          <v-row class="pl-2 pr-2">
            <div class="pa-2" v-if="indCause == 0">
              <Deviation :ind-flow="indFlow" :deviation="f" />
            </div>
            <v-spacer v-else></v-spacer>

            <div class="pa-2">
              <Cause :ind-flow="indFlow" :ind-cause="indCause" :cause="c" />
            </div>
            <div class="test pa-2" style="flex: 0 0 calc(100% - 712px);overflow-y:auto;">
              <div style="max-width:100%;overflow:auto;" id="scroll-target">
                <table style="border-collapse:collapse;" v-scroll:#scroll-target="onScroll">
                  <tr v-for="(eq, indConsequence) in c.consequence" :key="indConsequence">
                    <td valign="top" v-for="(cons, indCons) in eq" :key="indCons">
                      <template v-if="indCons == 0">
                        <Consequence
                          :ind-flow="indFlow"
                          :ind-cause="indCause"
                          :ind-consequence="indConsequence"
                          class="mr-3"
                        />
                      </template>
                      <template v-else>
                        <EscalatingConsequence class="mr-3" />
                      </template>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </v-row>
        </div>
      </v-row>
      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<script>
import Deviation from "../components/work-flow/Deviation";
import Cause from "../components/work-flow/Cause";
import Consequence from "../components/work-flow/Consequence";
import EscalatingConsequence from "../components/work-flow/EscalatingConsequence";
import Equipment from "../components/work-flow/Equipment";

// import workFlow from '../store/workFlow';
import { mapState } from "vuex";
export default {
  name: "workFlow",
  components: {
    Deviation,
    Cause,
    Consequence,
    EscalatingConsequence,
    Equipment,
  },
  data: () => ({}),
  methods: {
    onScroll(e) {
      console.log(this.$refs["headerEq"]);
      this.$refs["headerEq"][0].scrollLeft = e.target.scrollLeft;
    },
  },
  computed: {
    ...mapState(["workFlow"]),
  },
};
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.test::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.test {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #707070;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #707070;
}
</style>
