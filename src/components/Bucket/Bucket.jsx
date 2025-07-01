import { Link } from "react-router-dom";
import { dec, inc, remove } from "../../routes/Product/productSlice";
import s from "./Bucket.module.css"
import { useDispatch, useSelector } from "react-redux";

export const Bucket = () => {
    const products = useSelector((s) => s.product?.value || [])
    const disp = useDispatch()

    const TotalTov = () => {
        let total = 0;
        products.forEach(product => {
            total += product.count * product.price;
        });
        return total;
    };


    return (
        <div className={s.container}>
            {products.length > 0 ? (
                <>
                    {products.map(product => (
                        <div className={s.flex} key={product.id}>
                            <div className={s.imgDiv}>
                                <img src={product.img} alt={product.name} />
                            </div>
                            <div className={s.containerS}>
                                <div className={s.textButDiv}>
                                    <span>{product.name}</span>
                                    <div className={s.btnDelBtnCou}>
                                        <div className={s.btnSpan}>
                                            <button onClick={() => disp(dec(product.id))}>
                                                <img src="/images/Vector.svg" alt="Уменьшить" />
                                            </button>
                                            <span>{product.count}</span>
                                            <button onClick={() => disp(inc(product.id))}>
                                                <img src="/images/Vector (12).svg" alt="Увеличить" />
                                            </button>
                                        </div>
                                        <button
                                            className={s.btnDel}
                                            onClick={() => disp(remove(product.id))}
                                        >
                                            <img
                                                src="/images/delete_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz24.svg"
                                                alt="Удалить"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className={s.res}>
                                    <span>{product.price * product.count} р</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={s.text}>
                        <span>Стоимость продуктов</span>
                        <span>{TotalTov()} р</span>
                    </div>
                    <div className={s.textS}>
                        <span>Итог {TotalTov()} р</span>
                    </div>
                    <div className={s.divLink}>
                        <Link to={"/Off"} className={s.link}>
                            Оформить заказ
                        </Link>
                    </div>
                </>
            ) : (
                <div className={s.empty}>
                    <h2>Корзина пуста</h2>
                    <p>Добавьте товары в корзину, чтобы оформить заказ.</p>
                    <Link to="/" className={s.linkBack}>
                        Вернуться к покупкам
                    </Link>
                </div>
            )}
        </div>
    )
};

