import s from "./AllBody.module.css";
import { add } from "../../../../routes/Product/productSlice";
import { useDispatch } from "react-redux";

const products = [
    {
        id: 1,
        count: 1,
        img: "/images/image (1).png",
        name: "Шампунь для сухих волос",
        price: 955
    },
    {
        id: 2,
        count: 1,
        img: "/images/image 3 (1).png",
        name: "Набор (крем, гель, скраб)",
        price: 2300
    },
    {
        id: 3,
        count: 1,
        img: "/images/9af116199119385258a2149110b18a5b 1.png",
        name: "Гель для душа",
        price: 1200
    },
    {
        id: 4,
        count: 1,
        img: "/images/a46fc71e6a2e8ba9eb5d7e9b1f0df877 1.png",
        name: "Крем для рук",
        price: 500
    },
    {
        id: 5,
        count: 1,
        img: "/images/image (2).png",
        name: "Гель для душа",
        price: 590
    },
    {
        id: 6,
        count: 1,
        img: "/images/c7670e6bc7583228b9e6c9eaf61aaed1 1.png",
        name: "Cыворотка для лица",
        price: 730
    }
]

export const AllBody = () => {
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
