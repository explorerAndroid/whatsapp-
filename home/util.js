checkFieldValueRequirements({
  test: {
    enum: ['test', 'one', 'two'],
    // enum: ['test', 'one', 'two'],
    type: variableTypes.STRING,
    value: 'test'
  },
  test2: {
    required: true,
    type: variableTypes.OBJECT,
    value: {
      deep1: {
        type: variableTypes.OBJECT,
        value: {
          deep2: {
            type: variableTypes.NUMBER,
            value: 'something'
          }
        }
      },
      deep2: {
        type: variableTypes.BOOLEAN,
        value: true
      }
    }
  },
  test3: {
    required: true,
    type: variableTypes.ARRAY,
    value: [
      { thisThing: {type: variableTypes.number, value: '10'} }
    ],
    valuesType: variableTypes.OBJECT
    }
  }, {
  depth: 310
});

// returns
// {
//   erroredFields: [
//     'test2.deep1.deep2 (value !== type)',
//     'test3[0].thisThing (value !== type)'
//   ],
//     success: false
// }
