
import { createStore } from 'redux';

const initState = {
    cart: 0,
    categories: [
        { name: 'sport', displayName: 'Sports' },
        { name: 'drinks', displayName: '' },
    ],
    products: [
        {
            name: 'Cleats',
            description: 'High Performance',
            stock: 5,
            price: 125,
            category: 'sport',
        },
        {
            name: 'Jersey',
            description: 'Official gear',
            stock: 25,
            price: 68,
            category: 'sport',
        },
        {
            name: 'Gaterade',
            description: 'quench thirsty',
            stock: 25,
            price: 1.25,
            category: 'drinks',
        },
        {
            name: 'BodyARMOR',
            description: 'electrolyte drink',
            stock: 1,
            price:2.50,
            category: 'drinks',
        },
    ],
    currentCategory: 'drinks',
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

export default createStore(reducer);