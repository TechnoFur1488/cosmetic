import React, { useState } from "react";
import s from "./Profil.module.css";
import { Link } from "react-router-dom";

export const Profil = () => {
    const [gender, setGender] = useState("");

    const handleGenderChange = (e) => {
        setGender(e.target.value)
    };

    return (
        <section>
            <h1 className={s.title}>Профиль</h1>
            <div className={s.container}>
                <div className={s.info}>
                    <div>
                        <input className={s.in} type="text" placeholder="Имя" />
                        <div className={s.divLine}></div>
                    </div>
                    <div className={s.radio}>
                        <div>
                            <input
                                className={s.rad}
                                type="radio"
                                name="gender"
                                value="Ж"
                                checked={gender === "Ж"}
                                onChange={handleGenderChange}
                            />
                            <span className={s.rad}>Ж</span>
                        </div>
                        <div>
                            <input
                                className={s.rad}
                                type="radio"
                                name="gender"
                                value="М"
                                checked={gender === "М"}
                                onChange={handleGenderChange}
                            />
                            <span className={s.rad}>М</span>
                        </div>
                    </div>
                    <div className={s.date}>
                        <span>Дата Рождения</span>
                        <input className={s.in} type="date" placeholder="Поле 1" />
                    </div>
                    <div>
                        <input className={s.in} type="tel" placeholder="Номер телефона" />
                        <div className={s.divLine}></div>
                    </div>
                    <button className={s.btnSave} onClick={() => alert("Данные сохранены")}>Сохранить</button>
                </div>
                <div className={s.s}>
                    <Link to={"/Bucket"}>Корзина</Link>
                    <Link to={"/"}>К покупкам</Link>
                </div>
            </div>
        </section>
    );
};
