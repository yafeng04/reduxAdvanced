export default function courseReducer(state=[], action) {
  switch (action.type){
    case 'CREATE_COURSE':
      //3
      return [...state,
        Object.assign({}, action.course)
      ];
    default:
      return state;

  }
}
