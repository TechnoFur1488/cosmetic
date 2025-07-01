import s from "./Serums.module.css"
import { useDispatch } from "react-redux";
import { add } from "../../../../routes/Product/productSlice";

const products = [
  {
    id: 6,
    count: 1,
    img: "/images/f65569e52206eb9b81df6283cea5a270 1.png",
    name: "Сыворотка для лица",
    price: 700
  }
]

export const Serums = () => {
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

