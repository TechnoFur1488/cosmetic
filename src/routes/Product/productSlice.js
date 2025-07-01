import { createSlice, nanoid } from '@reduxjs/toolkit';

let arr = JSON.parse(localStorage.getItem('product')) ?? []
const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: arr,
        count: 1
    },
    reducers: {
        add: (s, a) => {
            if (a.payload) {
                const { name, img, price, count } = a.payload;
                s.value.push({
                    id: nanoid(),
                    name,
                    img,
                    price,
                    count,
                });
                localStorage.setItem('product', JSON.stringify(s.value));
            }
        },
        inc: (s, a) => {
            const product = s.value.find((p) => p.id === a.payload);
            if (product) {
                product.count += 1;
                localStorage.setItem('product', JSON.stringify(s.value));
            }
        },
        dec: (s, a) => {
            const product = s.value.find((p) => p.id === a.payload);
            if (product && product.count > 1) {
                product.count -= 1;
                localStorage.setItem('product', JSON.stringify(s.value));
            }
        },
        remove: (s, a) => {
            const productId = a.payload;
            s.value = s.value.filter((product) => product.id !== productId);
            localStorage.setItem('product', JSON.stringify(s.value));
        },
        total: () => {
            const tot = 0;
            tot += product.count;
            return tot;
        },
    },
});

export default productSlice.reducer;

export const { add, inc, dec, remove, total } = productSlice.actions;
