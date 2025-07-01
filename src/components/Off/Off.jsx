import React, { useState } from "react";
import s from "./Off.module.css";

export const Off = () => {
    const [deliveryMethod, setDeliveryMethod] = useState(""); 
    const [paymentMethod, setPaymentMethod] = useState(""); 

    return (
        <section>
            <h1>Оформление заказа</h1>
            <div className={s.container}>
                <h3>Адрес и способы доставки</h3>
                <div className={s.divF}>
                    <span className={s.spann}>Населённый пункт</span>
                    <select className={s.sel} name="" id="">
                        <option value="">Москва</option>
                        <option value="">Минск</option>
                    </select>
                </div>
                <div className={s.sFlex}>
                    <span className={s.spann}>Способ доставки</span>
                    <div className={s.inSp}>
                        <div>
                            <input
                                type="radio"
                                name="delivery"
                                value="courier"
                                checked={deliveryMethod === "courier"}
                                onChange={() => setDeliveryMethod("courier")}
                            />
                            <span>Курьер</span>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="delivery"
                                value="pickup"
                                checked={deliveryMethod === "pickup"}
                                onChange={() => setDeliveryMethod("pickup")}
                            />
                            <span>Самовывоз</span>
                        </div>
                    </div>
                </div>
                <div className={s.adres}>
                    <span className={s.spann}>Адрес</span>
                    <div className={s.inpur}>
                        <input className={s.adr} type="text" placeholder="Улица, дом" />
                        <input className={s.adr} type="text" placeholder="Квартира" />
                        <input className={s.adr} type="text" placeholder="Подъезд" />
                        <input className={s.adr} type="text" placeholder="Этаж" />
                    </div>
                </div>
                <div className={s.com}>
                    <span className={s.spann}>Комментарий</span>
                    <div>
                        <input placeholder="Информация для курьера" className={s.in} type="text" />
                        <div className={s.line}></div>
                    </div>
                </div>
                <h3>Получатель</h3>
                <div className={s.con}>
                    <span className={s.spann}>Контакты</span>
                    <div>
                        <div className={s.Fff}>
                            <input placeholder="Номер телефона" className={s.in} type="text" />
                            <div placeholder="Эл.почта  " className={s.line}></div>
                        </div>
                        <div>
                            <input placeholder="Эл.почта" className={s.in} type="text" />
                            <div className={s.line}></div>
                        </div>
                    </div>
                </div>
                <div className={s.asd}>
                    <span className={s.spann}>Ваши данные</span>
                    <div>
                        <input placeholder="ФИО" className={s.in} type="text" />
                        <div className={s.line}></div>
                    </div>
                </div>
                <h3>Способы оплаты</h3>
                <div className={s.divOpl}>
                    <div>
                        <div>
                            <input
                                type="radio"
                                name="payment"
                                value="sbp"
                                checked={paymentMethod === "sbp"}
                                onChange={() => setPaymentMethod("sbp")}
                            />
                            <span className={s.opl}>СБП</span>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="payment"
                                value="cash"
                                checked={paymentMethod === "cash"}
                                onChange={() => setPaymentMethod("cash")}
                            />
                            <span className={s.opl}>Наличными курьеру</span>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="payment"
                                value="card"
                                checked={paymentMethod === "card"}
                                onChange={() => setPaymentMethod("card")}
                            />
                            <span className={s.opl}>Картой</span>
                        </div>
                    </div>
                    <button className={s.btn} onClick={() => alert("Оплачено")}>
                        Оплатить
                    </button>
                </div>
            </div>
        </section>
    );
};
