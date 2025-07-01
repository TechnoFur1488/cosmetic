import s from "./Shampoo.module.css";
import { add } from "../../../../routes/Product/productSlice";
import { useDispatch } from "react-redux";

const products = [
    {
        id: 1,
        count: 1,
        img: "/images/image (1).png",
        name: "Шампунь для сухих волос",
        price: 955
    }
]

export const Shampoo = () => {
    const disp = useDispatch()



    return (
        <div className={s.container}>
            {products.map(product => {
                const handleAdd = () => {
                    disp(add({
                        img: product.img,
                        name: product.name,
                        price: product.price,
                        count: product.count
                    }))
                    alert("Товар добавлен в корзину")
                }
                return (
                    <div className={s.contanerProduct} key={product.id}>
                        <div className={s.productImg}>
                            <div className={s.btnDiv}>
                               
                                <button onClick={() => handleAdd()} className={s.btnLikeBucket}><img src="/images/Vector (5).svg" alt="" /></button>
                            </div>
                            <img src={product.img} alt="" />
                        </div>
                        <div className={s.spanDiv}>
                            <span>{product.name}</span>
                            <span>{product.price}р</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};
