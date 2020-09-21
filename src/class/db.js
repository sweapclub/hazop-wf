export const Equipments = [
  {
    eqTag: 'TK-A',
    eqName: 'Storage Tank',
    eqGroupID: 'eqg01',
    eqGroupName: 'Storage',
    eqType: 'ATM Tank',
  },
  {
    eqTag: 'B',
    eqName: 'Feed Tank',
    eqGroupID: 'eqg01',
    eqGroupName: 'Storage',
    eqType: 'P.Vessel',
  },
  {
    eqTag: 'C',
    eqName: 'Feed Pump',
    eqGroupID: 'eqg02',
    eqGroupName: 'Pump',
    eqType: 'Centrifugal',
  },
];

export const Deviate = [
  {
    eqGroupID: 'eqg01',
    deviateName: 'Low Pressure',
    deviateID: 'D01',
  },
  {
    eqGroupID: 'eqg01',
    deviateName: 'High Level',
    deviateID: 'D02',
  },
  {
    eqGroupID: 'eqg01',
    deviateName: 'Low Level',
    deviateID: 'D03',
  },
];

export const Causes = [
  {
    eqGroupID: 'eqg01',
    deviateID: 'D01',
    operationID : 'OP01',
    operationName: 'Underpressure or Vacuum',
    scenario: [
      {
        scenarioID: 'S001',
        scenarioName: 'Failure of vacuum system control',
      },
      {
        scenarioID: 'S002',
        scenarioName: 'Obstructed vent path',
      },
      {
        scenarioID: 'S003',
        scenarioName:
          'Uncontrolled condensation/absorption of vapor phase component',
      },
      {
        scenarioID: 'S004',
        scenarioName: 'Excessive liquid withdrawal rate',
      },
    ],
  },
  {
    eqGroupID: 'eqg01',
    deviateID: 'D02',
    operationID : 'OP02',
    operationName: 'Over-fill',
    scenario: [
      {
        scenarioID: 'S005',
        scenarioName: 'Level control failure causing spill',
      },
      {
        scenarioID: 'S006',
        scenarioName: 'Incorrect or unanticipated cross-connection',
      },
      {
        scenarioID: 'S007',
        scenarioName: 'Leak from heating/cooling system',
      },
      {
        scenarioID: 'S008',
        scenarioName:
          'Leak or excessive fill from liquid utility system (e.g., utility water)',
      },
    ],
  },
  {
    eqGroupID: 'eqg01',
    deviateID: 'D03',
    operationID : 'OP01',
    operationName: 'Low Level',
    scenario: [
      {
        scenarioID: 'S009',
        scenarioName: 'Level control failure',
      },
      {
        scenarioID: 'S010',
        scenarioName:
          'Incorrect or unanticipated cross-connection causing uncontrolled outflow',
      },
      {
        scenarioID: 'S011',
        scenarioName:
          'Ignition of flammable atmosphere in tank vapor space following low level that results in floating roof sitting on its internal legs',
      },
    ],
  },
];
