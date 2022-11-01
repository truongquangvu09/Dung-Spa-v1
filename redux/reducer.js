const initState = {
    product: {
        discount: '',
        img: '',
        name: '',
        price: '',
    },
    productDetail: [
        {
            id: 3,
            img: 'http://mauweb.monamedia.net/luxuryspa/wp-content/uploads/2020/03/1-1-1.jpg',
            name: 'Mô sâu',
            price: 12750000,
            price_discount: 14,
        },
    ],
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'viewDetail':
            return {
                ...state,
                productDetail: [...state.productDetail, action.payload],
            };
        default:
            return state;
    }
};

export default rootReducer;
