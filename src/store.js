import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    workFlow: [
      {
        deviateID: null,
        deviateDescription: null,
        cause: [
          {
            causeNo: 1,
            operationID: null,
            specificCause: [],
            consequence: [
              [
                {
                  eqGroupID: null,
                  consequenceDescription: '',
                },
              ],
            ],
          },
        ],
      },
      // {
      //   deviateID: null,
      //   deviateDescription: null,
      //   cause: [
      //     {
      //       causeNo: 1,
      //       operationID: null,
      //       specificCause: [],
      //       consequence: [
      //         [
      //           {
      //             eqGroupID: null,
      //             consequenceDescription: '',
      //           },
      //         ],
      //       ],
      //     },
      //   ],
      // },
    ],
  },
  mutations: {

    // EQ
    updateEq(state, obj) {
      state.workFlow[obj.indFlow].cause[0].consequence[0][obj.indEq].eqGroupID =
        obj.eqGroupID;
    },
    addEq(state, indFlow) {
      state.workFlow[indFlow].cause.forEach((cause) => {
        cause.consequence.forEach((consequence) => {
          consequence.push({
            eqGroupID: null,
          });
        });
      });
    },
    // end EQ
    // deviate
    updateDeviate(state, obj) {
      state.workFlow[obj.indFlow].deviateID = obj.deviateID;
    },
    addDeviate(state) {
      state.workFlow.push({
        deviateID: null,
        deviateDescription: null,
        cause: [
          {
            causeNo: 1,
            operationID: null,
            specificCause: [],
            consequence: [
              [
                {
                  eqGroupID: null,
                  consequenceDescription: '',
                },
              ],
            ],
          },
        ],
      })
    },
    // end deviate

    // cause
    addSpecificCause(state, obj) {
      state.workFlow[obj.indFlow].cause[obj.indCause].specificCause.push({
        tagId: null,
        tagName: null,
        failureId: obj.failureId,
        failureDescription: obj.failureDescription,
      });
    },
    updateOperationID(state, obj) {
      state.workFlow[obj.indFlow].cause[obj.indCause].operationID =
        obj.operationID;
    },
    addCause(state, indFlow) {
      // a[0].cause[0].consequence[0].map( m => ({eqGroupID : m.eqGroupID}));
      let duplicateConsequence = state.workFlow[indFlow].cause[0].consequence[0].map(m => ({ eqGroupID: m.eqGroupID }));
      state.workFlow[indFlow].cause.push(
        {
          causeNo: state.workFlow[indFlow].cause.length + 1,
          operationID: null,
          specificCause: [],
          consequence: [
            duplicateConsequence
          ],
        }
      )
    },
    // end cause

    // consequence

    addConsequence(state, obj) {
      let duplicateConsequence = state.workFlow[obj.indFlow].cause[0].consequence[0].map(m => ({ eqGroupID: m.eqGroupID }));
      state.workFlow[obj.indFlow].cause[obj.indCause].consequence.push(duplicateConsequence);
    }
    // end consequnce
  },

  actions: {

    // Equipment
    addEq({ commit }, indFlow) {
      commit('addEq', indFlow);
    },
    updateEq({ commit }, objEq) {
      commit('updateEq', objEq);
    },

    // End Equipment

    // Deviate
    updateDeviate({ commit }, objDva) {
      commit('updateDeviate', objDva);
    },
    addDeviate({ commit }) {
      commit('addDeviate');
    },
    // end Deviate

    // Cause
    addSpecificCause({ commit }, objSpecific) {
      commit('addSpecificCause', objSpecific);
    },
    updateOperationID({ commit }, objOperation) {
      commit('updateOperationID', objOperation);
    },
    addCause({ commit }, indFlow) {
      commit('addCause', indFlow);
    },

    // consequence 
    addConsequence({ commit }, objCon) {
      commit('addConsequence', objCon)
    }
  },

  getters: {
    equipments(state, flowNo, causeNo) {
      return state.workFlow[flowNo].cause[causeNo].consequence;
    },
    isSelectedEQ: (state) => (flowNo) => {
      return state.workFlow[flowNo].cause[0].consequence[0][0].eqGroupID != null
        ? true
        : false;
    },
    getEqGroup: (state) => (indFlow) => {
      // console.log(state.workFlow[indFlow].cause[0].consequence[0][0].eqGroupID);
      return state.workFlow[indFlow].cause[0].consequence[0][0].eqGroupID;
    },
    getDeviateID: (state) => (indFlow) => {
      return state.workFlow[indFlow].deviateID;
    },
  },
});
