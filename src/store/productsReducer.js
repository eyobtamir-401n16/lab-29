

const initState = {
allProducts: [
    {
        name: 'Cleats',
        description: 'High Performance',
        stock: 5,
        price: 125,
        category: 'sport',
        img: "../../public/image/sport/cleats.jpg",
    },
    {
        name: 'Jersey',
        description: 'Official gear',
        stock: 25,
        price: 68,
        category: 'sport',
        img: "../../public/image/sport/jersey.jpg",
    },
    {
        name: 'Gaterade',
        description: 'quench thirsty',
        stock: 25,
        price: 1.25,
        category: 'drinks',
        img: "../../public/image/drinks/gaterade.jpg",
    },
    {
        name: 'coke',
        description: 'refreshment drink',
        stock: 1,
        price:2.50,
        category: 'drinks',
        img: "../../public/image/drinks/coke.jpg",
    },
],

};

const reducer = (state = initState, action) => {


let newState = { ...state };

switch (action.type) {

    case 'ADD_TO_CART':
        break;
    case 'CHANGE_CATEGORY':
        newState.currentCategory = action.payload;
        break;
    default:
        break;
}

return newState;
};

export default reducer;