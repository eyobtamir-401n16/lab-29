
const initState = {

  allCategories: [
    { name: 'sport', displayName: 'Sports' },
    { name: 'drinks', displayName: '' },
],
  currentCategory: 'drinks',
};

const reducer = (state = initState, action) => {
  let newState = { ...state };

  switch (action.type){

    case 'CONSOLE_LOG':
      break;

    case 'CHANGE_CATEGORY':
      newState.currentCategory = action.payload;
      break;

    case 'ADD_CATEGORY':
      newState.categories.push(action.payload)
      break;
    
    default:
      break;
  
  }

  return newState;

};

export default reducer;