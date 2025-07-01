import { Link } from "react-router-dom";
import s from "./Main.module.css";

export const Main = () => {
    return (
        <section className={s.sec}>
            <div className={s.container}>
                <div className={s.text}>
                    <p>Мы используем только лучшие натуральные ингридиенты, тщательно отобранные со всего мира. Наши формулы разработаны с учетом последних научных достижений в области дерматологии и косметологии, обеспечивая максимальную эффективность и безопасность.</p>
                    <Link className={s.btn} to={"/Face/"}>Смотреть</Link>
                </div>
            </div>
        </section>
    );
};
