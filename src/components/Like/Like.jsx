import { useSelector } from "react-redux";
import s from "./Like.module.css";

export const Like = () => {


    
    return (
        <div className={s.container}>
            <h1>Избранное</h1>
            <ul className={s.favoritesList}>
                {products.map((product) => (
                    <li key={product.id} className={s.favoriteItem}>
                        <img src={product.img} alt={product.name} />
                        <div>
                            <h2>{product.name}</h2>
                            <p>Цена: {product.price}р</p>
                        </div>
                        <button
                            className={s.removeFavorite}
                            onClick={() => handleRemoveFromFavorites(product.id)}
                        >
                            Удалить из избранного
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
};
