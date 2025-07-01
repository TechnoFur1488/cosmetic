import s from "./Sels.module.css";
import { add } from "../../routes/Product/productSlice";
import { useDispatch } from "react-redux";

const products = [
    {
        id: 1,
        count: 1,
        img: "/images/0f95b32fd42c4bebd7d4bde83af109d1 1.png",
        name: "Шампунь",
        none: "550р",
        price: 425
    },
    {
        id: 2,
        count: 1,
        img: "/images/e10ef46e812b2e634ebabfa49b4481f3 1.png",
        name: "Набор очищающий для лица",
        none: "4800р",
        price: 3999
    },
    {
        id: 3,
        count: 1,
        img: "/images/23ebd17ce6721eefd1053137d0da53a7 1.png",
        name: "Масло гидрофильное",
        none: "1999р",
        price: 1200
    },
    {
        id: 4,
        count: 1,
        img: "/images/116664166d5d70522c368f0391c35bc1 3.png",
        name: "Скраб для лица",
        none: "2700р",
        price: 2450
    },
    {
        id: 5,
        count: 1,
        img: "/images/30b88eed21893eb8a2e9b2dfd846ab46 1.png",
        name: "Гель для душа",
        none: "720р",
        price: 600
    },
    {
        id: 6,
        count: 1,
        img: "/images/ef31cab067c3900b279ea18dc7147711 1.png",
        name: "Cыворотка для лица",
        none: "700р",
        price: 599
    },
    {
        id: 7,
        count: 1,
        img: "/images/3dd046cc7e9e794c402ff67124fab188 1.png",
        name: "Крем для тела",
        none: "890р",
        price: 650 
    },
    {
        id: 8,
        count: 1,
        img: "/images/9e76bbd6dee965584612f02e3a1d83a8 1.png",
        name: "Скраб для тебя",
        none: "670р",
        price: 400
    },
]

export const Sels = () => {
    const disp = useDispatch()

    return (
        <>
            <section className={s.sss}>
                <h1>Распродажа</h1>
            </section>
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
                                <span className={s.spanNone}>{product.none}</span>
                                <span>{product.price}р</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
};
