import s from "./Gel.module.css"
import { useDispatch } from "react-redux";
import { add } from "../../../../routes/Product/productSlice";

const products = [
  {
    id: 2,
    count: 1,
    img: "/images/f4f978dfd23442e706acc89a276fd61a 1.png",
    name: "Гель для умывания",
    price: 1700
  },
  {
    id: 5,
    count: 1,
    img: "/images/aef24a5917e0678947b672efbc44b588 1 (1).png",
    name: "Гель для умывания",
    price: 900
  },
]

export const Gel = () => {
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

