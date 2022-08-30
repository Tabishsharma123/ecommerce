import Cart from "../../vmart/Cart";

const cart = [];
const product_arr = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        // Check if Product is Already Exist
        case "ADDITEM":
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                // Increase the Quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            }
            else {
                const product = action.payload;
                product_arr.push(product.id);

                const array_data = product_arr;
                console.log(array_data);

                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }

        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            }
            else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
            }

        default:
            return state;
    }
}




export default handleCart;